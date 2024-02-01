const addUserBtn = document.getElementById('addbtn')
const usernameTextField = document.getElementById('username')
const recordsDisplay =document.getElementById('records')

   let userArray=[];
   //data get from localstorage
   let objstr=localStorage.getItem('user')//covert object to string
   // console.log(objstr)

if(objstr !=null) {
    userArray=JSON.parse(objstr) //convert string data to object
}
  console.log(userArray)

   displayData();
 addUserBtn.onclick=()=>{
    const name=usernameTextField.value;
    userArray.push({'name':name})
    //console.log(userArray);
    saveData(userArray)
 }
 function saveData(userArray) {

     let str=JSON.stringify(userArray)//object to string
     localStorage.setItem('user',str)
 }

 function displayData(){
    let data ='';
    userArray.forEach((user,i)=>{
     // console.log(user)
     data += `<tr>
             <th scope="row">${i+1}</th>
             <td>${user.name}</td>
             </tr>`;
             

    })
    recordsDisplay.innerHTML=data;
 }


    