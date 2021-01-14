const express = require('express');
const app=express();
//configuracion
//valido si el navegador me da un puerto por defecto si no le pongo 3000
app.set('port',process.env.Port || 3000)
//middlware
app.use(express.json());
//rutas
app.use(require('./Route/crud'))
//satart server
app.listen( app.get('port') , ()=>{
    console.log('servidor levantado',app.get('port'));
})
