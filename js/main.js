let maindiv = document.querySelector("main")
let passwords = []

function getLib() {
    
    keys = Object.keys(localStorage)
    i = keys.length;
    
    while ( i-- ) {
        getplace = keys[i]
        getpass = localStorage.getItem(keys[i])
        passwords[i] = {
            place: getplace,
            pass: getpass,
        }
    }
}

function updateBars() {
    getLib()
    for (i in passwords) {
        number = parseInt(i) + 1
        place = passwords[i].place
        pass = passwords[i].pass
        console.log(number);
        console.log(place)
        console.log(pass)
    
        let passbardiv = document.createElement("div")
        let numberspan = document.createElement("span")
        numberspan.innerText = number
        let namespan = document.createElement("span")
        namespan.innerText = place
        let passspan = document.createElement("span")
        passspan.innerText = pass
        passbardiv.appendChild(numberspan)
        passbardiv.appendChild(namespan)
        passbardiv.appendChild(passspan)
    
        maindiv.appendChild(passbardiv)
    
    }    
}

updateBars()

function addPass(name,pass) {
    localStorage.setItem(name,pass)
    getLib()
}


console.log("Taha Khare")