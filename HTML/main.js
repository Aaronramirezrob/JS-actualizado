const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurguer = document.querySelector(".menu");
const mobileMenu = document.querySelector (".mobile-menu");
const menuCarritoAside = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");



menuEmail.addEventListener("click", toggleDesktopmenu);
menuBurguer.addEventListener("click", toggleMobilemenu);
menuCarritoAside.addEventListener("click", toggleCarritoAside);
//aside.addEventListener("click", toggleAside);




function toggleDesktopmenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed) {
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobilemenu() {
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");

    
}

function toggleCarritoAside(){
    const isEmailMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isEmailMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
   

if(!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
}

aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
name: "Bike",
price: 120,
image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: "Screen",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    });

    productList.push({
        name: "Desktop",
        price: 4500,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        });

        productList.push({
            name: "Desktop",
            price: 4500,
            image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            });

        

/*
            <div class="product-card">
               <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="product-img">
                <div class="product-info">
                    <div>
                        <p>$120.00</p>
                        <p>Example Product</p>  
                    </div>
                    <figure>
                        <img src="/icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>
            */

            /*Para recorrer el array hay que utilizar un ciclo for cogeremos nuestra lista de elementos que queramos iterar y dentro del for tendremos acceso a cada uno de los productos*/ 

            // of ---> nos brinda el nombre del objeto
            // in ---> nos brinda el index (numerito)

            function renderProducts(arr){
                for(product of arr) {
                    const productCard = document.createElement("div");
                    productCard.classList.add("product-card");
            
                    const productImg = document.createElement("img");
                    productImg.setAttribute("src", product.image);
                    //product = {name, price, image} -> product.image
            
                    const productInfo = document.createElement("div");
                    productInfo.classList.add("product-info");
            
                    const productInfoDiv = document.createElement("div");
            //-------------------------------------------------------------
                    const productPrice = document.createElement("p");
                    productPrice.innerText = "$" + product.price;
            
                    const productName = document.createElement("p");
                    productName.innerText = product.name;
            
                    productInfoDiv.appendChild(productPrice);
                    productInfoDiv.appendChild(productName);
            //-----------------------------------------------------------------
                    const productInfoFigure = document.createElement("figure");
                    const productImgCart = document.createElement("img");
                    productImgCart.setAttribute("src", "/icons/bt_add_to_cart.svg");
            
                    productInfoFigure.appendChild(productImgCart);
            
                    productInfo.appendChild(productInfoDiv);
                    productInfo.appendChild(productInfoFigure);
            
                    productCard.appendChild(productImg);
                    productCard.appendChild(productInfo);
            
                    cardsContainer.appendChild(productCard);
            
                }   
            }     

            renderProducts(productList);

//Nos da directamente el elemento del array
/*for (product of productList){
    console.log(product.name);
}
// Nos brinda el índice del array
for (product in productList){
    console.log(product);
}
*/
