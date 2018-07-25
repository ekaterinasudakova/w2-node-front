
// upon page load, ask the server for all the tags it has saved, 
window.onload = function(){

    
	
    
    let tagValue = [];
    let resultsUL = document.querySelector(".wall-post");
    console.log(resultsUL);

    function displayData(tag){
        console.log('tag in displayData: ', tag);
        var textPEl = document.createElement('p');
        textPEl.innerHTML = tag;
        textPEl.classList.add('tag');
	    let xy = getRandomPosition(textPEl);
	    textPEl.style.top = xy[0] + 'px';
        textPEl.style.left = xy[1] + 'px';
        textPEl.style.transform = `rotate(${Math.random()*60-30}deg)`;
        textPEl.style.color = `rgb(${Math.random() * 155 + 100}, ${Math.random() * 155 + 100}, ${Math.random() * 155 + 100})`;
        //style.top = Math.random() * 100 + "%";
        //style.left = Math.random() * 100 + "%";
        resultsUL.appendChild(textPEl);

    }

    function processTheData(tagArray, resultsUL){
        if (tagArray.length){
            resultsUL.innerHTML = '';
            for (var i= 0; i <= tagArray.length - 1; i++){
                var tempArrayElement = tagArray[i];
                // console.log('this is my temp', tempArrayElement);
                displayData(tempArrayElement);
            }
        }
    }

    function getRandomPosition(element) {
        console.log('getRandm elemnt', element.offsetHeight)
        var x = document.body.offsetHeight-element.clientHeight;
        var y = document.body.offsetWidth-element.clientWidth;
        var randomX = Math.floor(Math.random()*x);
        var randomY = Math.floor(Math.random()*y);
        return [randomX,randomY];
    }

    axios.get('http://localhost:4200/tag', {
        'tag': 'tagValue'
      })
      .then(function (response) {
        console.log('get response.data: ',response.data);
        processTheData(response.data, resultsUL)
      })
      .catch(function (error) {
        console.log(error);
      });
}
// and put them on the screen