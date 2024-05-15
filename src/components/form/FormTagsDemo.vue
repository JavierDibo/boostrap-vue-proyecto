<template>
  <div>
    <h2>Flashy Form Tags Demo</h2><b-card bg-variant="dark" text-variant="white" class="mb-3">
    <b-form-group label="Colored Tags (Separator)" label-for="tags-pills-1">
      <b-form-tags
          id="tags-pills-1"
          v-model="value1"
          separator=" "
          placeholder="Enter new tags separated by space"
          tag-variant="success"
          tag-pills
          size="lg"
          add-button-variant="info"
          remove-on-delete
      ></b-form-tags>
    </b-form-group>
  </b-card>

    <b-card bg-variant="light">
      <b-form-group label="Styled Custom Tags" label-for="tags-custom-1">
        <b-form-tags id="tags-custom-1" v-model="value2" no-outer-focus class="mb-2">
          <template v-slot="{ tags, removeTag }">
            <ul v-if="tags.length > 0" class="list-inline mb-2">
              <li v-for="tag in tags" :key="tag" class="list-inline-item">
                <b-form-tag
                    @remove="removeTag(tag)"
                    variant="primary"
                    class="font-weight-bold"
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
                <b-form-select-option :value="null" disabled>Choose a tag...</b-form-select-option>
              </template>
            </b-form-select>
          </template>
        </b-form-tags>
      </b-form-group>
    </b-card>

    <b-card bg-variant="info" text-variant="white" class="mt-3">
      <b-form-group label="Tagging with Dropdown" label-for="tag-dropdown-1">
        <b-form-tags id="tag-dropdown-1" v-model="value3" no-outer-focus class="mb-2">
          <template v-slot="{ tags, addTag, removeTag }">
            <b-dropdown
                text="Choose a Tag"
                block
                variant="outline-light"
                class="mb-2"
                menu-class="w-100"
                size="lg"
            >
              <b-dropdown-item-button v-for="option in options"
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
                  class="mr-1 mb-1"
              >{{ tag }}</b-form-tag>
            </div>
          </template>
        </b-form-tags>
      </b-form-group>
    </b-card></div>
</template>
<script>
export default {
  data() {
    return {
      value1: ['apple', 'orange', 'grape'],
      value2: [],
      value3: [],
      options: ['Strawberry', 'Blueberry', 'Peach', 'Pear', 'Plum', 'Pineapple']
    }
  },
  computed: {
    availableOptions() {
      return this.options.filter(opt => this.value2.indexOf(opt) === -1)
    }
  }
}
</script>