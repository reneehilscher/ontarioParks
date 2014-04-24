
var tagname = Titanium.App.Properties.getString("nameOfPark");
Ti.API.info("Parkname is" + tagname );
var maps_webview = Titanium.UI.createWebView({url:'http://www.google.com/maps/place/'+escape(tagname)});
$.park_images.add(maps_webview);
$.park_images.title = tagname;
