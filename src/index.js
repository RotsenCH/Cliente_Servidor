const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const path = require('path')
app.use(express.json())

app.engine('.hbs', engine({
    extname: '.hbs'
}))

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req,res)=>{
    res.render('home')
})
app.get('/personal', (req,res)=>{
    res.render('personal')
})
app.get('/login', (req,res)=>{
    res.render('login')
})

// Manejo de una ruta que no sea encontrada
app.use((req,res)=>{
    res.status(404).send("Página no encontrada - 404")
})

app.listen(3000)
console.log("Servidor corriendo OK")
