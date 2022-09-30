

window.onload = function CountNestedElements(){
    var TopElement = document.querySelector('ul');
        var listOfElements = TopElement.getElementsByTagName('li');
        
        for(var i=0; i<listOfElements.length;i++){
            var current = listOfElements[i];
            if(current.querySelector('ul') == null){
                continue;
            }
            var count = current.querySelector('ul').getElementsByTagName('li').length;
            var name = current.firstChild.data += " (" + count + ")";
        }
    }