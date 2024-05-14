<!-- ParallaxSection.vue -->
<template>
  <div class="parallax-section">
    <b-img :src="imageSrc" class="parallax-image" alt="Parallax Image"></b-img>
    <div class="parallax-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const parallaxImage = this.$el.querySelector('.parallax-image');
      /*const scrollPosition = document.documentElement.scrollTop;
      parallaxImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;*/
      parallaxImage.style.transform = `translateY(0)`;
    },
  },
};
</script>

<style scoped>
.parallax-section {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.parallax-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0);
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