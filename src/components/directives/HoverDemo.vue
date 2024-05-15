<template>
  <b-container>
    <b-row>
      <b-col cols="12" class="text-center my-3">
        <h2>Hover</h2>
        <p>Pasa el ratón sobre las estrellas</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" md="4" lg="3" v-for="(item, index) in items" :key="index">
        <div v-b-hover="(hovered) => handleHover(index, hovered)"
             :class="['border', 'rounded', 'py-5', 'text-center', 'hover-item', {'bg-primary text-white': item.isHovered}]">
          <b-icon :icon="item.isHovered ? 'star-fill' : 'star'" scale="2"></b-icon>
          <p :class="{'text-light': item.isHovered}">{{ item.text }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: 'Elemento 1', isHovered: false },
        { text: 'Elemento 2', isHovered: false },
        { text: 'Elemento 3', isHovered: false },
        { text: 'Elemento 4', isHovered: false },
        { text: 'Elemento 5', isHovered: false },
        { text: 'Elemento 6', isHovered: false },
        { text: 'Elemento 7', isHovered: false },
        { text: 'Elemento 8', isHovered: false },
      ]
    }
  },
  methods: {
    handleHover(index, isHovered) {
      this.items[index].isHovered = isHovered;
    }
  }
}
</script>

<style scoped>
.hover-item {
  transition: background-color 0.3s, color 0.3s;
}
</style>
