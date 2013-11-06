// A function for cycling through arrays.
// Example usage:
//
// [1,2,3].each(function(key, value) {
//   console.log(key, value)
// })

Array.prototype.each = function(callback){
  for(i = 0; i < this.length; i++){
    callback(i, this[i]);
  }
}

// Similar to the above but for objects:
// Example usage:
//
// {name: 'Andy', age: 999}.each(function(key, value) {
//   console.log("%s: %s", key, value) #=> name: Andy / age: 999
// })

Object.prototype.each = function(callback){
  Object.keys(this).each(function(i,v) {
    callback(i,this[v])
  })
}

// Easy DOM selection.
// Example usage: $('body')

var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;

// Returns the type of a variable.
// Example usage:
//
// type([])      #=> array
// type({})      #=> object
// type('hello') #=> string

var type = function (o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}