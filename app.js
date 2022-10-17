// var parent = document.getElementById("div1");
// var target = parent.firstChild;
// nName = target.nodeName;
// console.log(nName)

// var parent = document.getElementById("div1");
// var target = parent.firstChild;
// var nTextContent = target.nodeValue;
// console.log(nTextContent)

// var displayImage = document.getElementById("displayImage")
// var imgsParent = document.getElementById("imgsParent")
// var allImages = imgsParent.getElementsByTagName('IMG')
// var indexNum = 0;

// function initSlider(){
//     displayImage.src = allImages[indexNum].src
// }

// initSlider()

// function prev(){
//     if(indexNum ==0){
//         indexNum=allImages.length - 1;
//     }
//     else{
//         indexNum--;
//     }
//     initSlider()
// }
// function next(){
//     if(indexNum == allImages.length - 1 ){
//         indexNum=0
//     }
//     else{
//         indexNum++
//     }
//     initSlider()
// }

// function generateElement(){
//     var p = document.createElement('P')
//     var text ="ABC 123"
//     var txtNode = document.createTextNode(text)

//     p.appendChild(txtNode)

//     var parent = document.getElementById('parent')
//     parent.appendChild(p)

//     console.log(p)
// }


// function inputFill(){
//     var input = document.createElement('P')
//     var text = document.getElementById("input").value
//     var txtNode = document.createTextNode(text)

//     input.appendChild(txtNode)
//     var parent = document.getElementById('parent')
//     parent.appendChild(input)

//     console.log(input)
// }
function inputFill() {
    var P = document.createElement('P')
    var text = document.getElementById("input").value
    var txtNode = document.createTextNode(text)
    P.setAttribute('class', 'pera')

    P.appendChild(txtNode)
    console.log(txtNode)
    var btn = document.createElement('BUTTON')
    var btnText = 'Delete'
    btnText = document.createTextNode(btnText)
    btn.appendChild(btnText)
    btn.setAttribute('onclick', 'remove(this)')
    P.appendChild(btn)
    document.getElementById('body').appendChild(P)
    console.log(btn)

    var edit = document.createElement('BUTTON')
    var editBtn = 'Edit'
    editBtn = document.createTextNode(editBtn)
    edit.appendChild(editBtn)
    edit.setAttribute('oncick' , 'edit(this)')
    P.appendChild(edit)
    document.getElementById('body').appendChild(P)

}

function remove(element) {
    element.parentNode.remove()
 
    // console.log(element)
}
function edit(element){
    element.parentNode
}



