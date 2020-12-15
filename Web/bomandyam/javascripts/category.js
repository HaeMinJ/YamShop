var page=0;
var size=90;
fetch('https://api.bomandyam.shop:3000/category?page='+page+'&size='+size,{
    method:'GET'
}).then(res => res.json())
.then(response => {
    for (var category of response){
        console.log(category.categoryName)
    }
})