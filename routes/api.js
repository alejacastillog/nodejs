var express = require('express');
var router = express.Router();
var models = require('../models/index');
//Obtener todos los estudiantes

router.get('/obtenerEstudiante', function(req,res){
    let Estudiante = models.Estudiantes.findAll()
    .then((lista)=>{
        res.json(lista)
    })
    .catch((error)=>{
        res.json(error);
    });

});

//Guardar un estudiante

router.post('/guardarEstudiante',function(req,res){
    let infoEstudiante = {
        "idEstudiante": req.body.nombreEstudiante,
        "NombreEstudiante": req.body.nombreEstudiante,
        "EdadEstudiante": req.body.edadEstudiante
    };
    models.Estudiantes.create(infoEstudiante)
        .then((nuevoEstudiante,creacion)=>{
            res.json(creacion);
        })
        .catch((error)=>{
            res.json(error);
        });
});

module.exports = router;
