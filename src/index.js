const express = require('express');

const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`A server is started on: ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server", "root", {});
})