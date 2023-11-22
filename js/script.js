const button = document.getElementById("calc-price");
const reset_button = document.getElementById("reset");

button.addEventListener("click", function(){
    let name = document.getElementById("name").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;
    let price;
    if(age ==1){
        price = (0.21 * km * 0.8).toFixed(2);
    }
    else if(age ==3){
        price = (0.21 * km).toFixed(2);
    }
    else{
        price = (0.21 * km * 0.6).toFixed(2);
    }
    console.log(price)

document.getElementById("name-surname").innerText = name;
document.getElementById("km-inserted").innerText = km;
document.getElementById("price").innerText = `${price.toFixed(2)}€`;

});

reset_button.addEventListener("click", function(){
    document.getElementById("name").value="";
    document.getElementById("km").value="";
    document.getElementById("age").value="";

    document.getElementById("name-surname").innerText = "";
    document.getElementById("km-inserted").innerText = "";
    document.getElementById("price").innerText = ``;
});