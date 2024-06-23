function greet() {
    console.log('hello world');
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
        .then(registration => {
            console.log('sw installed: ', registration);
        })
        .catch(err => console.log('sw installed failed: ', err))
    })
}

