let cartCounterDisplay = document.querySelector('#cart-counter');
let cartCalloutDisplay = document.querySelector('#cart-callout');
let buttonsContainer = document.querySelector('.collection-list');

let amount = +getGlobalVar('amount');
let quantity = +getGlobalVar('quantity');
let callout = getGlobalVar('callout');


let cartCounter = quantity;
let cartPrice = amount;

cartCounterDisplay.innerHTML = `&nbsp;${cartCounter} item(s) - $ ${cartPrice}`;

callout == null ? cartCalloutDisplay.innerHTML = "Shopping cart is empty!" : cartCalloutDisplay.innerHTML = "Your cart isn't empty!";

function saveGlobalVar(name, value) {
    sessionStorage.setItem(name, value);
}

function getGlobalVar(name) {
    return sessionStorage.getItem(name);
}

let text = document.getElementsByTagName("input")[2];

let inputQ;

function a_value(o) {
    inputQ = +o.value;

    inputQ <= 0 ? inputQ = 0 : inputQ;

    return inputQ;
}

buttonsContainer.onclick = function(event) {
    let button = event.target.closest('.item-cart');
    if (!button) return;
    if (!buttonsContainer.contains(button)) return;

    btnClickHandler(button);
};

let btnClickHandler = (e) => {
    const originalPrice = (e.parentElement.previousElementSibling
        .querySelector('.original-price') ||
        e.parentElement.parentElement.previousElementSibling
        .querySelector('.original-price')).textContent.replace(/\D/g, '');

    cartCalloutDisplay.innerHTML = "Your cart isn't empty!";
    saveGlobalVar('callout', cartCalloutDisplay.innerHTML);

    cartCounterDisplay.innerHTML = (() => {

        console.log(inputQ);

        if (inputQ !== undefined) {
            cartPrice = cartPrice + +originalPrice * inputQ;
            cartCounter = cartCounter + inputQ;
        } else {
            cartPrice = cartPrice + +originalPrice;
            cartCounter = ++cartCounter;
        }

        saveGlobalVar('amount', cartPrice);
        saveGlobalVar('quantity', cartCounter);
        saveGlobalVar('callout', cartCounter);

        return ` ${cartCounter} item(s) - ${cartPrice} $`;
    })();

};

$('#zoom_01').elevateZoom({
    easing: true,
    zoomWindowWidth: 400,
    zoomWindowHeight: 400,
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 500,
    lensFadeIn: 500,
    lensFadeOut: 500
});
$('#zoom_02').elevateZoom({
    easing: true,
    zoomWindowWidth: 400,
    zoomWindowHeight: 400,
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 500,
    lensFadeIn: 500,
    lensFadeOut: 500
});
$('#zoom_03').elevateZoom({
    easing: true,
    zoomWindowWidth: 400,
    zoomWindowHeight: 400,
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 500,
    lensFadeIn: 500,
    lensFadeOut: 500
});
$('#zoom_04').elevateZoom({
    easing: true,
    zoomWindowWidth: 400,
    zoomWindowHeight: 400,
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 500,
    lensFadeIn: 500,
    lensFadeOut: 500
});