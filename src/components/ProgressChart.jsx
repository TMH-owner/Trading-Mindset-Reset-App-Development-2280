import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const ProgressChart = ({ timeRange, setTimeRange }) => {
  const getOption = () => {
    const data = {
      week: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        consistency: [75, 82, 78, 85, 88, 92, 87],
        emotional: [70, 76, 82, 88, 91, 95, 94],
        mindset: [65, 72, 78, 84, 87, 90, 91]
      },
      month: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        consistency: [78, 83, 87, 89],
        emotional: [75, 85, 91, 94],
        mindset: [70, 80, 87, 91]
      },
      year: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4'],
        consistency: [65, 75, 85, 89],
        emotional: [60, 78, 88, 94],
        mindset: [55, 70, 82, 91]
      }
    };

    const currentData = data[timeRange];

    return {
      title: {
        text: 'Trading Psychology Progress',
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#1f2937'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['Trading Consistency', 'Emotional Control', 'Mindset Score'],
        bottom: 0
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: currentData.categories
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: {
          formatter: '{value}%'
        }
      },
      series: [
        {
          name: 'Trading Consistency',
          type: 'line',
          smooth: true,
          data: currentData.consistency,
          itemStyle: {
            color: '#10b981'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(16, 185, 129, 0.3)' },
                { offset: 1, color: 'rgba(16, 185, 129, 0.1)' }
              ]
            }
          }
        },
        {
          name: 'Emotional Control',
          type: 'line',
          smooth: true,
          data: currentData.emotional,
          itemStyle: {
            color: '#3b82f6'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(59, 130, 246, 0.3)' },
                { offset: 1, color: 'rgba(59, 130, 246, 0.1)' }
              ]
            }
          }
        },
        {
          name: 'Mindset Score',
          type: 'line',
          smooth: true,
          data: currentData.mindset,
          itemStyle: {
            color: '#8b5cf6'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(139, 92, 246, 0.3)' },
                { offset: 1, color: 'rgba(139, 92, 246, 0.1)' }
              ]
            }
          }
        }
      ]
    };
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Progress Overview</h3>
        
        <div className="flex space-x-2">
          {['week', 'month', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                timeRange === range
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <ReactECharts
        option={getOption()}
        style={{ height: '400px' }}
        opts={{ renderer: 'canvas' }}
      />
    </div>
  );
};

export default ProgressChart;