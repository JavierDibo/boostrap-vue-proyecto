<template>
  <div>
    <b-container fluid class="hero-section">
      <video class="hero-video" autoplay loop muted>
        <source src="../assets/www.mp4" type="video/mp4">
      </video>
      <b-row class="justify-content-center align-items-center">
        <b-col cols="12" md="12" lg="6" class="text-center content-wrapper">
          <h1 class="hero-title">Bienvenido a mi <strong>portfolio</strong></h1>
          <p class="hero-subtitle">Descubre mis proyectos y habilidades</p>
          <b-button variant="primary" size="lg" class="hero-button">Explorar...</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>

.hero-section {
  height: calc(100vh + 72px); /* Adjust the height to account for the navbar height */
  padding-top: 72px; /* Add padding top equal to the navbar height */
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

.content-wrapper {
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 1s ease-out forwards;
  padding: 1rem;
  display: inline-block;
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