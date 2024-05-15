<template>
  <div>
    <h2>Responsive and Styled Images</h2>
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="4">
          <b-img thumbnail fluid :src="getImageUrl(1)" alt="Responsive image"></b-img>
        </b-col>
        <b-col md="4">
          <b-img rounded fluid :src="getImageUrl(2)" alt="Rounded image"></b-img>
        </b-col>
        <b-col md="4">
          <b-img center fluid :src="getImageUrl(3)" alt="Centered image"></b-img>
        </b-col>
      </b-row>
    </b-container>

    <h2 class="mt-4">Blank Images with Custom Colors</h2>
    <b-row>
      <b-col md="3">
        <b-img blank width="200" height="200" blank-color="#007bff"></b-img>
      </b-col>
      <b-col md="3">
        <b-img blank width="200" height="200" blank-color="#6c757d"></b-img>
      </b-col>
      <b-col md="3">
        <b-img blank width="200" height="200" blank-color="#28a745"></b-img>
      </b-col>
      <b-col md="3">
        <b-img blank width="200" height="200" blank-color="#dc3545"></b-img>
      </b-col>
    </b-row>

    <h2 class="mt-4">Lazy Loaded Images</h2>
    <b-row>
      <b-col md="4" v-for="i in 3" :key="i">
        <b-img-lazy :src="getImageUrl(i+10)" fluid thumbnail></b-img-lazy>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  methods: {
    getImageUrl(imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`
    }
  }
}
</script>