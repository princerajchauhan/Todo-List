
let todos = document.getElementById("todos")
let logo = document.getElementById('logo')
let count = 0
let recCount = 0

let noRecord = document.getElementById('noRecord')
let main = document.getElementById('main')
noRecordText()
function noRecordText() {
    main.style.filter = "brightness(1)"
    if (recCount) {
        noRecord.innerText = ""    
    }
    else
        noRecord.innerText = "No items added in the todo list"
}

function createCard() {
    count++
    recCount++
    let todoCard = document.createElement("div")
    todos.appendChild(todoCard)
    let hline = document.createElement('hr')
    let cardHead = document.createElement('h3')
    let cardBody = document.createElement('div')
    let cardFoot = document.createElement('footer')
    
    todoCard.appendChild(cardHead)
    todoCard.appendChild(hline)
    todoCard.appendChild(cardBody)
    todoCard.appendChild(cardFoot)
    
    todoCard.classList.add(`todoCard${count}`)
    todoCard.classList.add("todoCard")
    cardHead.classList.add(`head${count}`)
    cardHead.classList.add(`head`)
    cardBody.classList.add('cardBody')
    cardBody.classList.add(`cardBody${count}`)
    cardFoot.classList.add('cardFoot')
    
    let delBtn = document.createElement('button')
    delBtn.classList.add("delBtn")
    cardFoot.appendChild(delBtn)
    delBtn.innerHTML = '<i class="fa-solid fa-trash-can fa-2x"></i>'
    
    delBtn.addEventListener('click', ()=>{
        todoCard.remove();
        recCount--
        noRecordText()
        logoClick()
    })
    
    let addBtn = document.createElement('button')
    addBtn.classList.add('addBtn')
    cardFoot.appendChild(addBtn)
    addBtn.innerHTML = `<i class="fa-sharp fa-solid fa-circle-plus fa-2x addcircle"></i>`
    addBtn.addEventListener('click', ()=>{
        addTodoItem(cardBody)
    })

    cardHead.addEventListener('click',()=>{
        for (let i = 1; i <= count; i++) {
            if (!document.getElementsByClassName(`todoCard${i}`)[0]) {
                continue
            }
            document.getElementsByClassName(`todoCard${i}`)[0].style.display = "none"
            console.log(document.getElementsByClassName(`todoCard${i}`)[0])
            todos.style.justifyContent = "center"

        }
        todoCard.style.display = "block"
        logo.classList.add('logo')
        logo.innerHTML = `<i class="fa-solid fa-arrow-left"></i> <span class="backText"> Back </span>`
        logo.style.cursor = "pointer"

        document.getElementById('tripHead').innerText = cardHead.innerText
    })

    noRecordText()
    logoClick()
}


logo.addEventListener('click', logoClick)
function logoClick(){
    logo.innerHTML = `<span class="tasks">Tasks</span> List`
    logo.classList.remove('logo')
    logo.style.cursor = "none"
    for (let i = 1; i <= count; i++) {
        if (!document.getElementsByClassName(`todoCard${i}`)[0]) {
            continue
        }
        document.getElementsByClassName(`todoCard${i}`)[0].style.display = "block"
    }
    // cardHead.style.cursor = "auto"
    document.getElementById('tripHead').innerText = ""
    todos.style.justifyContent = "space-between"
}


// *************************************** Popup List *********************************
let popups = document.getElementById('popups')

function popBox() {
    main.style.filter = "brightness(0.1)"
    
    popups.classList.add("popup")
    popups.innerHTML = `<div class="popHead">Add new List</div>
                        <input type="text" id="popText" placeholder = "Add new List">
                        <div id="popBtn">
                            <button id="addText" class="popBtnAddClose" onclick="addFun()">Add</button>
                            <button id="closePop" class="popBtnAddClose" onclick = "closePop()">Close</button>
                        </div>`
    
}

function addFun() {
    let textValue = document.getElementById('popText').value
    if (textValue == "") {
        alert("Please enter the item name")
    }
    else{
        createCard()
        let headValue = document.getElementsByClassName(`head${count}`)[0]
        textValue = textValue.charAt(0).toUpperCase() + textValue.slice(1)
        headValue.innerText = textValue
        popups.classList.remove('popup')
        popups.innerHTML = ""
    }
}

function closePop() {
    popups.classList.remove('popup')
    popups.innerHTML = ""
    main.style.filter = "brightness(1)"
}

function addTodoItem(element) {
    let elem = element.classList[1].slice(-1)
    main.style.filter = "brightness(0.1)"

    popups.classList.add("popup")
    popups.innerHTML = `<div class="popHead">Add new Item</div>
                        <input type="text" id="popText" placeholder = "Add new Item">
                        <div id="popBtn">
                            <button id="addText" class="popBtnAddClose" onclick="addItemFun(${elem})">Add</button>
                            <button id="closePop" class="popBtnAddClose" onclick = "closePop()">Close</button>
                        </div>`
}

function addItemFun(element) {
    let itemValue = document.createElement('p')
    itemValue.innerText = document.getElementById('popText').value
    
    let span = document.createElement('span')
    span.classList.add("spans")
    span.innerText = 'mark done'
    
    if (itemValue.innerText == "") {
        alert("Please add items.")        
    }
    else{
        itemValue.appendChild(span)
        let itemsList = document.getElementsByClassName(`cardBody${element}`)[0]
        itemsList.appendChild(itemValue)
        popups.classList.remove('popup')
        popups.innerHTML = ""
        main.style.filter = "brightness(1)"
    }

    span.addEventListener('click', ()=>{
        itemValue.style.textDecoration = "line-through"
        itemValue.style.textDecorationColor = "red"
        itemValue.removeChild(span)
    })
}






