

document.getElementById('CalculatorBtn').addEventListener("click",calculate);

function calculate(){
    const loanAMount = parseFloat(document.getElementById('loan-amount').value);
    const INterstRate = parseFloat(document.getElementById('interest_Rate').value);
    const LoanTerm = parseFloat(document.getElementById('loan-term').value);

    if(isNaN(loanAMount) || isNaN(INterstRate) || isNaN(LoanTerm)){
        alert("Please enter valid numbers");
    }

    const monthlyInterest = INterstRate /100 / 12;
    const totalPayments = LoanTerm;
    const monthlyPayment = (loanAMount*monthlyInterest)/(1-Math.pow(1+monthlyInterest, -totalPayments));

    const totalInterestPaid = (monthlyPayment * totalPayments) - loanAMount;

    displayResult(monthlyPayment,totalInterestPaid);

}

function displayResult(monthlyPayment,totalInterestPaid){

    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `

            <p><strong> Montly Payment : ${monthlyPayment.toFixed(2)}</strong></p>
            <p><strong> Montly Payment : ${totalInterestPaid.toFixed(2)}</strong></p>
    `;
}











































