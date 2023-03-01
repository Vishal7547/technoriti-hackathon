
const eventDataFromLOcalStorage = window.localStorage.getItem("eventsManagement");
let eventData =JSON.parse(eventDataFromLOcalStorage);
// console.log(eventData);

function render(x){
const eventCard=document.getElementById('eventCard');
eventCard.innerHTML=" ";  
x.map((e)=>{
eventCard.innerHTML +=
`
<div class="col-md-5 text-center g-0 border-outline pb-5">
                <div class="image_conatiner">
    <img src=${e.imageLink} alt="blind_coding">
    <span id="dateOfEvant">registration open till date <b>${e.lastDate}</b></span>
                </div>
                <div class="content_event">
                    <h2>${e.title}</h2>
    
                    <span>start on <br> ${e.title} </span>
                    <span>Entry fee <br> ${e.fee} </span>
                    <span>Location <br> ${e.location}</span>
                    <span>Venue <br>${e.venu} </span>
                    
    <br>
    <button class="btn btn-danger mt-3">Registration</button>
    <button class="btn btn-danger mt-3">share</button>

                </div>
               </div>
`
})  
}
render(eventData);
