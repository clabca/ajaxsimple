function senRequest(){
    var theObject = new XMLHttpRequest();
    theObject.open('POST','backend.php',true);
    theObject.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    theObject.onreadystatechange = function () {
        document.getElementById('titulo').innerHTML = theObject.responseText;
    }

    theObject.send('name=Cristian');

}