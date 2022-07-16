// deposite button deposite sction
document.getElementById('deposit-submit-button').addEventListener('click', function () {
    // console.log('deposit-submit-button');
    // deposit input value 
    const depositInput = document.getElementById('deposit-amount');
    const newDepositText = depositInput.value;
    // text convert string 
    const newDeposit = parseFloat(newDepositText);
    // console.log(newDeposit);


    // update show total deposit value 
    const depositTotal = document.getElementById('total-deposit');
    const previousDepositText = depositTotal.innerText;
    const previousDeposit = parseFloat(previousDepositText);
    const newDepositTotal = previousDeposit + newDeposit;
    depositTotal.innerText = newDepositTotal;



    // update balance
    const balanceTotal = document.getElementById('total-balance');
    const previousText = balanceTotal.innerText;
    const previousbalance = parseFloat(previousText);
    const newBalanceTotal = previousbalance + newDeposit;
    balanceTotal.innerText = newBalanceTotal;
    // clear deposit input value 
    depositInput.value = '';


})
// withdraw section 
document.getElementById('withdraw-submit-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-amount');
    const newWidthdrawText = withdrawInput.value;
    const newWithdraw = parseFloat(newWidthdrawText);

    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawText);
    const newTotalWithdraw = previousWithdraw + newWithdraw;
    withdrawTotal.innerText = newTotalWithdraw;
    // update balance 
    const balanceTotal = document.getElementById('total-balance');
    const previousText = balanceTotal.innerText;
    const previousbalance = parseFloat(previousText);
    const newBalanceTotal = previousbalance - newWithdraw;
    balanceTotal.innerText = newBalanceTotal;
    withdrawInput.value = '';

})
