/**
 * roots - Your webapp
 * © 2023 Brian Gormanly
 *
 */

function userRole() {
    this.userRoleId = -1;
    this.userId = "";
    this.roleId = "";
    this.active = true;
    this.createTime;
    this.endTime;           // end time of 0 is eternal (null or -1 is a problem)
}

exports.emptyUserRole = () => {
    return new userRole();
};

exports.ormUserRole = function ( row ) {
    let userRole = exports.emptyUserRole();
    userRole.userRoleId = row.user_role_id;
    userRole.userId = row.user_id;
    userRole.roleId = row.role_id;
    userRole.active = row.active;
    userRole.createTime = row.create_time;
    userRole.endTime = row.end_time;
    return userRole;
};
