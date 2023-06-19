"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
function GalleryItem(props) {
    var _a = react_2.useState(false), view = _a[0], setView = _a[1];
    var simpleView = function () {
        return (react_1["default"].createElement("div", { style: {
                'width': '25vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin': '2px',
                'position': 'relative'
            } },
            react_1["default"].createElement("h3", null, props.item.trackName),
            react_1["default"].createElement("h4", null, props.item.collectionName)));
    };
    var detailView = function () {
        return (react_1["default"].createElement("div", { style: {
                'width': '80vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin': '2px',
                'position': 'relative',
                'backgroundImage': "url(" + props.item.artworkUrl100 + ")",
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': 'cover',
                'color': 'white'
            } },
            react_1["default"].createElement("h2", null, props.item.trackName),
            react_1["default"].createElement("h3", null, props.item.collectionName),
            react_1["default"].createElement("h4", null, props.item.primaryGenreName),
            react_1["default"].createElement("h4", null, props.item.releaseDate)));
    };
    return (react_1["default"].createElement("div", { onClick: function () { return setView(!view); }, style: { 'display': 'inline-block' } }, view ? detailView() : simpleView()));
}
exports["default"] = GalleryItem;

//# sourceMappingURL=GalleryItem.js.map
