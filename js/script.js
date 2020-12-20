'use strict';

'use strict';
const requestRub = document.querySelector('#rub');
const requestSum = document.querySelector('#sum');
const requestUsd = document.querySelector('#usd');
//rub
requestRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            requestSum.value = (+requestRub.value * data.currentSumRub.sumRub).toFixed(2);
            requestUsd.value = (+requestRub.value / data.currentUsdRub.usdRub).toFixed(2);
        } else {
            requestSum.value = 'Что то пошло не так!';
            requestUsd.value = 'Что то пошло не так!';
        }
    });
});
//sum 
requestSum.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            requestRub.value = (+requestSum.value / data.currentSumRub.sumRub).toFixed(2);
            requestUsd.value = (+requestSum.value / data.currentUsdSum.usdSum).toFixed(2);
        } else {
            requestRub.value = 'Что то пошло не так!';
            requestUsd.value = 'Что то пошло не так!';
        }
    });
});
//usd 
requestUsd.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            requestSum.value = (+requestUsd.value * data.currentUsdSum.usdSum).toFixed(2);
            requestRub.value = (+requestUsd.value * data.currentUsdRub.usdRub).toFixed(2);
        } else {
            requestSum.value = 'Что то пошло не так!';
            requestRub.value = 'Что то пошло не так!';
        }
    });
});