const signinPopup = document.getElementById('alrt');
signinPopup.addEventListener('click', function () {
    alert('Sign in successfully');
})
// food data loaded
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res=> res.json())
.then(data => displayData(data))

 const displayData = food => {
     console.log(food.categories);
     for (let i = 0; i < food.categories.length; i++) {
         const allFood = food.categories[i];
         console.log(allFood);
         let ul = document.getElementById('ul')
         let li = document.createElement('li')
         li.innerHTML = `
         
            <div  class="food-img">
                            <img src="${allFood.strCategoryThumb}" class="img-fluid h-img" alt="">
                        </div>
                        <div class="food-info mt-2 px-3 ">
                            <h5 class="food-name">
                               ${allFood.strCategory}
                            </h3>
                            <div class="rating">
                                <span><i class="ri-star-fill"></i></span><span class="ml-2">4.1/5</span>
                            </div>
                        </div>
                        <div class="px-3 pb-3 dis">
                            <small>${allFood.strCategoryDescription}</small>
                        </div>
                        <button  onclick ="details('${allFood.strCategory}')" class="order-btn mt-3 ml-3 os">Order</button>

     
         `
         li.classList.add("food-area")
         ul.appendChild(li)
     }
 }

//  details
const details = info =>{
    let N = document.getElementById('notification')
     let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${info}
`
   let S = N.innerText;
   ++S;
   console.log(S);
   N.innerText=S
   fetch(url)
   .then(res => res.json())
   .then(data => {
       for (let i = 0; i < data.meals.length; i++) {
           const meal = data.meals[i];
           console.log(meal);

            
       }
   })

    
}