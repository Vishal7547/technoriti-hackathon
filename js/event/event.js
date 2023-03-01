const eventCard=document.getElementById('eventCard').value;

const eventDataFromLOcalStorage = window.localStorage.getItem("eventsManagement");
let eventData =JSON.parse(eventDataFromLOcalStorage);
// console.log(eventData);

function render(x){

}
render(eventData);