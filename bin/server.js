'use strict'
// Modelo MVC
const app =require ('../src/app');
const debug = require ('debug') ('nodestr:server');
const http = require ('http');



const port = normalizePort(process.env.PORT || '3000');
app.set('port',port);

// dado uma url o usuario vai conseguir chegar no servidor 
const server = http.createServer(app);






// Comando para o servidor ficar ouvido a Porta
server.listen(port);
server.on('error',onErro);
server.on('listening',onListening);
console.log('api rodando na porta '+ port);

///Nomarlizando porta
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)){
        return val;
    }
    if (port >= 0){
        return port;
    }
    return false
}

function onErro (error){
    if (error.syscall !== 'listen'){
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe' + port:
        'Port' + port;
    switch (error.code){
        case 'EACCES':
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe' + addr
        : 'port' + addr.port;
    debug('Listening on'+bind);
}

    