<template>
  <div class="modal-wrapper">
    <div class="modal">
      <slot />
    </div> 
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  methods: {
    closeModal() {
      return this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.modal-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  background: rgba(25, 27, 32, 0.5);
  z-index: 100;
}
.modal {
  width: 448px;
  height: auto;
  position: relative;
  background: #fff;
  border-radius: 6px;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
}
</style>
