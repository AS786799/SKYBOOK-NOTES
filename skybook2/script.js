//select popup-box,popup-overlay,addpopup-button//
 var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel popup button//
var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(){
    event.preventDefault()
    
})
//select add book,book name,author name,description//
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var bookname=document.getElementById("book-title-input")
var authorname=document.getElementById("book-author-input")
var description=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault(event)
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bookname.value}</h2>
            <h4>${authorname.value}</h4>
            <P>${description.value}</P>
            <button onclick="cancel(event)">Delete</button> `
    container.append(div)
popupoverlay.style.display="none"
    popupbox.style.display="none"

})
//function for delete//
function cancel(event){
    event.target.parentElement.remove()
}