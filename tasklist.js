const form =document.querySelector('#task-form');
const tskList=document.querySelector('.collection');
const clear=document.querySelector('.clear-task');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');

eventListener()
 function eventListener(){
     form.addEventListener('submit', addTask);

 }
 function addTask(e)
 {
     if(taskInput.value===''){
         alert("add a task");
     }
     const li=document.createElement('li');
     li.className='collection-item';
     li.appendChild(document.createTextNode(taskInput.value));
     const link =document.createElement('a');
     link.className='delete-item secondary-content';
     link.innerHTML= '<i class="fa fa-remove"><i>'; 
     li.appendChild(link);
     tskList.appendChild(li);
     taskInput.value='';
     e.preventDefault();
 }
