// alert("Succesfully Connected!")
// var h=document.createElement('h1');
// var myVal=document.createTextNode('Hello World!')
// h.appendChild(myVal)
// document.querySelector('h1').appendChild(h);
// var val=5;
// while(val>0){
//     console.log(val);
//     val--;
// }


var ul=document.getElementById('list');
var li;

var addTodoBtn=document.getElementById('add');
addTodoBtn.addEventListener('click',addItem)


var removeTodoBtn=document.getElementById('remove');
removeTodoBtn.addEventListener('click',removeItem)

var removeAllTodoBtn=document.getElementById('removeAll');
removeAllTodoBtn.addEventListener('click',removeAllTodos)






function addItem(){
   var input =document.getElementById('input');
   var todoVal=input.value;
//    ul=document.getElementById('list');
   var textnode=document.createTextNode(todoVal);

   if(todoVal===''){
       return false;
   }
   else{
       //create li
       li=document.createElement('li');

       //create checkbox
       var checkbox=document.createElement('input')
       checkbox.type='checkbox'
       checkbox.setAttribute('id','check')
       
       //create label
       var label=document.createElement('label');
       label.setAttribute('for','item')

       //add these elements on WebPage
       ul.appendChild(label);
       li.appendChild(checkbox);
       label.appendChild(textnode);
       li.appendChild(label);
       ul.insertBefore(li,ul.childNodes[0]);
       setTimeout(()=>{
           li.className='visual';
       },2);

       input.value="";

   }
    // console.log("Add Button Clicked!")
}

function removeItem(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        } 
    }
    
    // console.log("Remove Button Clicked!")

}


function removeAllTodos(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index]){
            ul.removeChild(li[index])
        }
        
    }
}