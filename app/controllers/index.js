
$.window1.open();

function jsonFlickrFeed(data) {
  createThumbs(data.items); // loop over the items
}

function getPictures(tags){
	//tags is whatever the user types in the text area on index.js.
	var tags = $.textArea.value; //user inputs are the tags for the request
	Titanium.App.Properties.setString("nameOfPark", tags);
	//new httprequest object
	//create teh request variable
	var myRequest = Ti.Network.createHTTPClient({
		onload: function(e) {
			// reads jsonFlickrFeed as javascript
			eval(this.responseText);
		},
		onerror: function(e) {
			alert(e.error);
			//if there is an error, then run stuff in here
		},
		timeout:5000 // give up after 5 seconds
	});
	myRequest.open("GET", "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags="+tags);
	myRequest.send();
}

//create the thumbnails
function createThumbs(allItems){
	for(i = 0; i < allItems.length; i++){
		var newThumb = Ti.UI.createImageView({ //creates a thumbnail for each thumb
			image: allItems[i].media.m, left:10,right:10,height:100, width:300, top:3+i*110,
		});

		$.main.add(newThumb);
	}//end of loop
}
//functions!
$.search.addEventListener('click', getPictures);


$.map.addEventListener('click',openParkDetails);
//openParkDetails

// var testing= Titanium.App.Properties.setString("nameOfPark", "works");

function openParkDetails(e) {
    var newWindow = Alloy.createController('park_details').getView(); //creates a new window and opens it and passes the information for the clicked row
    $.window1.openWindow(newWindow, {animated:true});
   //assign this to a variable and then make it equal to the detail. 
}

