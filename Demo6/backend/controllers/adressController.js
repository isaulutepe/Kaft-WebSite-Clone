
const sql = require('mssql/msnodesqlv8');
const config = require('../config/dbConfig');

const getAdress = (req, res) => {
    sql.connect(config, (err) => {
        if (err) {
           
            res.status(500).send(err);
        } else {
            const request = new sql.Request();
            request.query("SELECT * FROM Addresses", (err, result) => {
                if (err) {
                    
                    res.status(500).send(err);
                } else {
                    res.json(result.recordset);
                }
            });
        }
    });
};

module.exports = {
    getAdress
};
