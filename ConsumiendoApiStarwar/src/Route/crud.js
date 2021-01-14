const express = require('express');//utilizo exprees para levantar el servidor desde nodejs
const router = express.Router();//llamo al metodo route para realizar las clasicas operaciones de un crud
const mysqlConeccion = require('../Database/conexion');//conecto mi servidor con la base datos
const got = require('got');//got es una libreria que nos permite consumir apis desde el lado del servidor node js;


// Obtengo la informacion de The Star Wars API y lo almaceno en my base de datos mysql
router.get('/persona', (req,res) => {
    got.get('https://swapi.py4e.com/api/people/').then(async ok => {
        let data = JSON.parse(ok.body);
        let size=data['results'].length;
        for(let i=0; i<size;i++){
            let nombre=data['results'][i]['name'];
            let altura=data['results'][i]['height'];
            let masa=data['results'][i]['mass'];
            let color_pelo=data['results'][i]['hair_color'];
            let color_ojos=data['results'][i]['eye_color'];
            let cumple=data['results'][i]['birth_year'];
            let gender=data['results'][i]['gender'];
            let url=data['results'][i]['url'];
            mysqlConeccion.query('CALL createpersona(?,?,?,?,?,?,?,?)',[nombre,altura,masa,color_pelo,color_ojos,cumple,gender,url],(err, rows)=>{
                if (!err){
                    console.log('nombre' + nombre);
                }else{
                    console.log('el error es:' + err);
                }
            });
        }
      return  res.json({estatus:'personas creadas correctamnete'});
    }).catch(error=>{
        console.log(error);
    });
});
router.get('/planetas', (req,res) => {
    got.get('https://swapi.py4e.com/api/planets/').then(async ok => {
        let data = JSON.parse(ok.body);
        let size=data['results'].length;
        for(let i=0; i<size;i++){
            let nombre=data['results'][i]['name'];
            let rotacion=data['results'][i]['rotation_period'];
            let periodo_orbitral=data['results'][i]['orbital_period'];
            let diametro=data['results'][i]['diameter'];
            let clima=data['results'][i]['climate'];
            let gravedad=data['results'][i]['gravity'];
            let terreno=data['results'][i]['terrain'];
            let poblacion=data['results'][i]['population'];
            let url=data['results'][i]['url'];
            mysqlConeccion.query('CALL createplaneta(?,?,?,?,?,?,?,?,?)',[nombre,rotacion,periodo_orbitral,diametro,clima,gravedad,terreno,poblacion,url],(err, rows)=>{
                if (!err){
                    console.log('nombre' + nombre);
                }else{
                    console.log('el error es:' + err);
                }
            });
        }
        return  res.json({estatus:'planeta creado correctamnete'});
    }).catch(error=>{
        console.log(error);
    });
});
router.get('/Vehiculos', (req,res) => {
    got.get('https://swapi.py4e.com/api/vehicles/').then(async ok => {
        let data = JSON.parse(ok.body);
        let size=data['results'].length;
        for(let i=0; i<size;i++){
            let nombre=data['results'][i]['name'];
            let modelo=data['results'][i]['model'];
            let fabricante=data['results'][i]['manufacturer'];
            let costo_credito=data['results'][i]['cost_in_credits'];
            let longitud=data['results'][i]['length'];
            let clase_Vehi=data['results'][i]['vehicle_class'];
            let _url=data['results'][i]['url'];
            mysqlConeccion.query('CALL createvehiculos(?,?,?,?,?,?,?)',[nombre,modelo,fabricante,costo_credito,longitud,clase_Vehi,_url],(err, rows)=>{
                if (!err){
                    console.log('nombre' + nombre);
                }else{
                    console.log('el error es:' + err);
                }
            });
        }
        return  res.json({estatus:'vehiculo creado correctamnete'});
    }).catch(error=>{
        console.log(error);
    });
});

// Listo la Informacion guardada de mi base de datos;

router.get('/readPeople', (req,res) => {
    mysqlConeccion.query('select * from people',(err, rows)=>{
        if (!err){
           res.json(rows);
        }else{
            console.log('el error es:' + err);
        }
    });
});
router.get('/readPlanet', (req,res) => {
    mysqlConeccion.query('select * from planetas',(err, rows)=>{
        if (!err){
            res.json(rows);
        }else{
            console.log('el error es:' + err);
        }
    });
});
router.get('/readVehiculos', (req,res) => {
    mysqlConeccion.query('select * from vehiculos',(err, rows)=>{
        if (!err){
            res.json(rows);
        }else{
            console.log('el error es:' + err);
        }
    });
});

module.exports = router;


