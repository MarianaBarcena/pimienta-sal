const crypto = require('node:crypto')

const menu = [ 
    { 
        id:crypto.randomUUID(),
    nombre : "Carpaccio fresco",
    descripcion : "Entrada  Carpaccio de salmon con citricos",
    precio : 65.50 ,
    imagen : "Carpaccio-de-salmon.jpg" 

    },
    {
        id:crypto.randomUUID(),
        nombre : "Risotto de berenjena",
    descripcion : "Risotto de berenjena y queso de cabra",
    precio : 47.00,
    imagen : "Rissoto-berenjena-queso-cabra.jpg"

    },
    {
        id:crypto.randomUUID(),
    nombre : "Mouse de arroz",
    descripcion : "Mouse de arroz con leche y aroma de azahar",
    precio : 27.50,
    imagen : "Mousse-de-arroz-con-leche.jpg"

    },
    {
        id :crypto.randomUUID(),
    nombre : "Esparragos blancos",
    descripcion : "Esparragos blancos con vinagreta de verdura y jamon iberico",
    precio : 37.50,
    imagen : "esparragos.jpg"

    },
    {
        id :crypto.randomUUID(),
    nombre : "Asado criollo",
    descripcion : "null",
    precio : 100.50,
    imagen : "asado-criollo.jpg"
    },
]

module.exports = {
    index : (req,res) => {
        
        return res.render('index' , { 
            menu 
        })
      
    },
    detail : (req,res) => {

const {id} = req.params;
const item = menu.find(item => item.id === id)
        return res.render('detalleMenu', {item})
    }
}
