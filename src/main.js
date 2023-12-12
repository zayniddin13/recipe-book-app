let API="https://api.spoonacular.com/recipes/random?number=10&apiKey=275d58779ccf4e22af03e792e8819fff"
async function getData() {
    let response=await fetch(API)
        const data = await response.json()
       return data   
}
getData().then((data)=>upDateUI(data)).catch((err)=>{console.log(err);})
const container=document.querySelector('.container')

function upDateUI(data) {
    console.log(data);
    let recipeCont
    let recipe=data.recipes
    recipe.forEach(item => {
        console.log(item);
        recipeCont = document.createElement('div')
            recipeCont.classList.add('recipes')
            recipeCont.innerHTML=`<div class="type_content block md:flex justify-between items-center gap-3 rounded-md mb-5 shadow-lg text-center">
            <img class="w-full h-44 md:w-40 md:h-40 rounded-l-md" src="${item.image}" alt="">
            <div class="md:w-[280px] w-auto text-center"><h3 class="font-sans font-bold text-xl">${item.title}</h3></div>
            <p class="text-base font-sans font-medium  text-gray-500 w-[90%] mx-auto"> <span class="text-gray-600">Ingredients:</span>${item.summary}</p>
            <a href="${item.sourceUrl}" class="no-underline"><button class="whitespace-nowrap bg-blue-950 text-white p-2 pr-12 hover:bg-blue-900 active:bg-blue-950 active:opacity-40">view recipe</button></a>
        </div>`
        container.appendChild(recipeCont)
    });

}