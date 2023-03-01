const submitForm=document.getElementById('submitForm');

const eventManagements = window.localStorage.getItem("eventsManagement");
let events= eventManagements ? JSON.parse(eventManagements)  : [];


function addEventTask(event){
    if(event){
        events.push(event);
        window.localStorage.setItem("registerStudent", JSON.stringify(events));
        showNotification('register successfully ');
        return;
    }
    showNotification('something wrong');
}



function insertArray(obj){
    const event={
        event:obj.event,
         id:Date.now(),
         name:obj.name,
         college:obj.college,
         year:obj.year,
         branch:obj.branch,
         password:obj.password,
         mobile:obj.mobile,
        fee:localStorage.getItem("eventFee")

     }
   addEventTask(event);
  
    //  console.log(task);
}


submitForm.addEventListener('click',function(){
   
    const event=document.getElementById('event').value;
    const name=document.getElementById('name').value;
    const college=document.getElementById('college').value;
    const year=document.getElementById('year').value;
    const branch=document.getElementById('branch').value;
    const password=document.getElementById('Password').value;
    const mobile=document.getElementById('mobile').value;
    if(event == ""  || name == "" || college=="" || year == ""  || branch == ""  || mobile == "" || password==""){
        showNotification('box can not be empty');
        return;
    }
    
   
    let obj={
        event,
        name,
        college,
        year,
        branch,
        password,
        mobile,
       
}
console.log(obj);
insertArray(obj);

})




function showNotification(e){
    alert(e);
}