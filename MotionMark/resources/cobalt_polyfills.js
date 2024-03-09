
console.log("mo cobalt mo problem");

NodeList.prototype.forEach = function() {
    // Implementation of your custom method
    console.log("Hwat")
};

if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

if (false) {
if (!("querySelectorAll" in document)) {
    console.log("Cobalt problems");
    throw "Foo";
} else {
    console.log(document.querySelectorAll(".version"));
    document.querySelectorAll(".version").forEach(function(e) {
        e.textContent = Strings.version;
    });
    console.log("basics")
}

var fake_form = function() {
    return {
        "addEventListener": function() {},
        "elements" : []
    }
}

if (!("forms" in document)) {
    console.log("Got no forms");
    document.forms = { 
        "benchmark-options" : new fake_form(),
        "graph-type" : new fake_form() ,
        "time-graph-options" : new fake_form() ,
        "complexity-graph-options" : new fake_form() 
    }
}
}