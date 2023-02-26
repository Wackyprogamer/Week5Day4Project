
$('.navItem').css('color', 'white');
    
$('#nav').css('background-color', '#145');

let eventItems = $('li:even');

$(eventItems).css('background-color', '#ccc');

let oddItems = $('li:odd');

$(oddItems).css('background-color', '#aaa');

console.log(oddItems);


let inputItem = $(':input');

$(inputItem).val("Sergio");

console.log(inputItem);

