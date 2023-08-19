let total = 0;
function handleClickBtn(target) {
    const selectedItemContainer = document.getElementById('selected-items');
    // console.log(target.parentNode.childNodes[1].innerText);
    const itemName = target.parentNode.childNodes[1].innerText;
    // console.log(itemName);
    const li = document.createElement('li');
    li.innerText = itemName;
    // console.log(li);
    selectedItemContainer.appendChild(li);
    const price = target.parentNode.childNodes[5].innerText.split(' ')[1];
    console.log(price);
    total = parseInt(total) + parseInt(price);
    // console.log(total);
   document.getElementById('total').innerText = total;



}