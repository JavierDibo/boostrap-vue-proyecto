<template>
  <b-container id="projects" class="my-5">
    <h2>My Projects</h2>
    <b-button @click="openModal(null)" class="mb-3">Add Project</b-button>
    <b-row>
      <b-col md="4" v-for="project in projects" :key="project.id">
        <b-card :title="project.title" img-alt="Project Image" img-top>
          <div class="project-image-wrapper">
            <img :src="getImageUrl(project.image)" alt="Project Image" class="project-image">
          </div>
          <b-card-text>{{ project.description }}</b-card-text>
          <b-button @click="openModal(project)" class="mr-2">Edit</b-button>
          <b-button @click="deleteProject(project.id)" variant="danger">Delete</b-button>
        </b-card>
      </b-col>
    </b-row>

    <b-modal v-model="modalShow" :title="modalTitle">
      <project-form :project="selectedProject" :available-images="getAvailableImageUrls"
                    @submit="saveProject"></project-form>
    </b-modal>
  </b-container>
</template>

<style scoped>
.project-image-wrapper {
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script>
import ProjectForm from './ProjectForm.vue';

export default {
  name: 'ProjectsSection',
  components: {
    ProjectForm,
  },
  data() {
    return {
      modalShow: false,
      selectedProject: null,
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          details: 'Detailed information about Project 1.',
          image: 'img1.png',
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'Praesent sed neque ac ipsum aliquam malesuada.',
          details: 'Detailed information about Project 2.',
          image: 'img2.png',
        },
        {
          id: 3,
          title: 'Project 3',
          description: 'Fusce efficitur libero vel tempor malesuada.',
          details: 'Detailed information about Project 3.',
          image: 'img3.png',
        },
      ],
      availableImages: ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'],
    };
  },
  computed: {
    getAvailableImageUrls() {
      return this.availableImages.map(image => require(`@/assets/${image}`));
    },
  },
  methods: {
    openModal(project) {
      this.selectedProject = project ? {...project} : null;
      this.modalShow = true;
    },
    saveProject(project) {
      if (project.id) {
        // Update existing project
        const index = this.projects.findIndex(p => p.id === project.id);
        this.projects.splice(index, 1, project);
      } else {
        // Add new project
        project.id = Date.now();
        this.projects.push(project);
      }
      this.modalShow = false;
      this.updateAvailableImages();
    },
    deleteProject(id) {
      const index = this.projects.findIndex(p => p.id === id);
      this.projects.splice(index, 1);
    },
    getImageUrl(image) {
      return require(`@/assets/${image}`);
    },
    updateAvailableImages() {
      const usedImages = this.projects.map(project => project.image);
      this.availableImages = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'].filter(image => !usedImages.includes(image));
    },
  },
};
</script>