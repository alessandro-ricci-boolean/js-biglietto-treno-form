const button = document.getElementById("calc-price");

button.addEventListener("click", function(){
    let name = document.getElementById("name").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;
    let price;
    if(age ==1){
        price = 0.21 * km * 0.8;
    }
    else if(age ==2){
        price = 0.21 * km;
    }
    else{
        price = 0.21 * km * 0.6;
    }
    console.log(price)
});