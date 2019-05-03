class Rectangles {
  constructor(el){
    this.el = el;
  }

  // prevents show multiple messages
  prevent_default(){
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  // adds event to every data
  add_listener(data, event){
    let elements = Array.from(document.querySelectorAll(data));
    elements.map(element => (
      element.addEventListener("click", function(){
        event(this);
      })
    ));
  }

  show_name(div){
    new Rectangles().prevent_default();
    let name = div.getElementsByClassName("title")[0].innerText;
    alert(name);
  }

  // default behavior
  render(){
    this.add_listener("[data-behavior='show_name']", new Rectangles().show_name);
  }
}

// loads default when document is ready
document.addEventListener("DOMContentLoaded", function(event) {
  new Rectangles().render();
});
