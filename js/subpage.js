function openViewer(){
    /*点击图片显示视窗*/
    document.getElementById('viewer').style.display = "inline-flex";
    /*隐藏滚动条当视窗打开时*/
    document.body.style.overflow = "hidden";
}
// function closeViewer()
function closeViewer(){
    /*点击图片显示视窗*/
    document.getElementById('viewer').style.display = "none";
    /*隐藏滚动条当视窗打开时*/
    document.body.style.overflow = "auto";
}
/*切换图片*/
function changeImg(n){
    showImg(slideIndex += n)
}
/*显示点击的缩略图*/
function curentImg(n){
    showImg(slideIndex = n)
}
function showImg(n){
    /*获取类别为.imgslide的所有元素*/
    let slide = document.getElementsByClassName("imgslide")
    /*如果slideIndex大于图片的总数，打开第一张图片*/
    if (n > slide.length){
        slideIndex = 1;
    }
    /*如果slideIndex小于1，打开最后一张图片*/
    if (n<1){slideIndex = slide.length;}
    /*隐藏所有图片*/
    for (i=0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    /*显示图片*/
    slide[slideIndex - 1].style.display = "flex";
    /*显示图片序号*/
    document.getElementById("numtext").innerHTML = slide[slideIndex - 1].getAttribute("data-numtext"); 
    /*显示图片标题*/
    let imgTitle = document.getElementsByClassName("desc")
    document.getElementById("caption").innerHTML=imgTitle[slideIndex - 1].innerHTML;
}