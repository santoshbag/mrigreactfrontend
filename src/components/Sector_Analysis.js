import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import {fetchSecAnalysis} from "../api";

// PCA Results with Sector Labels
function PCAWithSectors_old({ data }) {
  const x = data.map(point => point[0]);
  const y = data.map(point => point[1]);

  return (
    <Plot
      data={[
        {
          x: x,
          y: y,
          mode: 'markers+text',
          type: 'scatter',
          marker: { color: 'blue', size: 8 },
        },
      ]}
      layout={{
        title: 'PCA with Sector Labels',
        xaxis: { title: 'Principal Component 1' },
        yaxis: { title: 'Principal Component 2' },
      }}
    />
  );
}

function PCAWithSectors({ data }) {
  const sectors = [...new Set(data.map(d => d.sector))];
  const colors = ['blue', 'red', 'green', 'purple', 'orange'];

  return (
    <Plot
      data={sectors.map((sector, idx) => ({
        x: data.filter(d => d.sector === sector).map(d => d.pca_x),
        y: data.filter(d => d.sector === sector).map(d => d.pca_y),
        mode: 'markers+text',
        type: 'scatter',
        name: sector,
        marker: { color: colors[idx % colors.length], size: 8 },
        text: data.filter(d => d.sector === sector).map(d => d.stock),
        textposition: 'top center'
      }))}
      layout={{
        title: 'PCA with Sector Labels',
        xaxis: { title: 'Principal Component 1' },
        yaxis: { title: 'Principal Component 2' }
      }}
    />
  );
}

// PCA Results with KMeans Clustering
function PCAWithClusters_old({ data, clusters }) {
  const x = data.map(point => point[0]);
  const y = data.map(point => point[1]);

  return (
    <Plot
      data={[
        {
          x: x,
          y: y,
          mode: 'markers',
          type: 'scatter',
          marker: { color: clusters, colorscale: 'Viridis', size: 8 },
        },
      ]}
      layout={{
        title: 'PCA with KMeans Clustering',
        xaxis: { title: 'Principal Component 1' },
        yaxis: { title: 'Principal Component 2' },
      }}
    />
  );
}

function PCAWithClusters_old1({ data }) {
  // Get the unique cluster labels
  const clusters = [...new Set(data.map(d => d.cluster))];
  const colors = ['blue', 'red', 'green', 'purple', 'orange'];

  return (
    <Plot
      data={clusters.map((cluster, idx) => ({
        x: data.filter(d => d.cluster === cluster).map(d => d.pca_x),
        y: data.filter(d => d.cluster === cluster).map(d => d.pca_y),
        mode: 'markers+text',
        type: 'scatter',
        name: `Cluster ${cluster}`,
        marker: { color: colors[idx % colors.length], size: 8 },
        text: data.filter(d => d.cluster === cluster).map(d => d.stock),
        textposition: 'top center'
      }))}
      layout={{
        title: 'PCA with KMeans Clustering',
        xaxis: { title: 'Principal Component 1' },
        yaxis: { title: 'Principal Component 2' },
        legend: { title: 'Clusters' }
      }}
    />
  );
}

function PCAWithClusters({ data }) {
  return (
    <Plot
      data={[
        {
          x: data.map(d => d.pca_x),
          y: data.map(d => d.pca_y),
          mode: 'markers+text',
          type: 'scatter',
          text: data.map(d => d.stock),
          textposition: 'top center',
          marker: {
            size: 12,
            opacity: 0.7,
            color: data.map(d => d.cluster),  // Use cluster as the color value
            colorscale: 'Viridis',  // Continuous color scale (can also try 'Cividis', 'Plasma', etc.)
            colorbar: {
              title: 'Cluster',  // Title for the color scale
              titleside: 'right',
            },
          },
        },
      ]}
      layout={{
        title: 'PCA with KMeans Clustering - Continuous Color Gradient',
        xaxis: { title: 'Principal Component 1' },
        yaxis: { title: 'Principal Component 2' },
        showlegend: false,  // We rely on the color scale instead of separate legends
        margin: { t: 40, l: 50, r: 50, b: 50 },
      }}
    />
  );
}


// Correlation Matrix Heatmap
function CorrelationHeatmap_old({ data }) {
  return (
    <Plot
      data={[
        {
          z: data,
          type: 'heatmap',
          colorscale: 'Viridis',
        },
      ]}
      layout={{
        title: 'Correlation Matrix Heatmap',
        xaxis: { title: 'Stocks' },
        yaxis: { title: 'Stocks' },
      }}
    />
  );
}

function CorrelationHeatmap({ data, labels }) {
  return (
    <Plot
      data={[
        {
          z: data,                          // Correlation matrix values
          x: labels,                         // Stock names for x-axis
          y: labels,                         // Stock names for y-axis
          type: 'heatmap',
          colorscale: 'Viridis',
          text: data.map(row => row.map(val => val.toFixed(2))), // Display correlation values
          hoverongaps: false,
          showscale: true
        },
      ]}
      layout={{
        title: 'Correlation Matrix Heatmap',
        xaxis: {
          title: 'Stocks',
          tickmode: 'array',
          tickvals: labels,
          tickangle: -45,
          side: 'bottom'
        },
        yaxis: {
          title: 'Stocks',
          tickmode: 'array',
          tickvals: labels
        },
        annotations: labels.flatMap((labelX, i) =>
          labels.map((labelY, j) => ({
            x: labelX,
            y: labelY,
            text: data[i][j].toFixed(2),   // Show correlation values as annotations
            showarrow: false,
            font: {
              color: 'white',
              size: 10
            }
          }))
        )
      }}
    />
  );
}

//Dendrogram Plot
function DendrogramPlot_old({ data }) {
  const trace = {
    x: data.icoord.flat(),
    y: data.dcoord.flat(),
    mode: 'lines',
    type: 'scatter',
    line: { color: 'black' },
  };

  return (
    <Plot
      data={[trace]}
      layout={{
        title: 'Dendrogram',
        xaxis: { title: 'Sample Index' },
        yaxis: { title: 'Distance' },
      }}
    />
  );
}

function DendrogramPlot({ data }) {

  return (
    <Plot
          data={data.data}
          layout={{
            ...data.layout,
        title: 'Stock Dendrogram',
        xaxis: { title: 'Stocks', tickangle: 45, automargin: true },
        yaxis: { title: 'Distance', automargin: true },
        width: 1000,
        height: 600,
          }}
        />
  );
}

function SectorAnalysis() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSecAnalysis()
      .then(data => setData(JSON.parse(data)))
      .catch(error => console.error("Error fetching data:", error));
    console.log(data);
  }, []);

  return data ? (
    <div>
        <div align={"center"}>
      <PCAWithSectors data={data.pca_with_sector} />
            </div>
        <div></div>
                <div align={"center"}>
      <PCAWithClusters data={data.pca_with_clusters} />
                </div>
                <div></div>

                <div align={"center"}>
      <CorrelationHeatmap data={data.correlation_matrix} labels={data.labels} />
                </div>
      {/*<DendrogramPlot data={data.dendrogram_fig} />*/}
    </div>
  ) : (
    <p>Loading data...</p>
  );
}

export default SectorAnalysis;