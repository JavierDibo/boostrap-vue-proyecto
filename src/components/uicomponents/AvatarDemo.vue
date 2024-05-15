<template>
  <div>
    <h2>Avatar Variants</h2>
    <div>
      <b-avatar variant="primary" text="P"></b-avatar>
      <b-avatar variant="secondary" text="S"></b-avatar>
      <b-avatar variant="success" text="S"></b-avatar>
      <b-avatar variant="danger" text="D"></b-avatar>
      <b-avatar variant="warning" text="W"></b-avatar>
      <b-avatar variant="info" text="I"></b-avatar>
      <b-avatar variant="light" text="L"></b-avatar>
      <b-avatar variant="dark" text="D"></b-avatar>
    </div>
    <h2>Avatar Sizes</h2>
    <div>
      <b-avatar size="sm" text="SM"></b-avatar>
      <b-avatar text="DF"></b-avatar>
      <b-avatar size="lg" text="LG"></b-avatar>
      <b-avatar size="3em" text="3em"></b-avatar>
    </div>

    <h2>Avatar Shapes</h2>
    <div>
      <b-avatar rounded="sm" text="SM"></b-avatar>
      <b-avatar rounded text="RND"></b-avatar>
      <b-avatar rounded="lg" text="LG"></b-avatar>
      <b-avatar rounded="left" text="L"></b-avatar>
      <b-avatar rounded="right" text="R"></b-avatar>
      <b-avatar rounded="top" text="T"></b-avatar>
      <b-avatar rounded="bottom" text="B"></b-avatar>
      <b-avatar square text="SQ"></b-avatar>
    </div>

    <h2>Avatar Group</h2>
    <b-avatar-group size="4em">
      <b-avatar text="1"></b-avatar>
      <b-avatar text="2"></b-avatar>
      <b-avatar text="3"></b-avatar>
      <b-avatar text="4"></b-avatar>
    </b-avatar-group>

    <h2>Avatar Badges</h2>
    <div>
      <b-avatar badge></b-avatar>
      <b-avatar badge badge-left></b-avatar>
      <b-avatar badge badge-top badge-offset="-0.5em" badge-variant="success"></b-avatar>
    </div>

    <h2>Actionable Avatars</h2>
    <div>
      <b-avatar button @click="onClick" variant="info" text="C"></b-avatar>
      <b-avatar href="#" variant="primary" text="L"></b-avatar>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClick() {
      alert('Avatar clicked!')
    }
  }
}
</script>