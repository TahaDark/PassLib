let maindiv = document.querySelector("main")
let passwords = []

pnameel = function() {return document.getElementById("name").value}
pidel = function() {return document.getElementById("id").value}
ppassel = function() {return document.getElementById("pass").value}

function getLib() {

    passwords = []


    keys = Object.keys(localStorage)
    i = keys.length;
    
    while ( i-- ) {
        // console.log(i)

        getname = keys[i]
        getidanpass = localStorage.getItem(keys[i])
        getidanpass = getidanpass.split("  ")
        passwords[i] = {
            pname: getname,
            pid: getidanpass[0],
            ppass: getidanpass[1],
        }
    }
}


function updateBars() {
    getLib()

    maindiv.innerHTML = ""

    for (i in passwords) {
        var pnumber = parseInt(i) + 1
        var pname = passwords[i].pname
        var pid = passwords[i].pid
        var ppass = passwords[i].ppass
        // console.log(pnumber);
        // console.log(pname)
        // console.log(pid)
        // console.log(ppass)
    
        let passsection = document.createElement("section")
        passsection.innerHTML = `
            <span id="X" onclick="removepass(${pnumber})">X</span>
            <div>
                <span>Name: ${pname}</span>
                <span>ID: ${pid}</span>
                <span id="pass${pnumber}">Password: ***</span>
            </div>
            <span onclick="showpass(${pnumber})" id="showPass"><span>Show Password</span></span>`

        maindiv.appendChild(passsection)


        // let passbardiv = document.createElement("div")
        // let numberspan = document.createElement("span")
        // numberspan.innerText = number
        // let namespan = document.createElement("span")
        // namespan.innerText = place
        // let passspan = document.createElement("span")
        // passspan.innerText = pass
        // passbardiv.appendChild(numberspan)
        // passbardiv.appendChild(namespan)
        // passbardiv.appendChild(passspan)
    
        // maindiv.appendChild(passbardiv)

    }    
}

updateBars()

function showpass(passindex) {
    document.getElementById("pass" + passindex).innerText = "Password: " + passwords[passindex - 1].ppass
}

function removepass(passindex) {
    localStorage.removeItem(passwords[passindex - 1].pname)
    updateBars()
}

function addPass() {
    if (pnameel() == "") {
        alert("Fill The Name Field Please")
    } else if (pidel() == "") {
        alert("Fill The ID Field Please")
    } else if (ppassel() == "") {
        alert("Fill The Password Field Please")
    } else {
        idandpass = pidel() + "  " + ppassel()
        localStorage.setItem(pnameel(),idandpass)
        updateBars()
        document.getElementById("name").value = ""
        document.getElementById("id").value = ""
        document.getElementById("pass").value = ""
    }
}