let naamIngave = document.getElementById('naam');
let shortcode= document.getElementById('shortcode');
let beschrijving = document.getElementById('beschrijving');
let button = document.getElementById('button');

let landen = [];

button.addEventListener('click', function () {
    let land={name: naamIngave.value,
         code:shortcode.value,
        besch:beschrijving.value };

    landen.push(land);
    localStorage.setItem("opgeslagenLanden",JSON.stringify(landen));
    laadLanden();
})

function laadLanden() {
    document.getElementById("landenLijstBox").innerHTML="";

    for (let i=0; i<landen.length; i++){
        let vlagLand = document.createElement('img');
        vlagLand.src="resources/landen/"+landen[i].code +".png";

        let ploegbox= document.createElement('div');
        if (i%3 ===0){
            ploegbox.setAttribute("class","cold");
        }else{
            ploegbox.setAttribute("class","green");
        }


        let titel = document.createElement('h2');
        titel.innerHTML =  landen[i].code.substring(0,1).toUpperCase() || landen[i].code.substring(1, landen[i].code.length).toLowerCase()

        let desc = document.createElement('p');
        desc.id = "beschrijvingOutput";
        desc.innerHTML = landen[i].besch;
        ploegbox.append(vlagLand);
        ploegbox.append(titel);
        ploegbox.append(desc);
        document.getElementById("landenLijstBox").appendChild(ploegbox)


    }

}

landen = JSON.parse(localStorage.getItem("opgeslagenLanden")) || [];
laadLanden();
document.getElementById("refresh").addEventListener('click',function () {
    landen=[];
    laadLanden();
})

