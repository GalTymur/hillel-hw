do {
    num1 = +prompt("Введите первое число", "2"), 
    num2 = +prompt("Введите второе число", "2"); 
    } while ( isNaN(num1) || isNaN(num2) )
    alert(num1 + num2);