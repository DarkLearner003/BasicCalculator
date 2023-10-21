const text = document.querySelector('.text')
const output = document.querySelector('.output')
const keypad = document.querySelector('.keypad')


// a+b*c/d
const result = (data) => {
    let ans="";
    for (let i of data) {
        if (i === 'X') {
            ans += '*';

        }
        else if (i === "÷") {
            ans += '/';
        } else {
            ans += i;
        }
    }
    // console.log(ans);
    return eval(ans);
}
keypad.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn.classList.contains('btn')) {
        let input = btn.innerText;
        let prev = text.textContent;
        let answer = output.textContent
        //Clearing Output
        if (btn.classList.contains('btn-clear')) {
            text.textContent = "";
            output.textContent = "";
        }
        //Result
        if (btn.classList.contains('result')) {
            if (!isFinite(prev.slice(-1))) {
                output.textContent = "Error";
                return;
            }
            text.textContent = result(text.textContent);
            output.textContent = "";
            return;
        }
        if (btn.classList.contains('backspace')) {
            text.textContent = prev.slice(0, -1);
        }
        if (isFinite(input)) {
            text.textContent += input;
        }
        if (input === ".") {
            if (isFinite(prev.slice(-1))) {
                text.textContent += input;
            }
            else {
                text.textContent = prev.slice(0, -1);
                text.textContent += input;
            }
        }
        if (btn.classList.contains('symbol')) {
            let last = prev.slice(-1);
            if (isFinite(last)) {
                text.textContent += input;
            }
            else {
                text.textContent = prev.slice(0, -1);
                text.textContent += input;
            }
        }
        if (isFinite(text.textContent.slice(-1))) {
            answer = result(text.textContent);
        }
        output.textContent = answer;
    }
})
