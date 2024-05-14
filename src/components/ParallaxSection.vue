<!-- ParallaxSection.vue -->
<template>
  <div class="parallax-section" :style="parallaxStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    speed: {
      type: Number,
      default: 0.5,
    },
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  computed: {
    parallaxStyle() {
      return {
        transform: `translateY(${this.scrollPosition * this.speed}px)`,
      };
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = document.documentElement.scrollTop;
    },
  },
};
</script>

<style scoped>
.parallax-section {
  position: relative;
  overflow: hidden;
}
</style>