<template>
  <div class="template">
      <h1>O Clima em sua região</h1>
      <div class="row">
          <div class="col-12">
            <span class="clima"> 19ºC<img v-bind:src="chuva" alt=""> </span> 
          </div>
      </div>
  </div>
</template>

<script>
import rain from '../assets/rain.svg'
console.log(rain);
export default {
data: function (){
    return{
        chuva: rain
    }
}
}
</script>

<style>
.clima{
    width: 100%;
}

</style>