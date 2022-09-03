

var city=document.querySelector('.city')
// var answer=document.querySelector('.ans')

document.querySelector(".submit").onclick=function(){
    console.log("hello");

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=da946db0a60d43006efb79443480dc9e`

fetch(url)
.then(response=>response.json())
.then(data=>{
    console.log(data)
    console.log(data.main.temp)
    document.querySelector('.fcity').innerHTML=`Location:${data.name}`
    document.querySelector('.fcountry').innerHTML=`${data.sys.country}`
    document.querySelector('.ftemperature').innerHTML=`${data.main.temp}°C`

    let temp=data.main.temp;
    if(temp>=35)
    {
        document.querySelector('.hot').innerHTML=`HOT!`
        console.log("hot")
    }

    else if(temp>20 && temp<35)
    {
        document.querySelector('.mod').innerHTML=`Moderate`
        console.log("mod")
    }

    else
    {
        document.querySelector('.cold').innerHTML=`COLD!`
        console.log("cold")
    }






})
.catch(error=>console.log("wrong"))










}



