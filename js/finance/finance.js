
const eventManagements = window.localStorage.getItem("registerStudent");
let events= JSON.parse(eventManagements);
const list =document.getElementById('list');

function render(e){
e.map((x)=>{
    list.innerHTML+=
    `
    <tr>
    <th scope="row">Hemant Raj</th>
    <td>Hackathon</td>
    <td>50</td>
    <td>Pce Purnea</td>
    
  </tr>
    
    `
})
}

render(events);



