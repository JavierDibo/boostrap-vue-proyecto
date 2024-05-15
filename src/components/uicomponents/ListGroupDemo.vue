<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>List Group Horizontal con Variantes Contextuales</h3>
        <b-list-group horizontal="md">
          <b-list-group-item variant="primary" href="#">Primario</b-list-group-item>
          <b-list-group-item variant="secondary" href="#">Secundario</b-list-group-item>
          <b-list-group-item variant="success" href="#">Éxito</b-list-group-item>
          <b-list-group-item variant="danger" href="#">Peligro</b-list-group-item>
          <b-list-group-item variant="warning" href="#">Advertencia</b-list-group-item>
          <b-list-group-item variant="info" href="#">Información</b-list-group-item>
        </b-list-group>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <h3>List Group con Contenido Personalizado y Badges</h3>
        <b-list-group>
          <b-list-group-item href="#" active class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Elemento Activo del List Group</h5>
              <b-badge variant="primary" pill>14</b-badge>
            </div>
            <p class="mb-1">
              Contenido personalizado para el elemento activo del list group. Donec id elit non mi porta gravida at eget metus.
            </p>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Elemento del List Group con Badge</h5>
              <b-badge variant="success" pill>2</b-badge>
            </div>
            <p class="mb-1">
              Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus.
            </p>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Elemento del List Group con Badge</h5>
              <b-badge variant="danger" pill>1</b-badge>
            </div>
            <p class="mb-1">
              Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus.
            </p>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <h3>List Group Dentro de una Tarjeta</h3>
        <b-card no-body header="Tarjeta con List Group Flush">
          <b-list-group flush>
            <b-list-group-item href="#" variant="primary">Elemento Primario del List Group</b-list-group-item>
            <b-list-group-item href="#" variant="secondary">Elemento Secundario del List Group</b-list-group-item>
            <b-list-group-item href="#" variant="success">Elemento de Éxito del List Group</b-list-group-item>
          </b-list-group>
        </b-card>
      </div>
    </div>
  </div>
</template>
