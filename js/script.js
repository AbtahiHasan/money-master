// select inputs 
const incomeInput = document.getElementById("income"),
    foodCost = document.getElementById("food"),
    rentCost = document.getElementById("rent"),
    clothesCost = document.getElementById("clothes"),
    form = document.getElementById("calculate"),
    expenses = document.getElementById("expenses"),
    reminingBalance = document.getElementById("balance"),
    saveMoney = document.getElementById("save-money"),
        expensesAmount = numberCatcher(expenses);
let printNumber = true;

form.addEventListener("submit", expensesCalculator);
function expensesCalculator(e) {
    e.preventDefault();
    let incomeInputValue = inputValidator(incomeInput),
        foodCostValue = inputValidator(foodCost),
        rentCostValue = inputValidator(rentCost),
        clothesCostValue = inputValidator(clothesCost);
    let totalExpenses = foodCostValue + rentCostValue + clothesCostValue;
    if(printNumber) {
        expenses.innerText = totalExpenses;
    }   
    
    if(totalExpenses > incomeInputValue) {
        alert("baki taka gula koi paila")
    }
    else if (printNumber){
        reminingBalance.innerText = incomeInputValue - totalExpenses;
    } 
    return incomeInputValue - totalExpenses;
}

saveMoney.addEventListener("submit", saveMoneyCalculator)

function saveMoneyCalculator(e) {
    e.preventDefault();
    saveMoneyInput = document.getElementById("save-presents"),
    saveMoneyInputValue = inputValidator(saveMoneyInput);
    let savingMoney = document.getElementById("saving"),
    remainingMoney = document.getElementById("remaining"),
    reminingBalanceValue = numberCatcher(reminingBalance);
    let savedMoney =  percentage(saveMoneyInputValue, reminingBalanceValue);
    if(reminingBalanceValue >= savedMoney) {        
        savingMoney.innerText = savedMoney;
        remainingMoney.innerText = reminingBalanceValue - savedMoney;
    } else {
        alert("tomar kase ato gulala taka nai save korar moto");
    }
    
}

function percentage(saveMoneyInputValue, totalValue) {
    return totalValue * saveMoneyInputValue / 100;
} 

function inputValidator(input) {
    let inputValue = input.value;
    if(inputValue === "") {
        printNumber = false;
        return alert(input.getAttribute("data-input") + " field Cannot be empty");
    } else if (isNaN(inputValue)) {
        printNumber = false;
        input.value = "";
        return alert(input.getAttribute("data-input") + "field" +  "Please input valid number");
    } else if(inputValue < 0) {
        return alert(input.getAttribute("data-input") + "field" + "Please input positive number");
    } else {
        printNumber = true;
        let newInputValue = parseInt(inputValue);
        input.value = "";
        return newInputValue
    }
}

function numberCatcher (element) {
    let elementValue = element.innerText;
    let newElementValue = parseInt(elementValue);
    return newElementValue;
}