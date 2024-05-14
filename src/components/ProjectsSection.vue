
<template>
  <b-container id="projects" class="my-5">
    <h2>My Projects</h2>
    <b-button @click="openModal(null)" class="mb-3">Add Project</b-button>
    <b-row>
      <b-col md="4" v-for="project in projects" :key="project.id">
        <b-card :title="project.title" :img-src="project.image" img-alt="Project Image" img-top>
          <b-card-text>{{ project.description }}</b-card-text>
          <b-button @click="openModal(project)" class="mr-2">Edit</b-button>
          <b-button @click="deleteProject(project.id)" variant="danger">Delete</b-button>
        </b-card>
      </b-col>
    </b-row>

    <b-modal v-model="modalShow" :title="modalTitle">
      <project-form :project="selectedProject" @submit="saveProject"></project-form>
    </b-modal>
  </b-container>
</template>

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
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'Praesent sed neque ac ipsum aliquam malesuada.',
          details: 'Detailed information about Project 2.',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 3,
          title: 'Project 3',
          description: 'Fusce efficitur libero vel tempor malesuada.',
          details: 'Detailed information about Project 3.',
          image: 'https://via.placeholder.com/300x200',
        },
      ],
    };
  },
  computed: {
    modalTitle() {
      return this.selectedProject ? 'Edit Project' : 'Add Project';
    },
  },
  methods: {
    openModal(project) {
      this.selectedProject = project ? { ...project } : null;
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
    },
    deleteProject(id) {
      const index = this.projects.findIndex(p => p.id === id);
      this.projects.splice(index, 1);
    },
  },
};
</script>