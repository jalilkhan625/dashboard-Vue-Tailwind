<template>
  <div class="space-y-6">
    <!-- User Card -->
    <div class="flex flex-col items-center text-center space-y-2">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        class="w-20 h-20 rounded-full border-4 border-white shadow"
        alt="Profile"
      />
      <div>
        <h3 class="text-md font-semibold text-gray-800">Megan Norton</h3>
        <p class="text-sm text-gray-500">@megnorton</p>
      </div>
      <div class="flex justify-center gap-3 mt-2">
        <button class="bg-gray-100 p-2 rounded-full text-gray-600"><i class="fas fa-phone"></i></button>
        <button class="bg-gray-100 p-2 rounded-full text-gray-600"><i class="fas fa-video"></i></button>
        <button class="bg-gray-100 p-2 rounded-full text-gray-600"><i class="fas fa-ellipsis-h"></i></button>
      </div>
    </div>

    <!-- Activity List -->
    <div class="space-y-5">
      <h4 class="text-sm font-semibold text-gray-800">Activity</h4>

      <div class="space-y-4 text-sm text-gray-700">
        <!-- Activity Item 1 -->
        <div class="flex items-start gap-3">
          <img src="https://randomuser.me/api/portraits/men/12.jpg" class="w-8 h-8 rounded-full" />
          <div>
            <p><strong>Floyd Miles</strong> commented on <span class="text-blue-500">Stark Project</span></p>
            <p class="mt-1 bg-blue-50 text-gray-800 rounded px-3 py-2 w-fit">Hi! Next week we'll start a new project. I'll tell you all the details later</p>
          </div>
        </div>

        <!-- Activity Item 2 -->
        <div class="flex items-start gap-3">
          <img src="https://randomuser.me/api/portraits/men/21.jpg" class="w-8 h-8 rounded-full" />
          <div>
            <p><strong>Guy Hawkins</strong> added a file to <span class="text-blue-500">7Heros Project</span></p>
            <div class="mt-1 bg-gray-100 p-2 rounded flex items-center gap-2">
              <i class="fas fa-file-alt text-gray-600"></i>
              <div>
                <p class="text-xs font-medium">Homepage.fig</p>
                <p class="text-xs text-gray-500">13.4 Mb</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Activity Item 3 -->
        <div class="flex items-start gap-3">
          <img src="https://randomuser.me/api/portraits/women/65.jpg" class="w-8 h-8 rounded-full" />
          <div>
            <p><strong>Kristin Watson</strong> commented on <span class="text-blue-500">7Heros Project</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// no logic yet — this is static
</script>
