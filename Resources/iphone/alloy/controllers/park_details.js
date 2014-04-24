function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "park_details";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.park_images = Ti.UI.createWindow({
        id: "park_images",
        title: "Location",
        backgroundColor: "#11a4b4",
        top: "0"
    });
    $.__views.park_name = Ti.UI.createLabel({
        id: "park_name",
        text: "",
        top: "20"
    });
    $.__views.park_images.add($.__views.park_name);
    $.__views.images = Ti.UI.createScrollView({
        id: "images"
    });
    $.__views.park_images.add($.__views.images);
    $.__views.details = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.park_images,
        id: "details"
    });
    $.__views.details && $.addTopLevelView($.__views.details);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var tagname = Titanium.App.Properties.getString("nameOfPark");
    Ti.API.info("Parkname is" + tagname);
    var maps_webview = Titanium.UI.createWebView({
        url: "http://www.google.com/maps/place/" + escape(tagname)
    });
    $.park_images.add(maps_webview);
    $.park_images.title = tagname;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;