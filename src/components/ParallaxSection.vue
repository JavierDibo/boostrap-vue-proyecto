<!-- ParallaxSection.vue -->
<template>
  <div class="parallax-section">
    <div class="parallax-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const parallaxSection = this.$el;
      const scrollPosition = window.document.documentElement.scrollTop;
      parallaxSection.backgroundPositionY = `${scrollPosition * 0.3}px`;
    },
  },
};
</script>

<style scoped>
.parallax-section {
  position: relative;
  height: 100vh;
  background-image: url('../assets/about.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>