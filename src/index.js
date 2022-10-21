const $ = (name) => document.querySelector(name);

const inputName = document.quertySelector("#input-name");


inputName.onkeyup = function(event){
    data.name = event.target.value;
};





btnCreate.onclick = await function (){
    try{
        const resoinse = await fetch ("",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify
        });
    }
}