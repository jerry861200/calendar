<template>
  <div class="weekcalendar">
    
    <weekcalendar />
  </div>
</template>

<script>
// @ is an alias to /src
import weekcalendar from '@/components/Weekcalendar/weekcalendar.vue'

export default {
  name: 'Home',
  components: {
    weekcalendar
  }
}
</script>
