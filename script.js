// TODO: add code here

function init () {
    console.log("init function");
    //window.addEventListener("load", function() {
        let json= [];
        fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
            response.json().then(function(json) {
                console.log(json);
                const container = document.getElementById("container");

                for(let index in json)    {
                    console.log(json[index]);
                    let astronaut = document.createElement('div');
                    astronaut.className = "astronaut";

                    astronaut.innerHTML = `

                        <div class = "bio">
                            <h3>${json[index].firstName} ${json[index].lastName}</h3>

                            <ul>
                                <li>Hours in space: ${json[0].hoursInSpace}</ln>    
                                <li>Active:  ${[json[0].active]}</li>
                                <li>Skills: ${json[0].skills}</li>

                            </ul>
                        </div>

                    <img class="avatar" src=${json[index].picture}>

                    `;
                    container.appendChild(astronaut);
                }    
            });
        });




        //console.log(json);xx
//    });   
}



window.onload = init;