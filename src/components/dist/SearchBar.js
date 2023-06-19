"use strict";
exports.__esModule = true;
// import React from 'react'
var react_1 = require("react");
function SearchBar(props) {
    var _a = react_1.useState(''), searchTerm = _a[0], setSearchTerm = _a[1];
    return (React.createElement("form", { onSubmit: function (e) { return props.handleSearch(e, searchTerm); } },
        React.createElement("input", { type: "text", placeholder: "Search Here", onChange: function (e) { return setSearchTerm(e.target.value); } }),
        React.createElement("input", { type: "submit" })));
}
exports["default"] = SearchBar;

//# sourceMappingURL=SearchBar.js.map
