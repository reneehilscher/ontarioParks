function Controller() {
    function jsonFlickrFeed(data) {
        createThumbs(data.items);
    }
    function getPictures(tags) {
        var tags = $.textArea.value;
        var myRequest = Ti.Network.createHTTPClient({
            onload: function(e) {
                eval(this.responseText);
            },
            onerror: function(e) {
                alert(e.error);
            },
            timeout: 5e3
        });
        myRequest.open("GET", "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + tags);
        myRequest.send();
    }
    function createThumbs(allItems) {
        for (i = 0; allItems.length > i; i++) {
            var newThumb = Ti.UI.createImageView({
                image: allItems[i].media.m,
                left: 10,
                right: 10,
                height: 150,
                width: 300,
                top: 1 + 180 * i
            });
            newThumb.addEventListener("click", thumbClicked);
            $.main.add(newThumb);
        }
    }
    function thumbClicked(e) {
        alert(e.source.index);
    }
    function openParkDetails() {
        var newWindow = Alloy.createController("park_details").getView();
        $.window1.openWindow(newWindow, {
            animated: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        backgroundColor: "#f2e9cc",
        id: "__alloyId0"
    });
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Ontario Parks",
        id: "label",
        top: "10"
    });
    $.__views.__alloyId0.add($.__views.label);
    $.__views.textArea = Ti.UI.createTextArea({
        id: "textArea",
        borderWidth: "2",
        borderColor: "#bbb",
        borderRadius: "5",
        color: "#888",
        textAlign: "left",
        value: "I am a textarea",
        top: "60",
        width: "150",
        height: "30",
        left: "40"
    });
    $.__views.__alloyId0.add($.__views.textArea);
    $.__views.search = Ti.UI.createButton({
        title: "Search",
        id: "search",
        top: "60",
        right: "40"
    });
    $.__views.__alloyId0.add($.__views.search);
    $.__views.testing = Ti.UI.createButton({
        title: "Test",
        id: "testing",
        bottom: "10"
    });
    $.__views.__alloyId0.add($.__views.testing);
    $.__views.main = Ti.UI.createScrollView({
        id: "main",
        height: "300",
        left: "0",
        right: "0",
        width: "300"
    });
    $.__views.__alloyId0.add($.__views.main);
    $.__views.window1 = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId0,
        id: "window1"
    });
    $.__views.window1 && $.addTopLevelView($.__views.window1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.window1.open();
    $.search.addEventListener("click", getPictures);
    $.testing.addEventListener("click", openParkDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;