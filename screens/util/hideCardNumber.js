export default cardNumber => {
    const last4 = cardNumber.substr(cardNumber.length - 4);
    return "●●●● ●●●● " + last4;
}