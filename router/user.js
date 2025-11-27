const express = require('express');
const route = express.Router();
const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();




route.get('/', (req, res)=>{
    res.redirect('/auth');
})
route.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/auth');
})
route.get('/dashboard', (req, res)=>{
    if(!req.session.user){
        res.redirect('/auth');
    }else{
        res.render('client/index',{layout:'templates/client',titre:'Tableau de bord'});
    }
})
route.get('/courses', async(req, res)=>{
    const courses = await prisma.cours.findMany({orderBy:{createdAt:'desc'}});
    res.render('client/courses',{layout:'templates/client',titre:'Mes cours',courses});
})
route.get('/files', (req, res)=>{ 
    res.render('client/files',{layout:'templates/client',titre:'Mes cours'});
})




module.exports = route;