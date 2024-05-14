<template>
  <div>
    <b-container fluid class="hero-section">
      <video class="hero-video" autoplay loop muted>
        <source src="../assets/www.mp4" type="video/mp4">
      </video>
      <b-row class="justify-content-center align-items-center">
        <b-col cols="12" md="8" lg="6" class="text-center">
          <h1 class="hero-title">Welcome to My Portfolio</h1>
          <p class="hero-subtitle">Discover my projects and skills</p>
          <b-button variant="primary" size="lg" class="hero-button">Explore Now</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 1s ease-out forwards;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 1s ease-out 0.5s forwards;
}

.hero-button {
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 1s ease-out 1s forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>