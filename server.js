const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookiParser = require('cookie-parser');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
// const axios = require('axios');

const dev = process.env.NODE_ENV !== 'production';
// const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => { // next가 준비되면 그 안에서 express 서버 가져옴.
    const server = express();

    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded( { extended: true } ));
    server.use(cookieParser("!ASD!@ASd!AVZXC!@123"));
    server.use(
        expressSession({
            resave: false,
            saveUninitialized: false,
            secret: "!ASD!@ASd!AVZXC!@123",
            cookie: {
                httpOnly: true,
                secure: false,
            },
        }),
    );

    // server.get('/product/:id/:name/:price', (req, res) => {
    //     // console.log(req.params)
    //     const actualPage = '/product_detail';
    //     const queryParams = {
    //         id: req.params.id,
    //         name: req.params.name,
    //         price: req.params.price,
    //     }
    //     return app.render(req, res, actualPage, queryParams);
    // });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, () => {
        console.log('next + express running on port 3000');
    }); 
});