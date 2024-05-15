<!-- FormTagsDemo.vue -->
<template>
  <div class="container">
    <div class="row justify-content-center mb-4 mt-4">
      <div class="col-md-8 text-center">
        <h2>Etiquetas de Formulario</h2>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-card bg-variant="light" class="mb-3 p-3 border">
          <h3 class="h5">Etiquetas de Colores (Separador)</h3>
          <b-form-group label-for="tags-pills-1">
            <b-form-tags
                id="tags-pills-1"
                v-model="value1"
                separator=" "
                placeholder="Ingresa nuevas etiquetas separadas por espacio"
                tag-variant="warning"
                class="text-dark bg-warning"
                tag-pills
                size="lg"
                add-button-variant="info"
                remove-on-delete
            ></b-form-tags>
          </b-form-group>
        </b-card>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-card bg-variant="light" class="p-3 border">
          <h3 class="h5">Etiquetas Personalizadas con Estilo</h3>
          <b-form-group label-for="tags-custom-1">
            <b-form-tags id="tags-custom-1" v-model="value2" no-outer-focus>
              <template v-slot="{ tags, removeTag }">
                <ul v-if="tags.length > 0" class="list-inline mb-2">
                  <li v-for="tag in tags" :key="tag" class="list-inline-item">
                    <b-form-tag
                        @remove="removeTag(tag)"
                        variant="warning"
                        class="text-dark bg-warning font-weight-bold"
                        style="font-size: 1.25rem;"
                    >
                      <b-icon icon="tag-fill" class="mr-1"></b-icon>{{ tag }}
                    </b-form-tag>
                  </li>
                </ul>
                <b-form-select
                    :options="availableOptions"
                    size="lg"
                    class="w-auto"
                    @change="(opt) => tags.indexOf(opt) === -1 ? tags.push(opt) : null"
                >
                  <template #first>
                    <b-form-select-option :value="null" disabled>Elige una etiqueta...</b-form-select-option>
                  </template>
                </b-form-select>
              </template>
            </b-form-tags>
          </b-form-group>
        </b-card>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-card bg-variant="light" class="p-3 border">
          <h3 class="h5">Etiquetado con Desplegable</h3>
          <b-form-group label-for="tag-dropdown-1">
            <b-form-tags id="tag-dropdown-1" v-model="value3" no-outer-focus>
              <template v-slot="{ tags, addTag, removeTag }">
                <b-dropdown
                    text="Elige una Etiqueta"
                    block
                    variant="outline-primary"
                    class="mb-2"
                    menu-class="w-100"
                    size="lg"
                >
                  <b-dropdown-item-button
                      v-for="option in options"
                      :key="option"
                      @click="addTag(option)"
                  >{{ option }}</b-dropdown-item-button>
                </b-dropdown>

                <div class="d-inline-block" style="font-size: 1.5rem;">
                  <b-form-tag
                      v-for="tag in tags"
                      @remove="removeTag(tag)"
                      :key="tag"
                      variant="warning"
                      class="mr-1 mb-1 text-dark bg-warning"
                  >{{ tag }}</b-form-tag>
                </div>
              </template>
            </b-form-tags>
          </b-form-group>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: ['manzana', 'naranja', 'uva'],
      value2: [],
      value3: [],
      options: ['Fresa', 'Arándano', 'Durazno', 'Pera', 'Ciruela', 'Piña']
    };
  },
  computed: {
    availableOptions() {
      return this.options.filter(opt => this.value2.indexOf(opt) === -1);
    }
  }
};
</script>
