<!--TODO: quitar esta porque no va bien y es fea-->
<template>
  <div>
    <b-card>
      <b-media>
        <template #aside>
          <b-img src="https://picsum.photos/300/300/?image=41" width="128" alt="placeholder"></b-img>
        </template>

        <h4 class="mt-0">Awesome Media Component Demo</h4>
        <p class="text-muted">Showcasing the coolest features of Bootstrap Vue's Media component.</p>

        <h5>Vertical Alignment</h5>
        <b-media vertical-align="center">
          <template #aside>
            <b-img src="https://picsum.photos/300/200/?image=22" width="64" height="128" alt="placeholder"></b-img>
          </template>
          <p>
            This text is vertically centered with the image. You can align the aside media to the top, center, or bottom of the content using the <code>vertical-align</code> prop.
          </p>
        </b-media>

        <hr>
        <h5>Media Nesting</h5>
        <b-media>
          <template #aside>
            <b-img blank blank-color="green" width="64" alt="placeholder"></b-img>
          </template>
          <p>
            You can easily nest media components inside each other for complex layouts.
          </p>

          <b-media class="mt-3">
            <template #aside>
              <b-img blank blank-color="blue" width="64" alt="placeholder"></b-img>
            </template>
            <h5 class="mt-0">Nested Media</h5>
            This is an example of a nested inner media component. You can go as deep as you need.
          </b-media>
        </b-media>

        <hr>
        <h5>Right Aligned Media</h5>
        <b-media right-align vertical-align="center">
          <template #aside>
            <b-img blank blank-color="red" width="80" alt="placeholder"></b-img>
          </template>
          <p class="mb-0">
            This media component is right aligned using the <code>right-align</code> prop. It allows reversing the order of the media aside and content.
          </p>
        </b-media>
      </b-media>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'MediaDemo'
}
</script>