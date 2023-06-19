"use strict";
exports.__esModule = true;
var react_1 = require("react");
var GalleryItem_1 = require("./GalleryItem");
function Gallery(props) {
    var display = props.data.map(function (item, index) {
        return (react_1["default"].createElement(GalleryItem_1["default"], { item: item, key: index }));
    });
    return (react_1["default"].createElement("div", null, display));
}
exports["default"] = Gallery;

//# sourceMappingURL=Gallery.js.map
