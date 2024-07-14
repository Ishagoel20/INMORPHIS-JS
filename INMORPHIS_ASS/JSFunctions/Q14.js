//Write a JavaScript function to convert an amount to coins.Sample function : amountTocoins(46, [25, 10, 5, 2, 1])Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//Output : 25, 10, 10, 1

function amountToCoins(amount, coins) {
    
    coins.sort((a, b) => b - a);
    
    let result = [];
    
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    
    return result;
}


console.log(amountToCoins(46, [25, 10, 5, 2, 1]));  
console.log(amountToCoins(78, [25, 10, 5, 2, 1]));  
console.log(amountToCoins(12, [10, 5, 2, 1]));      
