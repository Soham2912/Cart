
var products = [
    {name :"White chair",headLine:"Comfy and sleek",image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price:"10,000"},
    {name :"White Stool",headLine:"Minimalistic and classic ",image:"https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww",price:"6,000"},
    {name :"Sofa chair",headLine:"Lie on and chill ",image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price:"15,000"},
];


var popular = [
    {name :"Blue Sofa chair",headLine:"Comfy and sleek",image:"https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price:"10,000"},
    {name :"Wooden chair",headLine:"Comfy and sleek",image:"https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww",price:"10,000"},
    {name :"Minimalist chair",headLine:"Comfy and sleek",image:"https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNoYWlyfGVufDB8fDB8fHww",price:"10,000"},   


 
]

function addProd(){
    let cltr="";
products.forEach(element => {
    cltr += ` <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow">
                <img class="w-full h-full object-cover" src="${element.image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${element.name}.</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${element.headLine}</h3>
                            <h4 class="font-semibold mt-2">₹${element.price}</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
    
});


document.querySelector(".products").innerHTML=cltr;
}


function addPop(){
    let cnt = "";
    popular.forEach(pop=>{
        cnt+= `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${pop.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${pop.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${pop.headLine}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">₹${pop.price}</h4>
                    </div>
                </div>`
    });

    document.querySelector(".populars").innerHTML=cnt;
}



addPop();
addProd();