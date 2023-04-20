url = 'http://127.0.0.1:5000/api/v1.0/data'
// d3.json(url).then(function(data) {
    
// var borough = data.BOROUGH
// var lat = data.LATITUDE
// var lon = data.LONGITUDE
// var personInjured = data['PERSONS INJURED']
// var personKilled = data['PERSONS KILLED']
// var contributingFactor = data['CONTRIBUTING FACTOR']
// var vehicleType = data['VEHICLE TYPE']
// let url = "../../Resources/CleanData.csv";

// set the dimensions and margins of the graph

let data = {};
let boroughList = [];
let boroughSelect = d3.select("#boroughSelect");



data_api=[]
// Parse the Data


// create an accumulator for the boroughs

var BROOKLYN =0
var BRONX =0
var MANHATTAN = 0
var QUEENS = 0
var STATENISLAND = 0


var BROOKLYN1 =0
var BRONX1 =0
var MANHATTAN1 = 0
var QUEENS1 = 0
var STATENISLAND1 = 0
d3.json(url, function (generalData) {
    console.log(generalData);
    data_api=generalData
  // selecting the boroughs from generalData
  generalData.BOROUGH.forEach((d) => {
    if (!boroughList.includes(d.BOROUGH)) {
      boroughList.push(d.BOROUGH);
    }
  });

  // adding the borough
  boroughList.forEach((b) => {
    boroughSelect.append("option").attr("value", b).text(b);
  });

  data["BOROUGH"] = generalData.BOROUGH;
  data["PERSONS_KILLED"] = generalData["PERSONS KILLED"];
  data["PERSONS_INJURED"] = generalData["PERSONS INJURED"];


data_api=[]
// Parse the Data
d3.json(url, function (generalData) {
  console.log(generalData);
  data_api=generalData
  // var borough =data_api.BOROUGH

  for(var i = 0; i<data_api.BOROUGH.length; i++){
    if(data_api.BOROUGH[i]==='BROOKLYN'){
      BROOKLYN = BROOKLYN+ parseFloat(data_api["PERSONS INJURED"][i])
    }
    else if(data_api.BOROUGH[i] ==='BRONX'){
      BRONX = BRONX+parseFloat(data_api["PERSONS INJURED"][i])
    }
    else if ( data_api.BOROUGH[i] ==='MANHATTAN') {
      MANHATTAN = MANHATTAN+parseFloat(data_api["PERSONS INJURED"][i])
    }
    else if (data_api.BOROUGH[i] ==='QUEENS'){
      QUEENS = QUEENS+parseFloat(data_api["PERSONS INJURED"][i])
    }
    else {STATENISLAND= STATENISLAND +parseFloat(data_api["PERSONS INJURED"][i])
    }
  }

var plotly_data = [
  {
    x: ['BROOKLYN', 'BRONX', 'MANHATTAN','QUEENS','STATENISLAND'],
    y: [BROOKLYN, BRONX, MANHATTAN, QUEENS, STATENISLAND],
    name: 'PERSONS INJURED',
    type: 'bar'
  }   
];

var layout = {
    xaxis: {title:{text:'Boroughs'}},
    yaxis: {title:{text:'Persons Injured'}},}

Plotly.newPlot('mydivplotly', plotly_data, layout);






for(var i = 0; i<data_api.BOROUGH.length; i++){
  if(data_api.BOROUGH[i]==='BROOKLYN'){
    BROOKLYN1 = BROOKLYN1+ parseFloat(data_api["PERSONS KILLED"][i])
  }
  else if(data_api.BOROUGH[i] ==='BRONX'){
    BRONX1 = BRONX1+parseFloat(data_api["PERSONS KILLED"][i])
  }
  else if ( data_api.BOROUGH[i] ==='MANHATTAN') {
    MANHATTAN1 = MANHATTAN1+parseFloat(data_api["PERSONS KILLED"][i])
  }
  else if (data_api.BOROUGH[i] ==='QUEENS'){
    QUEENS1 = QUEENS1+parseFloat(data_api["PERSONS KILLED"][i])
  }
  else {STATENISLAND1= STATENISLAND1 +parseFloat(data_api["PERSONS KILLED"][i])
  }
}


var plotly_data1 = [
  {
    x: ['BROOKLYN', 'BRONX', 'MANHATTAN','QUEENS','STATENISLAND'],
    y: [BROOKLYN1, BRONX1, MANHATTAN1, QUEENS1, STATENISLAND1],
    name: 'PERSONS KILLED',
    type: 'bar'
  }   
];

var layout1 = {
    xaxis: {title:{text:'Boroughs'}},
    yaxis: {title:{text:'Persons Killed'}},}

Plotly.newPlot('mydivplotly1', plotly_data1, layout1);

  // Pie Chart using Highcharts
  Highcharts.chart("container1", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Vehicle Crashes Per Borough",
      align: "center",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Vehicle Crashes Per Borough",
        colorByPoint: true,
        data: [
          {
            name: "Bronx",
            y: 7585,
          },
          {
            name: "Brooklyn",
            y: 14450,
          },
          {
            name: "Manhattan",
            y: 7257,
          },
          {
            name: "Queens",
            y: 11293,
          },
          {
            name: "Staten Island",
            y: 1666,
          },
        ],
      },
    ],
  });

  // Bar Chart using Highcharts
  Highcharts.chart("container3", {
    chart: {
      type: "column",
    },
    title: {
      text: "Contributing Factors to Crashes in NY",
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -90,
        style: {
          fontSize: "14px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of Crashes in 2022",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Number of Crashes in 2022: <b>{point.y}</b>",
    },
    series: [
      {
        name: "Contributing Factor",
        data: [
          ["Accelerator Defective", 30],
          ["Aggressive Driving/Road Rage", 279],
          ["Alcohol Involvement", 779],
          ["Animals Action", 25],
          ["Backing Unsafely", 1602],
          ["Brakes Defective", 179],
          ["Cell Phone", 23],
          ["Driver Inattention/Distraction", 10422],
          ["Driver Inexperience", 725],
          ["Driverless/Runaway Vehicle", 53],
          ["Drugs", 37],
          ["Eating or Drinking", 5],
          ["Failure to Keep Right", 52],
          ["Failure to Yield Right of Way", 3128],
          ["Fatigued/Drowsy", 42],
          ["Fell Asleep", 203],
          ["Following Too Closely", 1857],
          ["Glare", 62],
          ["Headlights Defective", 2],
          ["Illness", 60],
          ["Lane Marking Improper", 12],
          ["Listening/Using Headphones", 3],
          ["Lost Consciousness", 73],
          ["Obstruction/Debris", 74],
          ["Other Electronic Device", 5],
          ["Other Lighting Defects", 5],
          ["Other Vehicular", 1050],
          ["Outside Car Distraction", 92],
          ["Oversized Vehicle", 180],
          ["Passenger Distraction", 125],
          ["Passing or Lane Usage Improper", 1853],
          ["Passing Too Closely", 1735],
          ["Pavement Defective", 51],
          ["Pavement Slippery", 291],
          ["Pedestrian/Bicyclist/Other Pedestrian Error/Confusion", 446],
          ["Physical Disability", 29],
          ["Prescription Medication", 8],
          ["Reaction to Uninvolved Vehicle", 386],
          ["Steering Failure", 94],
          ["Texting", 1],
          ["Tinted Windows", 4],
          ["Tire Failure/Inadequate", 35],
          ["Tow Hitch Defective", 6],
          ["Traffic Control Device Improper/Non-Working", 23],
          ["Traffic Control Disregarded", 1257],
          ["Turning Improperly", 1067],
          ["Unsafe Lane Changing", 555],
          ["Unsafe Speed", 1244],
          ["Using On Board Navigation Device", 3],
          ["Vehicle Vandalism", 6],
          ["View Obstructed/Limited", 400],
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y}",
          y: -20,
          style: {
            fontSize: "14px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });

  // Bar Chart 2 using Highcharts
  Highcharts.chart("container2", {
    chart: {
      type: "column",
    },
    title: {
      text: "Crashes per Vehicle Type in NY",
    },
    xAxis: {
      type: "category",
      title: {
        text: "Vehicle Type",
      },
      labels: {
        rotation: -90,
        style: {
          fontSize: "14px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Amount of Crashes in 2022",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Population in 2021: <b>{point.y}</b>",
    },
    series: [
      {
        name: "Population",
        data: [
          ["Ambulance", 345],
          ["3-Door", 19],
          ["Beverage Truck", 4],
          ["Concrete Mixer", 15],
          ["Convertable", 83],
          ["Garbage Truck", 92],
          ["Motor Bike", 27],
          ["School Bus", 8],
          ["Scooter", 11],
          ["Snow Plow", 12],
          ["Ambulance", 10],
          ["Ambulance", 10],
          ["Armored Truck", 13],
          ["Bike", 713],
          ["Box Truck", 9],
          ["Bus", 760],
          ["Dump Truck", 133],
          ["E-Bike", 396],
          ["E-Scooter", 259],
          ["Fire Truck", 27],
          ["Flat Rack", 57],
          ["Freight Truck", 3],
          ["Moped", 134],
          ["Motorcycle", 347],
          ["Pickup Truck", 860],
          ["Sedan", 20310],
          ["Station Wagon/Sport Utility Vehicle", 14758],
          ["Taxi", 1111],
          ["Tow Truck", 45],
          ["Tractor Truck", 278],
          ["Van", 245],
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "14px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
  // Pie Chart 2 using Highcharts
  Highcharts.chart("container4", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Vehicle Crashes Per Month",
      align: "center",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Vehicle Crashes Per Month",
        colorByPoint: true,
        data: [
          {
            name: "January",
            y: 4783,
          },
          {
            name: "February",
            y: 4457,
          },
          {
            name: "March",
            y: 5568,
          },
          {
            name: "April",
            y: 4902,
          },
          {
            name: "May",
            y: 5338,
          },
          {
            name: "June",
            y: 5889,
          },
          {
            name: "July",
            y: 5579,
          },
          {
            name: "August",
            y: 5289,
          },
          {
            name: "September",
            y: 403,
          },
          {
            name: "October",
            y: 18,
          },
          {
            name: "November",
            y: 14,
          },
          {
            name: "December",
            y: 16,
          },
        ],
      },
    ],
  });
});

});