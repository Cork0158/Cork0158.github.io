import { MyLang } from "./calculater.js"

let displayValue = "";

function cal(str) {
    return new MyLang().exec(str);
}

const btns = document.querySelectorAll("#btns > tbody > tr > td > input[type=button]");

for (const btn of btns) {
    btn.onclick = function (event) {
        const eValue = event.currentTarget.value;

        const clearChar = () => { displayValue = displayValue.slice(0, -1); }

        const isTailExp = (exp) => exp.test(displayValue.slice(-1));

        const countBracket = (bracket) => displayValue.split(bracket).length - 1;
        
        if (eValue === "=") displayValue = cal(displayValue);
        if (eValue === "AC") displayValue = "";
        if (eValue === "C") clearChar()
        if (eValue === "SP") displayValue += " ";
        if (eValue === "(" && !isTailExp(/\d/)) displayValue += "(";
        if (eValue === ")" && countBracket("(") > countBracket(")")) displayValue += ")";

        const isTailOperator = () => isTailExp(/[+\-*/]/);
        const clearOperator = () => {
            if (isTailOperator()) clearChar();
        }

        if (eValue === "+") { clearOperator(); displayValue += "+"; }
        if (eValue === "-") { clearOperator(); displayValue += "-"; }
        if (eValue === "×") { clearOperator(); displayValue += "*"; }
        if (eValue === "÷") { clearOperator(); displayValue += "/"; }

        const isNumber = (e) => /[0-9]/.test(e);
        if (isNumber(eValue) && !isTailExp(/[)]/)) displayValue += eValue;

        document.getElementById("display").value = displayValue;
        console.log(displayValue);
        if (eValue === "=") displayValue = "";
    }
}