// --- SERVER CONFIGURATION FILE ---
// Imports
const express = require('express');
const exphbs = require('express-handlebars');
const fileupload = require('express-fileupload');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

// Create a class server with the server configurations
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4040';
        this.app.use(cors());
        this.setTemplateEngine();
        this.middlewares();
        this.routes();
    }

    setTemplateEngine() {
        this.app.set('view engine', 'hbs');
        this.app.engine('hbs', exphbs.engine({
            extname: 'hbs',
            defaultLayout: '',
            layoutDir: ''
        }));
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(express.json());
        this.app.use(fileupload({
            useTempFiles: true,
            tempFileDir: 'temp',
            debug: true
        }));
    }
    
    routes() {
        this.app.use('/', require('./routes/index.routes'));
        this.app.use('/upload', require('./routes/upload.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        });
    }
}

module.exports = Server;