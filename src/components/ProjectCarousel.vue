<!-- ProjectCarousel.vue -->
<template>
  <div class="project-carousel">
    <b-carousel
        id="project-carousel"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="(project, index) in projects" :key="index" :img-src="project.image">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      projects: [
        {
          name: 'Project 1',
          description: 'Description of project 1',
          image: require('@/assets/project1.jpg'),
        },
        {
          name: 'Project 2',
          description: 'Description of project 2',
          image: require('@/assets/project2.jpg'),
        },
        // Add more project objects as needed
      ],
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
.project-carousel {
  padding: 2rem 0;
}
</style>