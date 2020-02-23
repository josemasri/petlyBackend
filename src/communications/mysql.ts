import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } from '../config/config';
import mysql = require('mysql');

export default class MySQL {

    private static _instance: MySQL;
    private _conn: mysql.Connection;
    private host = DB_HOST;
    private user = DB_USERNAME;
    private password = DB_PASSWORD;
    private database = DB_NAME;

    
    private constructor() {
        this._conn = mysql.createConnection({
            host: `${this.host}`,
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