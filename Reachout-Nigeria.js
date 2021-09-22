//prompt("how are you")


/*navigator.geolocation
  

  navigator.geolocation.getCurrentPosition(console.log, console.log);
  var sucessfullLookup = (position) => {
      var { latitude, longitude } = position.coords;
      fetch('https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=9fc29c322c07447b9ae2c4f2085d3ccb')
      .then(response = response.json())
      .then(console.log);
  };*/
/* 
  var div =document.getElementById("location");
  function getlocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition,  showError, console.log);
      }else{
          div.innerHTML="The Browser Does not Support Geolocation";
      }
  }


  function showPosition(position) {
    div.innerHTML="Latitude:"+position.coords.latitude+"<br>Longitude:"+position.coords.longitude;
  }


   function showError(error) {
      if (error.PERMISSION_DENIED) {
          div.innerHTML="The User have denied the request for Geolocation.";
      }
  } 

  function showPosition(position) {
    var lat=position.coords.latitude;
    var lon=position.coords.longitude;
   // var api_key="9fc29c322c07447b9ae2c4f2085d3ccb";
   // var img_url="https://api.opencagedata.com/geocode/v1/json?q=51.952659%2C%207.632473&key=9fc29c322c07447b9ae2c4f2085d3ccb&language=en&pretty=1";
  //  div.innerHTML='<img src="${https://api.opencagedata.com/geocode/v1/json?q=51.952659%2C%207.632473&key=9fc29c322c07447b9ae2c4f2085d3ccb&language=en&pretty=1}">';
  }
  getlocation(); */


  if ('geolocation' in navigator) {
      console.log('geolocation available');
      navigator.geolocation.getCurrentPosition(position =>{
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          document.getElementById('latitude').textContent= lat;
          document.getElementById('longitude').textContent= lon;
          document.getElementById('Api-key').innerHTML="9fc29c322c07447b9ae2c4f2085d3ccb";
          //console.log(position);
      })
  }else {
      console.log('geolocation not available');
  }