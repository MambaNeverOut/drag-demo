let div = document.createElement('div')

document.body.appendChild(div)

let dragging = false
let lastX
let lastY

div.onmousedown = function(e){
  lastX = e.clientX
  lastY = e.clientY
  dragging = true
  console.log(dragging);
}
document.body.onmousemove = function(e){
  if(dragging){
    console.log(lastX);
    console.log(lastY);
    let deltaX = e.clientX - lastX
    let deltaY = e.clientY - lastY
    console.log(`--${div.style.top}--`);
    let top = parseInt(div.style.top) || 0
    let left = parseInt(div.style.left) || 0
    // 防止div移除页面
    // let resultY = top + deltaY
    // let resultX = left + deltaX
    // if(resultY < 0){resultY =0}
    // if(resultX < 0){resultX =0}
    // div.style.top = resultY + 'px'  
    // div.style.left = resultX + 'px'
    // 使用div.style去获取元素的值只能得到内联样式的值，无法获取到style标签中的样式
    div.style.top = top + deltaY + 'px'  
    div.style.left = left + deltaX + 'px'
    lastX = e.clientX
    lastY = e.clientY
  }
}

document.body.onmouseup = function(){
  dragging = false
}
