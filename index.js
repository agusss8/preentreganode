
//PARA OBTENER TODOS LOS PRODUCTOS TIPEAR POR LA CONSOLA : "npm run start GET products"
//IMPORTANTE PARA OBTENER EL PRODUCTO POR ID DEBERA TIPEAR : "npm run start GET products 4" el 4 se toma como ejemplo pero es un numero del 1 al 20.
//PARA PONER NUEVOS PRODUCTOS DEBERA TIPEAR EN LA TERMINAL: "npm run start POST products titulo precio categoria"
//IMPORTANTE PARA BORRAR UN PRODUCTO DEBERA TIPEAR EL ID DE ESTE EJ: "npm run start DELETE products 4" nuevamente el 4 se toma como ejemplo de numero entero.
//AGUSTIN VERON

import axios from 'axios';

const urlfakestore = 'https://fakestoreapi.com';

async function ObtenerProductos() {
    try {
        const respuesta = await axios.get(`${urlfakestore}/products`);
        console.log(respuesta.data);
    } catch (error) {
        console.log("ERROR",error.message);
    }
    
}

async function ObtenerProductosPorID(id) {
    
    try {
        const respuesta = await axios.get(`${urlfakestore}/products/${id}`);
        console.log(respuesta.data)
    } catch (error) {
        console.log("ERROR",error.message);
    }
}


async function PonerProductos(objeto) {
    try {
        const respuesta = await axios.post(`${urlfakestore}/products`,objeto)
        console.log(respuesta.data);
    } catch (error) {
        console.log("ERROR",error.message);
    }
}

async function BorrarProducto(id) {
    
    try {
        const respuesta = await axios.delete(`${urlfakestore}/products/${id}`);
        console.log(respuesta.data)
    } catch (error) {
        console.log("ERROR",error.message);
    }
}



const [, , metodo,recurso,id] = process.argv;

if(metodo === 'GET' && recurso === 'products')

    {
        if(id)
        {
            ObtenerProductosPorID(id);
        }
        else
        {

            ObtenerProductos();
        }
    }
if(metodo == 'DELETE' && recurso === 'products')
{
    if(id)
    {
        BorrarProducto(id);
    }
}

const [, , post,producto,titulo,precio,categoria] = process.argv;
if(post === 'POST' && producto === 'products')
{
    const nuevopr = {
        title: titulo,
        price:parseFloat(precio),
        category:categoria
    }
    if(nuevopr)
    {
        PonerProductos(nuevopr);
    }
}