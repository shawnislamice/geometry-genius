function get_value(value_id) {
  const get_input = document.getElementById(value_id).value;
  const value = parseFloat(get_input);
  if(get_input<0){
    return alert("Value can not be negative number")
  }
  if(get_input===""){
    return alert("Value can not be empty")
  }
  return value;
}

function show_area(getArea,areaId) {
  const area_selector = document.getElementById(areaId);
  if(getArea<0){
    area_selector.innerText="Undefined"
  }else{
    area_selector.innerText = getArea;
  }
  
}
///Triangle starts here
document
.getElementById("calculate-btn-triangle")
.addEventListener("click", function () {
    console.log("Connected");
    const base = get_value("triangle-base");
    const height = get_value("triangle-height");
    const triangleArea = 0.5 * base * height;
    console.log(triangleArea);
    const area=show_area(triangleArea,'area');
});
///Triangle ends here


// Rectangle starts here

document.getElementById("calculate-btn-rectangle").addEventListener('click',function(){
    const width = get_value("rectangle-width");
    const height = get_value("rectangle-height");
    const rectangleArea=width*height
    const area=show_area(rectangleArea,'rectangle-area')
})
// Rectangle ends here

// parallelogram starts here
document.getElementById("calculate-btn-parallelogram").addEventListener('click',function(){
    const base = get_value("parallelogram-base");
    const height = get_value("parallelogram-height");
    const parallelogramArea=base*height
    const area=show_area(parallelogramArea,'parallelogram-area')
}) 
// parallelogram ends here 
//Rhombus starts here
document.getElementById("calculate-btn-rhombus").addEventListener('click',function(){
    const d1 = get_value("rhombus-d1");
    const d2 = get_value("rhombus-d2");
    const area=0.5*d1*d2
    const area2=show_area(area,'rhombus-area')
})
//Rhombus ends here

//pentagon starts here
document.getElementById("calculate-btn-pentagon").addEventListener('click',function(){
    const p = get_value("pentagon-p");
    const b = get_value("pentagon-b");
    const area=0.5*p*b
    const area2=show_area(area,'pentagon-area')
})
//pentagon ends here

//Ellipse starts here
document.getElementById("calculate-btn-ellipse").addEventListener('click',function(){
    const a = get_value("ellipse-a");
    const b = get_value("ellipse-b");
    const pi=Math.PI
    const area=pi*a*b
    const area3=area.toFixed(3)
    const area2=show_area(area3,'ellipse-area')
})
//Ellipse ends here
