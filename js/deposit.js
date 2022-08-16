document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmountold = document.getElementById('user-deposit');
    const depositAmount = depositAmountold.value;
    // console.log(depositAmount);
    const depositDisplayedElemnt = document.getElementById('oldDeposit');
    const depositDisplayed = depositDisplayedElemnt.innerText;






    depositDisplayedElemnt.innerText = parseFloat(depositAmount) + parseFloat(depositDisplayed);
    //clear deposit field
    depositAmountold.value = '';

    const totalblnce = document.getElementById('total-balance');
    const newtotalblnce = totalblnce.innerText;
    const check = parseFloat(newtotalblnce);
    // console.log(typeof check);
    const newcheck = parseFloat(depositAmount);
    // totalblnce.innerText =  + check;
    

    // console.log(typeof newcheck);
    totalblnce.innerText = check + newcheck;
    // console.log(sum);




})