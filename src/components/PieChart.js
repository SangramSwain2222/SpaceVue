import React, { useEffect, useState } from 'react'
import { AgChartsReact } from 'ag-charts-react';



export const PieChart = () => {

    const [missions, setMissions] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://www.ag-grid.com/example-assets/space-mission-data.json');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
  
          const data = await response.json();
          setMissions(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    const missionResultsByYear = {};

    missions.forEach((mission) => {
        const year = new Date(mission.date).getFullYear();
    
        if (!missionResultsByYear[year]) {
            missionResultsByYear[year] = {
                year: year,
                successful: 0,
                failed: 0,
            };
        }
    
        if (mission.successful) {
            missionResultsByYear[year].successful += 1;
        } else {
            missionResultsByYear[year].failed += 1;
        }
    });
    
    const sortedResults = Object.values(missionResultsByYear).sort((a, b) => a.year - b.year);
    
    const [options, setOptions] = useState({
        title
        : {
            text: "Successful and Failed information of Missions",
        },
        subtitle: {
            text: 'By Yearwise',
        },
        data:sortedResults ,
        series: [{
            type: 'bar',
            xKey: 'year',
            yKey: 'successful',
            yName: 'successful',
            stacked: true,
        },
        {
            type: 'bar',
            xKey: 'year',
            yKey: 'failed',
            yName: 'failed',
            stacked: true,
        }
    ]})

  
  return (
    <div style={{height:'75vh',marginTop: '120px'}}>
      {missions.length > 0 ? (
        <AgChartsReact options={{ ...options, data: sortedResults }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
