function clearName(){ // assign action for reset button on click
    document.getElementById('input-group-text').innerHTML = '';
}

function clearCrust(){
    var dropDown = document.getElementById("custom-select custom-select-sm");
        dropDown.selectedIndex = 0;

}

function clearPizzaLength(){
    selectElement.remove(pizzaSize);
}

function uncheckBox(){
    document.getElementById("checkbox").checked = false;
}

function clearComments(){
    document.getElementById('input-group-text').innerHTML = '';
}

<button id="reset" class="btn-md btn-danger" onclick="clearName(); clearCrust(); clearPizzaLength(); uncheckBox(); clearComments();">Reset</button>

var element = document.getElementById("order"); // assign action for order button on click
element.onclick = function(
    //console.log(event.target.dataset);
    //cart.push(event.target.dataset);
    //console.log(cart)    
  //});
//}
