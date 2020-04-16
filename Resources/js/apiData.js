    //Initialize map
if($('#map').length > 0)
{
        if ($('html').lang)
        {
            lang = $('html').lang;
        }
    
        else
        {
            lang = 'en';
        }

        var js_file = document.createElement('script');

        js_file.type = 'text/javascript';
        js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAtiDdQtqRc36itew22wJKasW_gPamhVuY&callback=initMap&language=' + lang;
        document.getElementsByTagName('head')[0].appendChild(js_file);
}  

function initMap()
{
    map_1();
    map_2();
    map_3()
}

var map1;
var map2;
var map3;

function map_1()
{
    const mapProp= { center: new google.maps.LatLng(55.8642, -4.2518), zoom: 14 };
    
    map1 = new google.maps.Map(document.getElementById("map"),mapProp);

    const marker = new google.maps.Marker({position:mapProp.center, animation:google.maps.Animation.BOUNCE});
      
    marker.setMap(map1);          
};

function map_2()
{
    const mapProp= { center: new google.maps.LatLng(-20.157890, 57.5012), zoom: 14 };
    
    map2 = new google.maps.Map(document.getElementById("map_2"),mapProp);

    const marker = new google.maps.Marker({position:mapProp.center, animation:google.maps.Animation.BOUNCE});
      
    marker.setMap(map2);        
};

function map_3()
{
    const mapProp = { center: new google.maps.LatLng(-1.286389, 36.817223), zoom: 14 };
    
    map3 = new google.maps.Map(document.getElementById("map_3"),mapProp);

    const marker = new google.maps.Marker({position:mapProp.center, animation:google.maps.Animation.BOUNCE});
      
    marker.setMap(map3);          
};


$(document).ready(function()
{
    //Call weather api to get weather data
    for(var i = 1; i < 4; i++)
    {
        getWeatherData(i, 1);
        getWeatherData(i, 2);
        getWeatherData(i, 3);
        getWeatherData(i, 4);
        getWeatherData(i, 5);
    }

    createGraph_1();
    createGraph_2();
    createGraph_3();

   async function getWeatherData(city ,day)
    {
            const url_1 = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/328226?apikey=oS152H6tFLAwJDF1RjHnDXIKr56AtTQs&language=en-us&details=false&metric=false";
            const url_2 = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/234826?apikey=oS152H6tFLAwJDF1RjHnDXIKr56AtTQs&language=en-us&details=false&metric=false";
            const url_3 = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/224758?apikey=oS152H6tFLAwJDF1RjHnDXIKr56AtTQs&language=en-us&details=false&metric=false";
            const index = day - 1;

            if(city == 1)
            {
                const response = await fetch(url_1);
                const data = await response.json();

                const date = data["DailyForecasts"][index]["Date"];
                const minTemp = data['DailyForecasts'][index]['Temperature']['Minimum']['Value'];
                const maxTemp = data['DailyForecasts'][index]['Temperature']['Maximum']['Value'];
                const weatherType = data['DailyForecasts'][index]['Day']['IconPhrase'];

                const dt = new Date(date);
                const fin = '"' + dt + '"';
                const getDate = document.getElementById('date_' + day);
                getDate.innerHTML = fin.substr(1, 10);

                const min = Math.floor((minTemp - 32) * 5/9);
                const getMin = document.getElementById('day_' + day + '_min');
                getMin.innerHTML = min + '&deg;';

                const max = Math.floor((maxTemp - 32) * 5/9);
                const getMax = document.getElementById('day_' + day + '_max');
                getMax.innerHTML = max + '&deg;';

                const getType = document.getElementById('weatherCondition_' + day);
                getType.innerHTML = weatherType;
            }
            else if(city == 2)
            {
                const response = await fetch(url_2);
                const data = await response.json();

                const date = data["DailyForecasts"][index]["Date"];
                const minTemp = data['DailyForecasts'][index]['Temperature']['Minimum']['Value'];
                const maxTemp = data['DailyForecasts'][index]['Temperature']['Maximum']['Value'];
                const weatherType = data['DailyForecasts'][index]['Day']['IconPhrase'];

                const dt = new Date(date);
                const fin = '"' + dt + '"';
                const getDate = document.getElementById('date_' + day +'_2');
                getDate.innerHTML = fin.substr(1, 10);

                const min = Math.floor((minTemp - 32) * 5/9);
                const getMin = document.getElementById('day_' + day + '_min_2');
                getMin.innerHTML = min + '&deg;';

                const max = Math.floor((maxTemp - 32) * 5/9);
                const getMax = document.getElementById('day_' + day + '_max_2');
                getMax.innerHTML = max + '&deg;';

                const getType = document.getElementById('weatherCondition_' + day + '_2');
                getType.innerHTML = weatherType;
            }
            else if(city == 3)
            {
                const response = await fetch(url_3);
                const data = await response.json();

                const date = data["DailyForecasts"][index]["Date"];
                const minTemp = data['DailyForecasts'][index]['Temperature']['Minimum']['Value'];
                const maxTemp = data['DailyForecasts'][index]['Temperature']['Maximum']['Value'];
                const weatherType = data['DailyForecasts'][index]['Day']['IconPhrase'];

                const dt = new Date(date);
                const fin = '"' + dt + '"';
                const getDate = document.getElementById('date_' + day + '_3');
                getDate.innerHTML = fin.substr(1, 10);

                const min = Math.floor((minTemp - 32) * 5/9);
                const getMin = document.getElementById('day_' + day + '_min_3');
                getMin.innerHTML = min + '&deg;';

                const max = Math.floor((maxTemp - 32) * 5/9);
                const getMax = document.getElementById('day_' + day + '_max_3');
                getMax.innerHTML = max + '&deg;';

                const getType = document.getElementById('weatherCondition_' + day + '_3');
                getType.innerHTML = weatherType;
            }
    }

    //Get city data from apis and display in graph
    async function getData(city)
    {
        const xaxis = [];
        const yaxix = [];
        const url_1 = "https://api.teleport.org/api/urban_areas/slug:glasgow/scores/";
        const url_2 = "https://api.teleport.org/api/urban_areas/slug:nairobi/scores/";
        const url_3 = "https://api.teleport.org/api/urban_areas/slug:nairobi/scores/";

        if(city == 1)
        {
            const response = await fetch(url_1);
            const data = await response.json();
            
            const economy = data['categories'][11]['score_out_of_10'];
            const econLabel = data['categories'][11]['name'];
            const safety = data['categories'][7]['score_out_of_10'];
            const safetyLabel = data['categories'][7]['name'];
            const education = data['categories'][9]['score_out_of_10'];
            const eduLabel = data['categories'][9]['name'];
            const tolerance = data['categories'][15]['score_out_of_10'];
            const toleLabel = data['categories'][15]['name'];
            const health = data['categories'][8]['score_out_of_10'];
            const healthLabel = data['categories'][8]['name'];
            const living = data['categories'][1]['score_out_of_10'];
            const livLabel = data['categories'][1]['name'];
            const overal = Math.floor(data['teleport_city_score']);

            document.getElementById('score_1').innerHTML = overal;

            xaxis.push(economy, living, safety, tolerance, health, education);
            yaxix.push(econLabel, livLabel, safetyLabel, toleLabel, healthLabel,eduLabel)
            return {xaxis, yaxix,};
        }
        else if(city == 2)
        {
            const response = await fetch(url_2);
            const data = await response.json();
            
            const economy = data['categories'][11]['score_out_of_10'];
            const econLabel = data['categories'][11]['name'];
            const safety = data['categories'][7]['score_out_of_10'];
            const safetyLabel = data['categories'][7]['name'];
            const education = data['categories'][9]['score_out_of_10'];
            const eduLabel = data['categories'][9]['name'];
            const tolerance = data['categories'][15]['score_out_of_10'];
            const toleLabel = data['categories'][15]['name'];
            const health = data['categories'][8]['score_out_of_10'];
            const healthLabel = data['categories'][8]['name'];
            const living = data['categories'][1]['score_out_of_10'];
            const livLabel = data['categories'][1]['name'];
            const overal = Math.floor(data['teleport_city_score']);

            document.getElementById('score_2').innerHTML = overal;

            xaxis.push(economy, living, safety, tolerance, health, education);
            yaxix.push(econLabel, livLabel, safetyLabel, toleLabel, healthLabel,eduLabel)
            return {xaxis, yaxix,};
        }
        else if(city == 3)
        {
            const response = await fetch(url_3);
            const data = await response.json();
            
            const economy = data['categories'][11]['score_out_of_10'];
            const econLabel = data['categories'][11]['name'];
            const safety = data['categories'][7]['score_out_of_10'];
            const safetyLabel = data['categories'][7]['name'];
            const education = data['categories'][9]['score_out_of_10'];
            const eduLabel = data['categories'][9]['name'];
            const tolerance = data['categories'][15]['score_out_of_10'];
            const toleLabel = data['categories'][15]['name'];
            const health = data['categories'][8]['score_out_of_10'];
            const healthLabel = data['categories'][8]['name'];
            const living = data['categories'][1]['score_out_of_10'];
            const livLabel = data['categories'][1]['name'];
            const overal = Math.floor(data['teleport_city_score']);

            document.getElementById('score_3').innerHTML = overal;

            xaxis.push(economy, living, safety, tolerance, health, education);
            yaxix.push(econLabel, livLabel, safetyLabel, toleLabel, healthLabel,eduLabel)
            return {xaxis, yaxix,};
        }
    }

    async function createGraph_1()
    {
        const data = await getData(1)

        const index_chart_1 = document.getElementById('indeces_g').getContext('2d');
        const myChart = new Chart(index_chart_1,
            {
                type: 'horizontalBar',
                data: 
                {
                    labels: data.yaxix,
                    datasets: [{
                        label: "Scores out of 10",
                        data: data.xaxis,
                        borderWidth: 0,
                        backgroundColor: 
                            [
                                'rgba(111, 116, 240, 0.7)',
                                'rgba(131, 96, 220, 0.7)',
                                'rgba(151, 76, 200, 0.7)',
                                'rgba(171, 56, 180, 0.7)',
                                'rgba(191, 36, 160, 0.7)',
                                'rgba(201, 16, 140, 0.7)'
                            ]
                    }]
                },

                options: 
                {
                    scales: {
                        yAxes: [{
                            gridLines: {
                                offsetGridLines: true
                            }
                        }]
                    }
                }
        });
    }

    async function createGraph_2()
    {
        const data = await getData(1)

        const index_chart_1 = document.getElementById('indeces_p').getContext('2d');
        const myChart = new Chart(index_chart_1,
            {
                type: 'horizontalBar',
                data: 
                {
                    labels: data.yaxix,
                    datasets: [{
                        label: "Scores out of 10",
                        data: data.xaxis,
                        borderWidth: 0, 
                        backgroundColor: 
                            [
                                'rgba(111, 116, 240, 0.7)',
                                'rgba(131, 96, 220, 0.7)',
                                'rgba(151, 76, 200, 0.7)',
                                'rgba(171, 56, 180, 0.7)',
                                'rgba(191, 36, 160, 0.7)',
                                'rgba(201, 16, 140, 0.7)'
                            ]
                    }]
                },

                options: 
                {
                    scales: {
                        xAxes: [{
                            gridLines: {
                                offsetGridLines: true
                            }
                        }]
                    }
                }
        });
    }

    async function createGraph_3()
    {
        const data = await getData(3)

        const index_chart_1 = document.getElementById('indeces_n').getContext('2d');
        const myChart = new Chart(index_chart_1,
            {
                type: 'horizontalBar',
                data: 
                {
                    labels: data.yaxix,
                    datasets: [{
                        label: "Scores out of 10",
                        data: data.xaxis,
                        borderWidth: 0,
                        backgroundColor: 
                            [
                                'rgba(111, 116, 240, 0.7)',
                                'rgba(131, 96, 220, 0.7)',
                                'rgba(151, 76, 200, 0.7)',
                                'rgba(171, 56, 180, 0.7)',
                                'rgba(191, 36, 160, 0.7)',
                                'rgba(201, 16, 140, 0.7)'
                            ]
                    }]
                },

                options: 
                {
                    scales: {
                        xAxes: [{
                            gridLines: {
                                offsetGridLines: true
                            }
                        }]
                    }
                }
        });
    }
});