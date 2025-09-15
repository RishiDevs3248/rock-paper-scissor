let arr = ["./images/rock.png", "./images/paper.png", "./images/scissors.png"]

let img0 = document.getElementById('img0')
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')

img0.setAttribute("src", arr[0]) // rock
img1.setAttribute("src", arr[1]) // paper
img2.setAttribute("src", arr[2]) // siccors


let res = document.getElementById('res')
let ysc = document.getElementById('ysc')
let csc = document.getElementById('csc')
let u_sc = 0;
let c_sc = 0;
/* user logic */
let user = document.getElementById('c1_sec1');
let user_img = user.children
user_img[0].setAttribute("src", arr[0])

let u_val = 0;
img0.addEventListener('click', () => {
    u_val = 0;
    user_img[0].setAttribute("src", arr[0])
    comp_logic()
    game_res()
})
img1.addEventListener('click', () => {
    u_val = 1;
    user_img[0].setAttribute("src", arr[1])
    comp_logic()
    game_res()
})
img2.addEventListener('click', () => {
    u_val = 2;
    user_img[0].setAttribute("src", arr[2])
    comp_logic()
    game_res()
})

/* computer logic */

let comp = document.getElementById('c1_sec3');
let Comp_img = comp.children
Comp_img[0].setAttribute("src", arr[0])
let random = 0;
function comp_logic() {
    random = Math.floor(Math.random() * 3)
    Comp_img[0].setAttribute("src", arr[random])
}


/* game logic */
function game_res() {
    if ((u_val == 0 && random == 2) || (u_val == 1 && random == 0) || (u_val == 2 && random == 1)) {
        // user win
        console.log("user Win")
        res.textContent = "You Won 🎉"
        u_sc += 1
        ysc.textContent = u_sc
    }
    else if ((u_val == 2 && random == 0) || (u_val == 0 && random == 1) || (u_val == 1 && random == 2)) {
        // comp win
        console.log("comp Win")
        res.textContent = "You Lost 😞"
        c_sc += 1
        csc.textContent = c_sc
    } else {
        console.log("Draw")
        res.textContent = "Draw 😶"
    }
}

/* Reset logic */

let reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    user_img[0].setAttribute("src", arr[0])
    Comp_img[0].setAttribute("src", arr[0])
    u_sc = 0 
    ysc.textContent = u_sc
    c_sc = 0 
    csc.textContent = c_sc
    res.textContent = "Start game"
})
