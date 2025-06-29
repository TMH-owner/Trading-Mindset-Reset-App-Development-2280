import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBrain, FiHeart, FiTarget, FiZap } = FiIcons;

const MindsetMetrics = () => {
  const metrics = [
    { name: 'Fear Control', value: 92, icon: FiBrain, color: '#8b5cf6' },
    { name: 'Confidence', value: 88, icon: FiZap, color: '#f59e0b' },
    { name: 'Discipline', value: 95, icon: FiTarget, color: '#10b981' },
    { name: 'Patience', value: 85, icon: FiHeart, color: '#ef4444' }
  ];

  const getRadarOption = () => {
    return {
      title: {
        text: 'Mindset Assessment',
        left: 'center',
        textStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#1f2937'
        }
      },
      radar: {
        indicator: metrics.map(metric => ({
          name: metric.name,
          max: 100
        })),
        radius: '70%',
        splitArea: {
          areaStyle: {
            color: ['rgba(59, 130, 246, 0.1)', 'rgba(59, 130, 246, 0.05)']
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(59, 130, 246, 0.3)'
          }
        }
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: metrics.map(m => m.value),
              name: 'Current Level',
              itemStyle: {
                color: '#3b82f6'
              },
              areaStyle: {
                color: 'rgba(59, 130, 246, 0.3)'
              }
            }
          ]
        }
      ]
    };
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Mindset Metrics</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${metric.color}20` }}
                >
                  <SafeIcon 
                    icon={metric.icon} 
                    className="text-sm"
                    style={{ color: metric.color }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">{metric.name}</span>
              </div>
              <span className="text-lg font-bold" style={{ color: metric.color }}>
                {metric.value}%
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metric.value}%` }}
                transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                className="h-2 rounded-full"
                style={{ backgroundColor: metric.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <ReactECharts
        option={getRadarOption()}
        style={{ height: '300px' }}
        opts={{ renderer: 'canvas' }}
      />
    </div>
  );
};

export default MindsetMetrics;