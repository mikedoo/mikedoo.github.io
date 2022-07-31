//实现导航链接文字跟随滚动变化
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".catalog ul li a");
window.addEventListener("scroll",function(){
    let current ="";
    sections.forEach(function(section){
        const sectionTop =section.offsetTop - 300;
        const sectionHeight =section.clientHeight;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id")
        }
    })
    navLi.forEach(function(li){
        li.classList.remove("active");
        if(li.classList.contains(current)){
            li.classList.add("active")
        }
    })
})
//为指定链接添加target="_blank"属性
window.onload = function(){
    var anchors = document.querySelectorAll(".image a");
    for (var i=0; i<anchors.length; i++){
      anchors[i].setAttribute('target', '_blank');
    }
  }