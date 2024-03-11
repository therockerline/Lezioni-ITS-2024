let ipIniziale = 103
let fetchButtons = document.getElementsByClassName('fetchButton')

async function getCv(ip) {
    let res = await fetch('http://192.168.3.' + ip + ':5500/cv.json')
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
        let cv = await getCv(ipIniziale)
        console.log(cv)
    } catch (error) {
        console.error(error)
    }
    for (let btn of fetchButtons) {
        btn.disabled = false
    }
}

