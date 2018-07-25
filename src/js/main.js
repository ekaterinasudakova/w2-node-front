

// when the user clicks the button
document.querySelector('button.tagit').addEventListener("click", function() {

	// send the tag to the server
	let tagValue = document.querySelector('[name="tag"]').value;
	console.log('got tag from input', tagValue);

	axios.post('http://localhost:4200/tag',{
		tag: tagValue
	})
	  .then(function (response) {
		console.log('response: ', response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });

})