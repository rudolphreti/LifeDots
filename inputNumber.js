var yearsToDie = document.getElementById('years-to-die');
var value = yearsToDie.value;
var btnAdd = document.getElementById('btn-add');
var btnSub = document.getElementById('btn-sub');
var timer;

function continuosIncerment() {
    yearsToDie.value = ++value;
    generateDots();
    timer = setTimeout(function() {
        continuosIncerment();
    }, 100);
}

function continuosDecerment() {
    if (value > 0) {
        yearsToDie.value = --value;
        generateDots();
    }
    timer = setTimeout(function() {
        continuosDecerment();
    }, 100);
}

function timeoutClear() {
    clearTimeout(timer);
}

btnAdd.addEventListener('mousedown', function() {
    continuosIncerment();
});
btnAdd.addEventListener('mouseup', timeoutClear);
btnAdd.addEventListener('mouseleave', timeoutClear);

btnAdd.addEventListener('touchstart', function(ev) {
    ev.preventDefault();
    continuosIncerment();
});
btnAdd.addEventListener('touchend', timeoutClear);

btnSub.addEventListener('mousedown', function() {
    continuosDecerment();
});
btnSub.addEventListener('mouseup', timeoutClear);
btnSub.addEventListener('mouseleave', timeoutClear);
btnSub.addEventListener('touchstart', function(ev) {
    ev.preventDefault();
    continuosDecerment();
});
btnSub.addEventListener('touchend', timeoutClear);