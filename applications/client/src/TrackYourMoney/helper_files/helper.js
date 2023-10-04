export const handleAmount = (e) => {
    e.preventDefault()

    let amountValue = e.target.value
    if(e.keyCode >= 48 && e.keyCode <= 57) { //0-9 only
        let key = parseInt(e.key)
        amountValue += key
    }

    if(e.keyCode === 190 ) { //decimal(.) only
        amountValue += "."
    }

    if(e.keyCode === 8 ) { //backspace only
        amountValue = amountValue.substring(0, amountValue.length-1);
    }
    return amountValue
}

export const changeArrowDirection = (downArrow, show) => {
    if(show){
        downArrow.style.transform = "rotate(0deg)"
     }else{
        downArrow.style.transform = "rotate(180deg)"
     }
}
