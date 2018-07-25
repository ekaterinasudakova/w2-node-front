
// upon page load, ask the server for all the tags it has saved, 
window.onload = function(){
    
    let tagValue = [];
    let resultsUL = document.querySelector(".wall");
    console.log(resultsUL);

    function displayData(tag){
        console.log('tag in displayData: ', tag);
        var textPEl = document.createElement('p');
        textPEl.innerHTML = tag;
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