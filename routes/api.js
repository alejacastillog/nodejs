var express = require('express');
var router = express.Router();
var models = require('../models/index');
//Obtener todos los estudiantes

router.get('/obtenerEstudiante', function(req,res){
    models.Estudiante.findAll()
    .then((lista)=>{
        res.json(lista)
    })
    .catch((error)=>{
        res.json(error);
    });

});
//Obtener estudiante por ID
router.get('/obtenerEstudiante/:id', function(req,res){
    let idEstudiante = req.params.id;
    models.Estudiantes.find(
       { 
           where: {
               idEstudiante:{
               [models.Sequelize.OP.eq]: idEstudiante
               }
        }
           }
    )
});

//Eliminar estudiante
router.get('/eliminarEstudiante/:id', function(req,res){
    let idEstudiante = req.params.id;
    models.Estudiantes.find(
       { 
           where: {
               idEstudiante:{
               [models.Sequelize.OP.eq]: idEstudiante
               }
        }
           }
    )
    .then((lista)=>{
        lista.destroy()
        .then(()=>{
            res.json({});
        })
        .cath((error)=>{
           res.json(error);
        });
    })
    .cath((error)=>{
        res.json(error);
    });
});
//Guardar un estudiante

router.post('/guardarEstudiante',function(req,res){
    let infoEstudiante = {
        "idEstudiante": req.body.nombreEstudiante,
        "nombreEstudiante": req.body.nombreEstudiante,
        "edadEstudiante": req.body.edadEstudiante
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
