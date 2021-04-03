function statusFunc(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    else {
        return Promise.reject(new Error(response.statusText));
    }
}
function json(response) {
    return response.blob();
}
window.onload = async () => {
    const image = document.getElementById("image");

    for (let i = 0; i < 3 ; i++) {
        let clinetWitdh = image.width;
        let clinetHeight = image.height;
        fetch(`http://placekitten.com/g/${clinetWitdh}/${clinetHeight}`)
            .then(statusFunc)
            .then(json)
            .then((response) => {
                const urlObject = URL.createObjectURL(response);
                image.setAttribute('src', urlObject)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}