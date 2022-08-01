<template>
  <div>
    <div class="close-btn" @click="$emit('close')">✖</div>
    <img :src="require('../assets/img/check-circle.png')">
    <p class="congrats">Поздравляем!</p>
    <p class="success">Вы успешно прошли регистрацию</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: #191b20;
  opacity: 0.5;
}
.congrats {
   font-size: 24px;
   font-weight: 700;
   color: #191b20; 
}
.success {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #191b20;
    opacity: 0.5;
}
</style>