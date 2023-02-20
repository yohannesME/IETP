console.log('hello')
const tempretureData = () => {
  return [0,0,0,0,0]
}

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const cssColors = (color) => {
  return getComputedStyle(document.documentElement).getPropertyValue(color)
}

const getColor = () => {
  return 'green'
}

const colors = {
  primary: cssColors(`--color-${getColor()}`),
  primaryLight: cssColors(`--color-${getColor()}-light`),
  primaryLighter: cssColors(`--color-${getColor()}-lighter`),
  primaryDark: cssColors(`--color-${getColor()}-dark`),
  primaryDarker: cssColors(`--color-${getColor()}-darker`),
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const activeTempretureChart = new Chart(document.getElementById('activeTempretureChart'), {
  type: 'bar',
  data: {
    labels: [...tempretureData(), ...tempretureData()],

    datasets: [
      {
        data: [...tempretureData(), ...tempretureData()],
        backgroundColor: colors.primary,
        borderWidth: 0,
        categoryPercentage: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: false,
        },
      ],
      xAxes: [
        {
          display: false,
          gridLines: false,
        },
      ],
      ticks: {
        padding: 10,
      },
    },
    cornerRadius: 2,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      prefix: 'Users',
      bodySpacing: 4,
      footerSpacing: 4,
      hasIndicator: true,
      mode: 'index',
      intersect: true,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  },
})
const activeMoisture1Chart = new Chart(document.getElementById('activeMoisture1Chart'), {
  type: 'bar',
  data: {
    labels: [...tempretureData(), ...tempretureData()],

    datasets: [
      {
        data: [...tempretureData(), ...tempretureData()],
        backgroundColor: colors.primary,
        borderWidth: 0,
        categoryPercentage: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: false,
        },
      ],
      xAxes: [
        {
          display: false,
          gridLines: false,
        },
      ],
      ticks: {
        padding: 10,
      },
    },
    cornerRadius: 2,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      prefix: 'Users',
      bodySpacing: 4,
      footerSpacing: 4,
      hasIndicator: true,
      mode: 'index',
      intersect: true,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  },
})
const activeMoisture2Chart = new Chart(document.getElementById('activeMoisture2Chart'), {
  type: 'bar',
  data: {
    labels: [...tempretureData(), ...tempretureData()],

    datasets: [
      {
        data: [...tempretureData(), ...tempretureData()],
        backgroundColor: colors.primary,
        borderWidth: 0,
        categoryPercentage: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: false,
        },
      ],
      xAxes: [
        {
          display: false,
          gridLines: false,
        },
      ],
      ticks: {
        padding: 10,
      },
    },
    cornerRadius: 2,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      prefix: 'Users',
      bodySpacing: 4,
      footerSpacing: 4,
      hasIndicator: true,
      mode: 'index',
      intersect: true,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  },
})
const activeHumidityChart = new Chart(document.getElementById('activeHumidityChart'), {
  type: 'bar',
  data: {
    labels: [...tempretureData(), ...tempretureData()],

    datasets: [
      {
        data: [...tempretureData(), ...tempretureData()],
        backgroundColor: colors.primary,
        borderWidth: 0,
        categoryPercentage: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: false,
        },
      ],
      xAxes: [
        {
          display: false,
          gridLines: false,
        },
      ],
      ticks: {
        padding: 10,
      },
    },
    cornerRadius: 2,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      prefix: 'Users',
      bodySpacing: 4,
      footerSpacing: 4,
      hasIndicator: true,
      mode: 'index',
      intersect: true,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  },
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const tempreturelineChart = new Chart(document.getElementById('tempreturelineChart'), {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        fill: false,
        borderColor: colors.primary,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: false,
          ticks: {
            beginAtZero: false,
            stepSize: 50,
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 20,
          },
        },
      ],
      xAxes: [
        {
          gridLines: false,
        },
      ],
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      hasIndicator: true,
      intersect: false,
    },
  },
})

const humiditylineChart = new Chart(document.getElementById('humiditylineChart'), {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        fill: false,
        borderColor: colors.primary,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: false,
          ticks: {
            beginAtZero: false,
            stepSize: 50,
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 20,
          },
        },
      ],
      xAxes: [
        {
          gridLines: false,
        },
      ],
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      hasIndicator: true,
      intersect: false,
    },
  },
})

const moisture1lineChart = new Chart(document.getElementById('moisture1lineChart'), {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        fill: false,
        borderColor: colors.primary,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: false,
          ticks: {
            beginAtZero: false,
            stepSize: 50,
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 20,
          },
        },
      ],
      xAxes: [
        {
          gridLines: false,
        },
      ],
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      hasIndicator: true,
      intersect: false,
    },
  },
})

const moisture2lineChart = new Chart(document.getElementById('moisture2lineChart'), {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        fill: false,
        borderColor: colors.primary,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: false,
          ticks: {
            beginAtZero: false,
            stepSize: 50,
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 20,
          },
        },
      ],
      xAxes: [
        {
          gridLines: false,
        },
      ],
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      hasIndicator: true,
      intersect: false,
    },
  },
})

//////////////////////////////////////////

const currentTemp = document.getElementById('currentTemp')
const currentmoisture1 = document.getElementById('currentMoisture1')
const currentmoisture2 = document.getElementById('currentMoisture2')
const currenthumidity = document.getElementById('currentHumidity')

/////////////////////////////////////////////////////////////
const rtMoisture1 = document.getElementById('rtMoisture1')
const rtMoisture2 = document.getElementById('rtMoisture2')
const rtTempreture = document.getElementById('rtTempreture')
const rtHumidity = document.getElementById('rtHumidity')

///////////////////////////////////
const iswatering = document.getElementById('isWatering');

function startLiveUpdate() {
  setInterval(function () {

    fetch('http://localhost:3000/data', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then(function (data) {
        //every 10 second update the data
        tempData = []
        humidityData = []
        moisture1Data = []
        moisture2Data = []
        timeStamp = []

        for (let i = 0; i < data.length; i++) {
          tempData.push(data[i].temperature)
          humidityData.push(data[i].humidity)
          moisture1Data.push(data[i].moisture1)
          moisture2Data.push(data[i].moisture2)
          timeStamp.push(new Date(Date.parse(data[i].reading_time)).toLocaleTimeString())
        }

        updateData(tempData, activeTempretureChart, currentTemp, tempreturelineChart, timeStamp, rtTempreture)
        updateData(humidityData, activeHumidityChart, currenthumidity, humiditylineChart, timeStamp, rtHumidity)
        updateData(moisture1Data, activeMoisture1Chart, currentmoisture1, moisture1lineChart, timeStamp, rtMoisture1)
        updateData(moisture2Data, activeMoisture2Chart, currentmoisture2, moisture2lineChart, timeStamp, rtMoisture2)

      })
      .catch(function (error) {
        console.log(error)
      })


    fetch('http://localhost:3000/lastWater', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then(function (data) {
        //every 10 second update the data
        iswatering.innerText = new Date(Date.parse(data[0].watering_time)).toLocaleString('en-us')
      })
      .catch(function (error) {
        console.log(error)
      })

      
  }, 3000)



}

function updateData(data, activeChart, currentData, lineChart, timeStamp, realTime) {
  //activeChart
  if (activeChart.data.datasets[0].length == 0) {
    temp = data
    activeChart.data.labels = [...temp, ...temp]
    activeChart.data.datasets[0].data = [...temp, ...temp]
  } else {
    activeChart.data.datasets[0].data.push(data[0])
    activeChart.data.datasets[0].data.splice(0, 1)
    activeChart.update()
    //currentData
    console.log(data[0], data, 'here')
    currentData.innerText = data[0]
    realTime.innerText = data[0]
  }

  //set the line chart
  lineChart.data.labels = timeStamp
  lineChart.data.datasets[0].data = activeChart.data.datasets[0].data
  lineChart.update()
  console.log(timeStamp, activeChart.data.datasets[0].data)
}

//start the Loading of the data
document.addEventListener('DOMContentLoaded', (e) => {
  startLiveUpdate()

})
