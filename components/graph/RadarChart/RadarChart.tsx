import { useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import GraphProps from '../../../modules/GraphProps';
import React from "react";

/**
 * Creates a pre-configured Apexcharts radar graph component
 * @param props 
 * @returns horizontal bar graph
 */
  export function RadarChart(props: GraphProps) {
    const options: ApexOptions = {
      chart: {
        id: 'radar',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: props.xaxisLabels,
      },
      colors: ['#ffadad', '#9bf6ff', '#caffbf'],
      stroke: {
        width: 2,
      },
      title: {
        text: props.title,
        align: 'left',
      },
      noData: {
        text: 'Please select a class to add',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: '14px',
          fontFamily: undefined,
        },
      },
    };
  
    return (
      <>
        <div className="h-full">
          <Chart
            options={options}
            series={props.series}
            type="radar"
            height={'100%'}
          />
        </div>
      </>
    );
  }
