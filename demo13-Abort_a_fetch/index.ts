// reference: https://developers.google.com/web/updates/2017/09/abortable-fetch

interface abortParams {
    url: string;
    timeout: number;
}

function abortFetch(url, timeout) {
    let abortCtrl = new AbortController();
    let signal = abortCtrl.signal;

    let tid = setTimeout(() => {
        abortCtrl.abort();
    }, timeout)

    fetch(url, { signal}).then(response => {
        return response.text()
    })
    .then(res => console.log(res))
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('Fetch Abort: ', err);    // Fetch Abort DOMException: The user aborted a request.
        } else {
            console.log('Fetch Error: ', err)
        }
    })
}