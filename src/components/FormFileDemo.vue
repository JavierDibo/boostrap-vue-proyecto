<!-- FormDemo.vue -->
<template>
  <div>
    <h2 class="my-4">Form File</h2>

    <!-- Single file -->
    <b-form-group label="Single file" label-for="file-single">
      <b-form-file id="file-single" v-model="fileSingle" :state="Boolean(fileSingle)" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."></b-form-file>
      <div class="mt-3">Selected file: {{ fileSingle ? fileSingle.name : '' }}</div>
    </b-form-group>

    <!-- Multiple files -->
    <b-form-group label="Multiple files" label-for="file-multiple">
      <b-form-file id="file-multiple" v-model="fileMultiple" multiple placeholder="Choose files or drop them here..." drop-placeholder="Drop files here..."></b-form-file>
      <div class="mt-3">Selected files: {{ fileMultiple.map(file => file.name).join(', ') }}</div>
    </b-form-group>

    <!-- Directory mode -->
    <b-form-group label="Directory" label-for="file-directory">
      <b-form-file id="file-directory" v-model="fileDirectory" directory placeholder="Choose a directory" drop-placeholder="Drop directory here..."></b-form-file>
      <div class="mt-3">Selected directory: {{ fileDirectory.map(file => file.$path).join(', ') }}</div>
    </b-form-group>

    <!-- Limiting file types -->
    <b-form-group label="Limit file types" label-for="file-types">
      <b-form-file id="file-types" v-model="fileTypes" :accept="['.jpg', '.png', '.gif']" placeholder="Choose an image..."></b-form-file>
      <div class="mt-3">Selected image: {{ fileTypes ? fileTypes.name : '' }}</div>
    </b-form-group>

    <!-- Customizing -->
    <b-form-group label="Customize" label-for="file-customize">
      <b-form-file id="file-customize" v-model="fileCustomize" size="lg" placeholder="Choose a file..." browse-text="Select file"></b-form-file>
    </b-form-group>

    <!-- Plain mode -->
    <b-form-group label="Plain mode" label-for="file-plain">
      <b-form-file id="file-plain" v-model="filePlain" plain></b-form-file>
      <div class="mt-3">Selected file: {{ filePlain ? filePlain.name : '' }}</div>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileSingle: null,
      fileMultiple: [],
      fileDirectory: [],
      fileTypes: null,
      fileCustomize: null,
      filePlain: null
    }
  }
}
</script>