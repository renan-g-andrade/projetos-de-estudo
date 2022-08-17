//-----------CRIPTOGRAFAR-----------------

const auto_resize = document.getElementById("entrada");
const auto_resize_2 = document.getElementById("resultado");

auto_resize.style.cssText = `height: ${auto_resize.scrollHeight}px; overfloy-y: hidden`;
auto_resize.addEventListener("input", function(){
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
})
auto_resize_2.style.cssText = `height: ${auto_resize_2.scrollHeight}px; overfloy-y: hidden`;
auto_resize_2.addEventListener("input", function(){
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
})