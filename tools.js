Array.prototype.each = function(callback){for(i = 0; i < this.length; i++){callback(i, this[i]);}}
Object.prototype.each = function(callback){Object.keys(this).each(function(i,v) { callback(i,this[v]) })}

var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;