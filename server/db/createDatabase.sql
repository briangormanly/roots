-- rootsdb base database setup
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- setup (as root / postgres)
drop database rootsdb;
create database rootsdb;
create user rootsdb with encrypted password 'rootsdb';
grant all privileges on database rootsdb to rootsdb;
grant connect on database rootsdb to rootsdb;

\c rootsdb rootsdb

CREATE SCHEMA IF NOT EXISTS rootsdb;
GRANT ALL ON SCHEMA public TO rootsdb;

-- Set the search path to use the "agora" schema
SET search_path = rootsdb;

-- table creation
CREATE TABLE IF NOT EXISTS rootsdb.users (
    user_id uuid PRIMARY KEY,
    email VARCHAR,
    username VARCHAR,
    profile_filename VARCHAR,
    email_token VARCHAR,
    email_validated BOOLEAN,
    first_name VARCHAR,
    last_name VARCHAR,
    hashed_password VARCHAR,
    password_token VARCHAR,
    password_token_expiration BIGINT,
    role_id INTEGER DEFAULT 0,
    subscription_active BOOLEAN,
    stripe_id VARCHAR,
    available_access_tokens INTEGER,
    create_time TIMESTAMP DEFAULT current_timestamp
);

GRANT ALL PRIVILEGES ON TABLE rootsdb.users TO rootsdb;
--GRANT USAGE, SELECT ON SEQUENCE users_user_id_seq TO rootsdb;

CREATE INDEX IF NOT EXISTS idx_users_username ON rootsdb.users (LOWER(username));
CREATE INDEX IF NOT EXISTS idx_users_email ON rootsdb.users (LOWER(email));

CREATE TABLE IF NOT EXISTS rootsdb.session (
  sid varchar NOT NULL COLLATE "default",
  sess json NOT NULL,
  expire timestamp(6) NOT NULL,
  CONSTRAINT "session_pkey" PRIMARY KEY ("sid")
);

GRANT ALL PRIVILEGES ON TABLE session TO rootsdb;
CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON session ("expire");


CREATE TABLE IF NOT EXISTS rootsdb.user_sessions (
    user_session_id SERIAL PRIMARY KEY,
    user_id uuid,
    create_time TIMESTAMP DEFAULT current_timestamp,
    ip_address VARCHAR,
    client_type VARCHAR,
    client_name VARCHAR,
    client_version VARCHAR,
    client_engine VARCHAR,
    client_engine_version VARCHAR,
    os_name VARCHAR,
    os_version VARCHAR,
    os_platform VARCHAR,
    device_type VARCHAR,
    device_brand VARCHAR,
    device_model VARCHAR,
    bot VARCHAR

);

GRANT ALL PRIVILEGES ON TABLE rootsdb.user_sessions TO rootsdb;
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON rootsdb.user_sessions (user_id);
GRANT USAGE, SELECT ON SEQUENCE user_sessions_user_session_id_seq TO rootsdb;


CREATE TABLE IF NOT EXISTS rootsdb.roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR,
    role_description VARCHAR,
    active BOOLEAN,
    create_time TIMESTAMP DEFAULT current_timestamp
);

GRANT ALL PRIVILEGES ON TABLE rootsdb.roles TO rootsdb;
GRANT USAGE, SELECT ON SEQUENCE roles_role_id_seq TO rootsdb;

insert into rootsdb.roles (role_name, role_description, active) values ('Administrator', 'Administrator', true);
insert into rootsdb.roles (role_name, role_description, active) values ('User', 'General authenticated access', true);
insert into rootsdb.roles (role_name, role_description, active) values ('Founder', 'Founder membership', true);
insert into rootsdb.roles (role_name, role_description, active) values ('Creator', 'Content Creator', true);



CREATE TABLE IF NOT EXISTS rootsdb.user_roles (
    user_role_id SERIAL PRIMARY KEY,
    user_id uuid,
    role_id INTEGER,
    active BOOLEAN,
    create_time TIMESTAMP DEFAULT current_timestamp,
    end_time TIMESTAMP
);
GRANT ALL PRIVILEGES ON TABLE rootsdb.user_roles TO rootsdb;
GRANT USAGE, SELECT ON SEQUENCE user_roles_user_role_id_seq TO rootsdb;

CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON user_roles (user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_role_id ON user_roles (role_id);

-- insert into user_role_goal (user_id, role_id, active) values (1, 1, true);
-- creator waiting for the first user
-- insert into user_roles (user_id, role_id, active, end_time) values (1, 1, true, 'infinity');
-- insert into user_roles (user_id, role_id, active, end_time) values (1, 4, true, 'infinity');

CREATE TYPE visibility AS ENUM ('private', 'public');

CREATE TABLE IF NOT EXISTS rootsdb.tags (
    tag_id SERIAL PRIMARY KEY,
    tag VARCHAR UNIQUE,
    last_used TIMESTAMP,
    owned_by uuid
);

GRANT ALL PRIVILEGES ON TABLE rootsdb.tags TO rootsdb;
GRANT USAGE, SELECT ON SEQUENCE tags_tag_id_seq TO rootsdb;
CREATE INDEX IF NOT EXISTS idx_tags_tag ON rootsdb.tags (tag);

CREATE TYPE tag_entity_types AS ENUM ('unknown', 'workspace', 'topic', 'resource', 'user');

CREATE TABLE IF NOT EXISTS rootsdb.tag_associations (
    tag_association_id SERIAL PRIMARY KEY,
    tag_id INTEGER, -- fk to tag
    entity_type tag_entity_types, --  1-goal, 2-topic, 3-resource, 
    entity_id uuid, -- fk to entity id for entity_type
    user_id uuid, -- fk of user that set tag
    lookup_count INTEGER, -- incremented when user finds entity via tag lookup, tracks popularity.
    last_used TIMESTAMP,
    active BOOLEAN,
    create_time TIMESTAMP DEFAULT current_timestamp
);




-- Discussion API tables

CREATE TYPE discussion_parents AS ENUM ('workspace', 'topic');

CREATE TABLE IF NOT EXISTS rootsdb.discussions (
    parent_id uuid,
    parent_type discussion_parents,
    user_id uuid,
    discussion_text VARCHAR,
    CONSTRAINT discussion_parent PRIMARY KEY (parent_id, parent_type)
);

GRANT ALL PRIVILEGES ON TABLE discussions TO rootsdb;

CREATE TABLE IF NOT EXISTS rootsdb.discussion_comments (
    discussion_comment_id SERIAL PRIMARY KEY,
    parent_id INTEGER, 
    parent_type discussion_parents,
    comment_text VARCHAR,
    creation_date TIMESTAMP DEFAULT current_timestamp,
  	updated_date TIMESTAMP DEFAULT current_timestamp,
    user_id uuid
);

GRANT ALL PRIVILEGES ON TABLE rootsdb.discussion_comments TO rootsdb;


CREATE TABLE IF NOT EXISTS rootsdb.discussion_comment_ratings (
    discussion_comment_id INTEGER,
    user_id uuid,
    rating BOOLEAN,
    CONSTRAINT user_rating PRIMARY KEY (discussion_comment_id, user_id)
);

GRANT ALL PRIVILEGES ON TABLE rootsdb.discussion_comment_ratings TO rootsdb;

