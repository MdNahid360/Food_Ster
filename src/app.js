const signinPopup = document.getElementById('alrt');
signinPopup.addEventListener('click', function () {
    alert('Sign in successfully');
})
// food data loaded
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => displayData(data))

const displayData = food => {
    console.log(food.categories);
    if (food === null) {
        let ld = document.getElementById('ld')
        ld.innerHTML = `<h1>Loading</h1>`
    } else {
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
}

//  details
const details = info => {
    let N = document.getElementById('notification')
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${info}
`
    let S = N.innerText;
    ++S;
    console.log(S);
    N.innerText = S
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.meals.length; i++) {
                const meal = data.meals[i];
                console.log(meal);
                let popBox = document.getElementById('swich')
                popBox.innerHTML = `
                <div id="chacout" class="food-order d-none">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-12 mt-2 px-2">
                            <img src = "${meal.strMealThumb} " class = "img-fluid" />
                        </div>
                        <div class="col-lg-9 col-md-9 col-12 mt-2 px-1">
                           <h3 class="price">$255</h3>
                        </div>
                    </div>
                     <h4 class="name-f mt-2">${meal.strCategory}</h4>
                    <p>${meal.strMeal}</p><hr>
                    <button class="btn btn-warning w-100">Checkout</button>
                    
                </div>
           
           `
            }
        })


}

// data loaded with searching
//
    function searchFood(){
        let searchBox = document.getElementById('searchFood').value
        console.log(searchBox);
        const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox}`
        fetch(searchUrl)
        .then(res => res.json())
        .then(data => {
            data.meals.forEach(foodItems => {
                console.log(foodItems.strCategory);
            });
        })
    }
// end
// notification button & order details area
let notification = document.getElementById('notificationClick')
notification.onclick = function () {
    let checkOut = document.getElementById('chacout')
    checkOut.classList.toggle('d-block')
}

