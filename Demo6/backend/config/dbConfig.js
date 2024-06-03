const sql = require("mssql/msnodesqlv8");

const config = {
    server: "localhost\\SQLEXPRESS",
    database: "Kaft_Db",
    driver: "msnodesqlv8",
    user: "jesus1",
    password: "isa30032001",
    options: {
        trustedConnection: true
    }
};

module.exports = config;
