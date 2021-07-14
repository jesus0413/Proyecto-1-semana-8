/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const baseUrl ="https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const formatPrice = (price) =>
{
   const newPrice= new window.Intl.NumberFormat('en-EN',{
       style: 'currency',
       currency:'EUR'
   }). format(price)

  return newPrice;  
}

//web api
//nos conectamos al servidor mediante este comando 
window.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en json 
.then(respuesta => respuesta.json())
//ya convertido en json obtenemos data para renderizar
.then((responseJson)=> {
    const todosLosItems = [];
    responseJson.data.forEach(item => {
        //crear imagen
        const imagen = document.createElement("img");
        imagen.src =`${baseUrl}${item.image}`;
           
        //crear titulo 
        const title = document.createElement("h2");
        title.textContent= item.name;
        title.className= "title-avo" 
        //crear precio 
        const price= document.createElement("div");
        price.textContent = formatPrice(item.price);
        price.className="price-avo"

 
        const container = document.createElement("div");
        container.append(imagen, title, price);



    todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
});
