const Login = require('../models/login.model');

exports.create = (req, res) =>{

    if(!req.body.username){
        return res.status(400).send({
            message: "Username cannot be empty!"
        });
    }
    if(!req.body.password){
        return res.status(400).send({
            message: "Passworf cannot be empty!"
        });
    }

    const login = new Login({
        username: req.body.username,
        password: req.body.password,
        active_status: req.body.active_status,
        las_loggedin: new Date()
    });
    
    login.save()
    .then( data =>{
        res.send(data);
    }).catch( err=>{
        res.status(500).send({
            message: err.message || 'Some error occured while saving the login data!'
        })
    })
};

exports.findOne = (req, res)=>{
     Login.findOne({ 'username': req.body.username, 'password': req.body.password }, 'username password active_status')
     .then( data =>{
         console.log(data)
         res.send(data);
     }).catch(err=>{
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
     })
};