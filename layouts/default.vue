<template>
  <div>
    <nuxt/>
  </div>
</template>
<script>
export default {
  created () {
  document.addEventListener("DOMContentLoaded", function(){
    avbarFixedTopAnimation();
  });
//  document.addEventListener("DOMContentLoaded", function (event) {
//    navActivePage();
//    scrollRevelation('.reveal');
//  });
}
}
</script>

<style>

</style>
