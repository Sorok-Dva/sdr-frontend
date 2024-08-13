import '../../../styles/Charts.css'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Button, ButtonGroup, Container } from 'reactstrap'
import {
  CategoryScale,
  Chart as ChartJS, ChartData, ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
  TooltipItem,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale)

const fetchReportData = async (timeframe : string) => {
  const token = localStorage.getItem('token')
  const response = await fetch(`/api/admin/charts/reports?timeframe=${ timeframe }`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ token }`,
    },
  })
  const data = await response.json()
  return data
}

const UserGrowthChart : React.FC = () => {
  const [timeframe, setTimeframe] = useState<'day' | 'week' | 'month' | 'year'>('day')
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: [
      {
        label: 'Reports created',
        data: [],
        borderColor: '#5e72e4',
        backgroundColor: 'rgba(94, 114, 228, 0.1)',
        pointBackgroundColor: '#5e72e4',
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  })
 
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchReportData(timeframe)
      const labels = data.map((item : any) => item.date)
      const reportCounts = data.map((item : any) => item.count)
   
      setChartData({
        labels,
        datasets: [
          {
            label: 'Report created',
            data: reportCounts,
            borderColor: '#5e72e4',
            backgroundColor: 'rgba(94, 114, 228, 0.1)',
            pointBackgroundColor: '#5e72e4',
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      })
    }
  
    loadData()
  }, [timeframe])
 
  const options : ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem : TooltipItem<'line'>) => {
            // Safely extract the raw value
            const value = tooltipItem.raw as number
            return `${ value } reports`
          },
        },
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleFont: { family: 'Open Sans', weight: 'bold', size: 14 },
        bodyFont: { family: 'Open Sans', size: 12 },
        padding: 10,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false,
          maxTicksLimit: chartData.labels?.length || 0, // Use optional chaining and default value
          color: '#adb5bd',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          stepSize: 1,
          callback: function (value : string | number) : string {
            if (typeof value === 'number') {
              return `${ value }`
            }
            return value
          },
          color: '#adb5bd',
        },
      },
    },
  }
 
  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white">Reports Growth</h2>
        <ButtonGroup>
          <Button color="primary" onClick={ () => setTimeframe('day') } active={ timeframe === 'day' }>
            Day
          </Button>
          <Button color="primary" onClick={ () => setTimeframe('week') } active={ timeframe === 'week' }>
            Week
          </Button>
          <Button color="primary" onClick={ () => setTimeframe('month') } active={ timeframe === 'month' }>
            Month
          </Button>
          <Button color="primary" onClick={ () => setTimeframe('year') } active={ timeframe === 'year' }>
            Year
          </Button>
        </ButtonGroup>
      </div>
      <div style={ { height: '400px', backgroundColor: '#172b4d', borderRadius: '8px', padding: '16px' } }>
        <Line data={ chartData } options={ options }/>
      </div>
    </Container>
  )
}

export default UserGrowthChart
