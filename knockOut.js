window.onload=function() {

    var A1 = document.getElementsByName("a1");
    var A2 = document.getElementsByName("a2");

    var form = document.getElementById("a1");
    var elements = form.elements;
    var options = elements.name;
for (var j = 0; j< elements.length;i++){
    options[i].onclick=uncheckAll();
}


    function uncheckAll() {
        for (i = 0; i < A1.length; i++) {
            options[i].checked = false;
        }
    }

}

