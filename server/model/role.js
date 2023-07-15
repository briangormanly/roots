/**
 * roots - Your webapp
 * © 2023 Brian Gormanly
 *
 */

function role() {
    this.roleId = -1;
    this.roleName = "";
    this.roleDescription = "";
    this.active = true;
    this.createTime;
}

exports.emptyRole = () => {
    return new role();
};


exports.ormRole = function ( row ) {
    let role = exports.emptyRole();
    role.roleId = row.role_id;
    role.roleName = row.role_name;
    role.roleDescription = row.role_description;
    role.active = row.active;
    role.createTime = row.create_time;
    return role;
};
