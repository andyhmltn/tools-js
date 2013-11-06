//Object/Array each methods
Array.prototype.each = function(callback){for(i = 0; i < this.length; i++){callback(i, this[i]);}}
Object.prototype.each = function(callback){Object.keys(this).each(function(i,v) { callback(i,this[v]) })}

//jQuery-esque selector/bindings
var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;

var type = function (o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}