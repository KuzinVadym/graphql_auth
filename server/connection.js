import mysql from 'mysql';

var Connection = (function(){
    function Connector() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'todoapp'
        });
    }

    Connector.prototype.getConnection = function () {
        return this.connection;
    };

    var instance;
    return {
        getInstance: function(){
            // check if instance is available
            if (!instance) {
                instance = new Connector();
                delete instance.constructor; // or set it to null
            }
            return instance;
        }
    };
})();

export default Connection;
