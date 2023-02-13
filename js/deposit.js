// step-1:eventHandler add /////

document.getElementById('btn-deposit').addEventListener('click' , function (){
    // step-2: add deposit amount from deposit input field ///
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString =depositField.value;
    const newDepositAmount =parseFloat(newDepositAmountString);
    
    

    // // step-3: deposit total amount non input field ////
     const depositTotalElement =document.getElementById('deposit-total');
     const previousDepositTotalString =depositTotalElement.innerText;
     const previousDepositTotal = parseFloat(previousDepositTotalString);
     
// step =4: deposit add ////
     const currentTotal = previousDepositTotal + newDepositAmount ; 

    //  step-5:current total deposit /////
     depositTotalElement.innerText = currentTotal; 
   
// step -5: current total /////
const totalBalanceElement =document.getElementById('balance-total');
const previousBalanceTotalString =totalBalanceElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
 const currentBalance = previousBalanceTotal + newDepositAmount;

 totalBalanceElement.innerText = currentBalance;




    //  step -7: clear input field ////
    depositField.value = '';
})