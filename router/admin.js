const express = require('express');
const route = express.Router();
const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();




route.get('/', (req, res)=>{
    res.redirect('/auth');
})
route.get('/dashboard', (req, res)=>{
    res.render('admin/index',{layout:'templates/admin',titre:'Tableau de bord'});
})
route.get('/courses', async(req, res)=>{
    const courses = await prisma.cours.findMany({orderBy:{createdAt:'desc'}});
    res.render('admin/courses',{layout:'templates/admin',titre:'Mes cours',courses});
})
route.get('/addCourses', (req, res)=>{ 
    res.render('admin/addCourses',{layout:'templates/admin',titre:'Ajout de cours'});
})




module.exports = route;