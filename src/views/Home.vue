<template>
  <div class="home">
    
    <datepicker />
  </div>
</template>

<script>
// @ is an alias to /src
import datepicker from '@/components/datepicker.vue'

export default {
  name: 'Home',
  components: {
    datepicker
  }
}
</script>
