<template>
  <aside class="w-64 h-screen bg-white shadow-md p-6 flex flex-col justify-between">
    <!-- Top: Logo + Nav -->
    <div>
      <h1 class="text-xl font-bold mb-10 flex items-center gap-2">
        <LayoutDashboard class="w-5 h-5" />
        logip
      </h1>

      <nav class="space-y-5 text-gray-700 text-base">
        <a href="#" class="flex items-center hover:text-blue-600 gap-3">
          <Home class="w-5 h-5" />
          Home
        </a>
        <a href="#" class="flex items-center hover:text-blue-600 gap-3">
          <FolderOpen class="w-5 h-5" />
          Projects
        </a>
        <a href="#" class="flex items-center hover:text-blue-600 gap-3">
          <ListChecks class="w-5 h-5" />
          Tasks
        </a>
        <a href="#" class="flex items-center hover:text-blue-600 gap-3">
          <Users class="w-5 h-5" />
          Team
        </a>
        <a href="#" class="flex items-center hover:text-blue-600 gap-3">
          <Settings class="w-5 h-5" />
          Settings
        </a>
      </nav>
    </div>

    <!-- Bottom: Logout -->
    <div class="mt-10">
      <a href="#" class="flex items-center text-gray-500 hover:text-red-500 gap-3">
        <LogOut class="w-5 h-5" />
        Log out
      </a>
    </div>
  </aside>
</template>

<script setup>
import {
  Home,
  LayoutDashboard,
  FolderOpen,
  ListChecks,
  Users,
  Settings,
  LogOut
} from 'lucide-vue-next'
</script>
