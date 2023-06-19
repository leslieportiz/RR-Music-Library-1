"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
function SearchBar(props) {
    var _a = react_2.useState(''), searchTerm = _a[0], setSearchTerm = _a[1];
    return (react_1["default"].createElement("form", { onSubmit: function (e) { return props.handleSearch(e, searchTerm); } },
        react_1["default"].createElement("input", { type: "text", placeholder: "Search Here", onChange: function (e) { return setSearchTerm(e.target.value); } }),
        react_1["default"].createElement("input", { type: "submit" })));
}
exports["default"] = SearchBar;

//# sourceMappingURL=SearchBar.js.map
