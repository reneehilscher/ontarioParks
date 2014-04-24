function doClick(e) {
    alert($.label.text);
}
$.index.open();

var jsonObject;
var allItems;
//new httprequest object 


//create teh request variable
var myRequest = Ti.Network.createHTTPClient({
	
	onload: function(e) {
		//if all loads, run stuff in here
		jsonObject = JSON.parse(this.responseText);
		Ti.API.info(jsonObject);
		alert(jsonObject);
		
		// var first_item = allItems[0];
		// alert(first_item);
	},
	
	onerror: function(e) {
		alert(e.error);
		//if there is an error, then run stuff in here
	},
	timeout:5000 // give up after 5 seconds
	
});

// var tags ="high park";

myRequest.open("GET", "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=%27+high+park");
myRequest.send();


function createThumbs(){
	
	for(i = 0; i < items.length; i++){
		var card = Ti.UI.createView({ //creates a card for each of the thumbs
			left:68, height:150, width:200, top:20+i*180, backgroundColor:'blue'
		});
		var newThumb = Ti.UI.createImageView({ //creates a thumbnail for each thumb
			image: items[i].media.m, left:100, height:150, width:200, top:1+i*180,
			thumbCard:card //associates the image with the card created at the same time as itself
		});
		newThumb.addEventListener ('click', thumbClicked);
		var titleLabel = Ti.UI.createLabel({
			text:items[i].title, bottom:0, color:"white"
		});
		$.mainScroll.add(card);
		card.add(titleLabel);
		$.mainScroll.add(newThumb);
	}//end of loop
}
//functions!
