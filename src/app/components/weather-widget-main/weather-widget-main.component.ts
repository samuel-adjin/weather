
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {
  weatherData:any;
  cities: any[] =['London','Paris','Accra']
  city= 'Accra'
  constructor() { }

  ngOnInit(): void {
    
    this.getWeatherData();
    console.log(this.weatherData);
    // console.log(this.display());
    
  }

  setWeatherData(data: any){
    this.weatherData = data;
    this.weatherData.temp = (this.weatherData.main.temp -273).toFixed(0);
    this.weatherData.city = this.weatherData.name;
    this.weatherData.humidity = this.weatherData.main.humidity;
  }

  getWeatherData(){
    // let data = JSON.parse('{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":284.81,"feels_like":283.15,"temp_min":283.15,"temp_max":285.37,"pressure":1015,"humidity":43},"visibility":10000,"wind":{"speed":2.06,"deg":0},"clouds":{"all":75},"dt":1619782155,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1619757233,"sunset":1619810479},"timezone":3600,"id":2643743,"name":"London","cod":200}')
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=3f5710f7a7a9c6eea2a9beb980833c3d')
    .then(response=> response.json())
    .then(data=>
      this.setWeatherData(data)
    )
    
  }



  // display():any{
  //   let cities: any[] =['London','Paris','Accra']
  // let cityName:any='London';
  // let interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?
  // this.cities.forEach(function (el, index) {
  //   setTimeout(function () {
  //     cityName = el;
  //     console.log(cityName)
  //   }, index * interval);
  // });
  // return cityName;
   }  
  // }
  
