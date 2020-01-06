var out

window.onload=function(){
    out = document.getElementById('show');
    console.log(out);
    
    var json = this.JSON.parse(show.i);

    for (var i = 0; i < json.length; i++) {
        var counter = json[i];
        console.log(counter.title);
    }
}