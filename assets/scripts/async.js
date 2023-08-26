//Callbaks para asincronismo
console.log("Aquí envío cosas!")
setTimeout(() => {
    console.log("Aquí te respondo crack...")
}, 3000)
console.log("SE TERMINÓ")

//Pero no todo es bonito

// ===============
// YIKES!!!!!!!!!!!
// ===============
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

// HE AQUÍ EL CALLBACK HELL
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {

                })
            })
        })
    })
});

//SOLUCIÓN: Promesas

// Callback
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

fakeRequestCallback('libros.com/page1', 
    (response) => {
        console.log('Entré')
        console.log(response)
        fakeRequestCallback('libros.com/page2', 
            (response) => {
                console.log('Entré')
                console.log(response)
                fakeRequestCallback('libros.com/page3',
                    (response) => {
                        console.log('Entré')
                        console.log(response)
                    }, (err) => {
                        console.log(err)
                    }
                )
            }, (err) => {
                console.log(err)
            })
    }, (err) => {
        console.log(err)
    }
)

// Promise 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestPromise('libros/page1')
    .then((data) => {
        console.log("Entré (page1)")
        console.log(data)
        return fakeRequestPromise('libros/page2')
    })
    .then((data) => {
        console.log("Entré (page2)")
        console.log(data)
        return fakeRequestPromise('libros/page3')
    })
    .then((data) => {
        console.log("Entré (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

// Con nuestra transición

const delayedColorChangePromise = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// Se ve muy bonito
delayedColorChangePromise('red', 1000)
    .then(() => delayedColorChangePromise('orange', 1000))
    .then(() => delayedColorChangePromise('yellow', 1000))
    .then(() => delayedColorChangePromise('green', 1000))
    .then(() => delayedColorChangePromise('blue', 1000))
    .then(() => delayedColorChangePromise('indigo', 1000))
    .then(() => delayedColorChangePromise('violet', 1000))


// Con async/await

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!")
}
