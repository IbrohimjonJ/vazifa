import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const CountryChart = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Prepare data for ApexCharts
    const prepareChartData = () => {
        return countries.map(country => ({
            x: country.name.common,
            y: Object.keys(country.languages).length
        }));
    };

    // Chart options
    const chartOptions = {
        chart: {
            id: 'basic-bar',
            toolbar: {
                show: false
            }
        },
        xaxis: {
            type: 'category',
        },
        yaxis: {
            title: {
                text: 'Number of Languages'
            }
        }
    };

    return (
        <div className="country-chart">
            <h1>Country Language Data</h1>
            <Chart
                options={chartOptions}
                series={[{ data: prepareChartData() }]}
                type="bar"
                width="100%"
            />
        </div>
    );
};

export default CountryChart;
