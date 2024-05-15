<template>
  <div>
    <!-- YouTube video embed -->
    <b-embed
        type="iframe"
        aspect="16by9"
        :src="youtubeUrl"
        allowfullscreen
    ></b-embed>

    <br>

    <!-- Responsive local video embed -->
    <b-embed
        type="video"
        aspect="4by3"
        controls
        :poster="posterUrl"
    >
      <source :src="localVideoUrl" type="video/mp4">
    </b-embed>

    <br>

    <!-- Slideshow embed with images -->
    <b-embed type="object" aspect="1by1">
      <img :src="image1Url" alt="Image 1">
      <img :src="image2Url" alt="Image 2">
      <img :src="image3Url" alt="Image 3">
    </b-embed>
  </div>
</template>

<script>
export default {
  name: 'BEmbedDemo',
  data() {
    return {
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      posterUrl: 'https://picsum.photos/1024/768',
      localVideoUrl: require('../../assets/www.mp4'),
      image1Url: 'https://picsum.photos/300/300?image=1',
      image2Url: 'https://picsum.photos/300/300?image=2',
      image3Url: 'https://picsum.photos/300/300?image=3'
    }
  }
}
</script>