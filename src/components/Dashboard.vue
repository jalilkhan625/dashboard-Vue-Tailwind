<template>
  <div class="space-y-8">
    <!-- Performance Section -->
    <section>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-gray-800">Performance</h2>
        <button class="text-sm text-gray-600 border rounded px-3 py-1">01–07 May ▼</button>
      </div>
      <!-- Interactive Chart -->
      <div class="bg-white p-4 rounded shadow">
        <apexchart type="line" height="300" :options="chartOptions" :series="series" />
      </div>
    </section>

    <!-- Current Tasks Section -->
    <section>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-gray-800">Current Tasks</h2>
        <div class="flex items-center gap-4">
          <span class="text-sm text-gray-500">Done 30%</span>
          <button class="text-sm text-gray-600 border rounded px-3 py-1">Week ▼</button>
        </div>
      </div>

      <div class="space-y-4">
        <TaskRow 
          icon="fa-comments" 
          title="Product Review for UI8 Market" 
          status="In progress" 
          time="4h" 
          statusColor="text-orange-400" 
          iconBg="bg-blue-100" 
        />
        <TaskRow 
          icon="fa-search" 
          title="UX Research for Product" 
          status="On hold" 
          time="8h" 
          statusColor="text-blue-500" 
          iconBg="bg-yellow-100" 
        />
        <TaskRow 
          icon="fa-code" 
          title="App design and development" 
          status="Done" 
          time="32h" 
          statusColor="text-green-500" 
          iconBg="bg-green-100" 
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import TaskRow from './TaskRow.vue'

// Chart Data
const series = [
  {
    name: 'This Month',
    data: [7, 6, 8, 5, 9, 6, 8]
  },
  {
    name: 'Last Month',
    data: [6, 5, 7, 4, 6, 5, 7]
  }
]

const chartOptions = {
  chart: {
    type: 'line',
    height: 300,
    toolbar: { show: false }
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  xaxis: {
    categories: ['01', '02', '03', '04', '05', '06', '07'],
    labels: {
      style: {
        colors: '#6b7280'
      }
    }
  },
  colors: ['#3b82f6', '#f97316'],
  tooltip: {
    theme: 'dark',
    x: { format: 'dd MMM yyyy' }
  },
  legend: {
    position: 'top',
    labels: {
      colors: '#374151'
    }
  },
  markers: {
    size: 5
  },
  grid: {
    borderColor: '#e5e7eb'
  }
}
</script>
