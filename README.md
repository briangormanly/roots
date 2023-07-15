## To create ...


roots is 

## Installation  

### Dependencies:
 * Postgres 
 * Node.js
 * That's it!

## Database setup
* You can either run /server/db/CreateTablesScript-base-example.sql or create a copy and modify / comment out default data to your liking
>  psql -U postgres -f server/db/createTablesScript-base-example.sql (from the root directory of the project, default roots password is 'roots')
* Run the script to create the database.  If you run the script with postgres / root user it will create a database and user named 'roots', then connect to the new database and create the schema using the roots user.

### Quick start setup
1. After installing and configuring Node.js and Postgres clone this git repo
> git clone https://github.com/briangormanly/roots.git
> cd roots
2. *Make a copy of the .env.example file called .env in the project home directory* 
3. In the .env file: 
    1. Note the FRONT_END_NAME in the future you can change this to use your own front end / Theme 
    2. Edit Postgres settings to connect to your database server
    3. Set a random session secret string 
    > SESSION_SECRET = EUOee33unt5haEAOUOMAKE_THIS_YOUR_OWNa34uei58355
    4. You can set email, stripe and github integrations off by setting the following:
    > EMAIL_TOGGLE = false  
    > STRPIE_TOGGLE = false  
    5. To use any of these integrations (email is a good one as you will need it for user email verification and password reset) set the parameter to 'true' (lowercase without the single quotes). You must also then set all the affiliated settings for that integration.
4. Save your .env file
5. Install dependencies 
> npm i
6. Start the service
> npm start

----- output ------
>
> roots running... {localhost:1986}
7. Navigate your web browser to http://localhost:PORT (default port is 1986) if you are running on your local machine.
8. Nice!


### Current Features
1. ..
