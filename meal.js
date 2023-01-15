function showResults(){
    const searchField=document.getElementById("search-field");
    const searchText=searchField.value;
    searchField.value="";

    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => ShowDetails(data))
}

function ShowDetails(results){
    const items=results.meals;
    

    const divContainer=document.getElementById("div-collection");
    for(const item of items){

        console.log(item);
        const div=document.createElement('div');
        div.classList.add("card");
        
        
        div.innerHTML=`
        <img src="${item.strMealThumb}" class="card-img-top" alt="foodImage">
        <div class="card-body ">
        <h5 class="card-title"> ${item.strMeal}</h5>
        <p class="card-text"> ${item.strInstructions.slice(0,200)}</p>
        </div>
        `;
        divContainer.appendChild(div);

    }
 

}