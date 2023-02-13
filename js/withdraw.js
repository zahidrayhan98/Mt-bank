// withdraw system add ///
// step-1: click the event handler ///
// step-2 : get input from input field//// 
//step -3 : get calculate withdraw///
///step-4 : current withdraw amount ////
///step-5 : get the previous total ////////
///step-6 : calculate current balance /////

// step-1 
document.getElementById('btn-withdraw').addEventListener('click' , function(){
   
    // step -2///
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawString =withdrawField.value ;
    const newWithdrawAmount = parseFloat(newWithDrawString);
      //  step-7:clear input data /////
      withdrawField.value = '';


    if(isNaN(newWithdrawAmount)){
        alert('please provide a new number')
        return ;
    }

        //step -3//    
        const totalWithdrawElement =document.getElementById('withdraw-total');
         const previousWithdrawAmountString = totalWithdrawElement.innerText;
         const previousWithdrawAmount =parseFloat(previousWithdrawAmountString);

///// step -4 /////
     

         ///step-5////
          const balanceTotalElement =document.getElementById('balance-total');
          const previousTotalBalanceString =balanceTotalElement.innerText;
          const previousTotalBalance =parseFloat(previousTotalBalanceString);
          
      
  
          
          if(newWithdrawAmount > previousTotalBalance){
            alert("taka nai")
            return ;
          }

          const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount ;
          totalWithdrawElement.innerText =currentWithdrawAmount;
/////////////////step :6 ////
           
const newBalanceTotal = previousTotalBalance - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



})