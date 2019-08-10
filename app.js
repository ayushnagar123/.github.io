const express = require('express');
const app = express();

const hbs=require('hbs')
const exphbs=require('express-handlebars')

app.use(express.static(__dirname+'/public'))

app.set('views',__dirname+'/views');
app.engine('handlebars',exphbs({defaultLayout:'layout'}));
app.set('view engine','handlebars');

// hbs.registerPartials(__dirname+'/views/partials')

app.get('/',(req,res)=>{
    res.render('home')
});

app.get('/contact',(req,res)=>{
    res.render('contactus')
})

app.get('/about',(req,res)=>{
    res.render('aboutus')
})

app.get('/locate',(req,res)=>{
    res.render('locateus',{
        css: '/css/map.css'
    })
})

app.get('/menu',(req,res)=>{
    var item=[{
        name:'ayush',
        price:'$1000',
        pricetype:'per kg',
        description:'cool'
    },
    {
        name:'ayush1',
        price:'$2000',
        pricetype:'per piece',
        description:'hello'
    }
]
    res.render('menu',{
        css:'/css/menu.css',
        js:'/js/menu.js',
        item:item
    })
})

app.listen(5555);