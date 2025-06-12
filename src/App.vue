<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex flex-1 bg-gray-50">
      <div class="flex flex-col flex-1">
        <Header />
        <main class="flex-1 p-6">
          <Dashboard />
        </main>
      </div>

      <!-- Right Panel -->
      <div class="w-[300px] border-l bg-white p-4 shadow-sm">
        <UserPanel />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Dashboard from './components/Dashboard.vue'
import UserPanel from './components/UserPanel.vue'
</script>
