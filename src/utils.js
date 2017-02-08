var trim = function(str) {
    // Cut off BOM and non-breakable space
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}

var startsWith = function(str, searchString, position) {
    position = position || 0;
    return str.lastIndexOf(searchString, position) === position;
} 

module.exports.trim = trim;
module.exports.startsWith = startsWith;