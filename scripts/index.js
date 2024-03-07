let ipIniziale = 103
let fetchButtons = document.getElementsByClassName('fetchButton')

async function getCv(ip, rete = 2) {
    let res = await fetch('http://192.168.' + rete + '.' + ip + ':5500/cv.json')
    let cv = await res.json()
    return cv
}

async function handleButtonClick(sum) {
    for (let btn of fetchButtons) {
        btn.disabled = true
    }
    ipIniziale += sum
    document.getElementById('cvCorrente').innerText = ipIniziale
    try {
        let cv = await getCv(ipIniziale, 3)
        console.log(cv)
    } catch (error) {
        console.error(error)
    }
    for (let btn of fetchButtons) {
        btn.disabled = false
    }
}

