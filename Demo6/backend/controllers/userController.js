
const sql = require('mssql/msnodesqlv8');
const config = require('../config/dbConfig');

const getUsers = (req, res) => {
    sql.connect(config, (err) => {
        if (err) {

            res.status(500).send(err);
        } else {
            const request = new sql.Request();
            request.query("SELECT * FROM Users", (err, result) => {
                if (err) {

                    res.status(500).send(err);
                } else {
                    res.json(result.recordset);
                }
            });
        }
    });
};

const createUser = (req, res) => {
    const { Name, Surname, Email, Password, DateOfRegistration } = req.body;
    sql.connect(config, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            const request = new sql.Request();
            request.input('name', sql.NVarChar, Name);
            request.input('surname', sql.NVarChar, Surname);
            request.input('email', sql.NVarChar, Email);
            request.input('password', sql.NVarChar, Password);
            request.input('dateOfRegistration', sql.NVarChar, DateOfRegistration);

            request.query("INSERT INTO Users (Name,Surname, Email,Password,DateOfRegistiration) VALUES (@name, @Email,@email,@password,@dateOfRegistiration)",
                (err, result) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(201).send('User created successfully');
                    }
                });
        }
    });
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    sql.connect(config, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            const request = new sql.Request();
            request.input('id', sql.Int, id);
            request.input('name', sql.NVarChar, name);
            request.input('email', sql.NVarChar, email);
            request.query("UPDATE Users SET name = @name, email = @Email WHERE id = @id", (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send('User updated successfully');
                }
            });
        }
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    sql.connect(config, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            const request = new sql.Request();
            request.input('id', sql.Int, id);
            request.query("DELETE FROM Users WHERE id = @id", (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send('User deleted successfully');
                }
            });
        }
    });
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
