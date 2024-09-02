const sayMogadishu = props => {
    console.log(props.text1);
    sayKismayo(props)
}
const sayKismayo = props => {
    console.log(props.text2);
    sayHargeisa(props)
}
const sayHargeisa = props => {
    return "<h1>" + props.text3 + "</h1>" 
}

const props = {
    text1: "I am Mogadishu",
    text2: "I am Kismayo",
    text3: "I am Hargeisa"
}

sayMogadishu(props);

export {sayMogadishu, sayHargeisa, sayKismayo}