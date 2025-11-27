const { PrismaClient } = require('../generated/prisma');
const express = require('express');
const route = express.Router();
const prisma = new PrismaClient();



route.get('/', (req, res)=>{
    res.render('auth/index',{layout:'templates/auth',titre:"Connexion"});
})

route.post('/login',async(req,res)=>{
    const {email,mdp} = req.body;
    const users = await prisma.user.findUnique({where:{email,mdp}});
    if(users.length>0){
        if(users.role=='USER'){
            req.session.user = users;
            res.redirect('/dashboard');
            
        }else{
            req.session.admin = users;
            res.redirect('/admin/dashboard');
    
        }
        
    }else{
        req.flash('error','Compte non existant !');
        res.redirect('/');
    }
})




module.exports = route;