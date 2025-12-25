let tableNumber = Number(prompt("Enter any Number:"))

if( !isNaN(tableNumber)){
    for(let i = 0; i < 20; i++){

        let number = i + 1
        console.log(tableNumber + " X " + number + " = " + number * tableNumber)
    }
}else{
    alert("Enter correct Number Please!")
}