import mysql = require('mysql');

export default class MySQL {

    private static _instance: MySQL;
    private _conn: mysql.Connection;
    private host = 'localhost';
    private user = 'root';
    private password = '';
    private database = 'petly';

    
    private constructor() {
        this._conn = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });

        this.connectDB();
    }

    static get instance(): MySQL {
        return this._instance || (this._instance = new this);
    }

    private connectDB() {
        this._conn.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log('MySQL DB online')
            }
        });
    }

    public get conn(): mysql.Connection {
        return this._conn;
    }

}