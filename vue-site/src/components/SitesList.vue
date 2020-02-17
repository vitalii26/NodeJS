<template>
  <div class="sites__list text-secondary">
    <div class="container">
      <div class="row px-3">
        <div class="col-12 bg-white d-flex justify-content-between p-2">
          <h3>Active Sites</h3>
          <div class="d-flex">
            <b-icon-question-fill class="h2 mr-2">
            </b-icon-question-fill>
            <b-form-input id="input-horizontal"
               placeholder="Search Active Sites...">
            </b-form-input>
          </div>
        </div>
      </div>
       <table class="table text-secondary">
  <thead class="thead-light">
    <tr>
      <th scope="col" v-for="item in tableFields">
        {{item}}
      </th>
    </tr>
  </thead>
  <tbody class="bg-light">
    <tr v-for="item in list">
      <th scope="row">
        <input
          class="sites__list-checkbox"
          tag="span"
          type="checkbox">
          {{item.url}}
      </th>
      <th scope="row">
        <b-badge
        variant="secondary"
        class="p-2">
          {{item.server.ip}}
        </b-badge>
      </th>
      <th scope="row">
        {{item.server.name}}
      </th>
      <th scope="row">
        gridpane
      </th>
      <th scope="row">
        <b-icon-inboxes 
          variant="warning">
        </b-icon-inboxes>
      </th>
      <th scope="row">
        <b-icon-document-text
          variant="success">
        </b-icon-document-text>
      </th>
      <th scope="row">
        <b-icon-eye></b-icon-eye>
        <b-button
        @click="$emit('remove-site', item)"
        variant="outline-danger ml-2">
          &times;
        </b-button>
      </th>
    </tr>
  </tbody>
</table>
    </div>
  </div>
</template>

<script>
import { BIconQuestionFill, BIconEye, BIconInboxes, BIconDocumentText } from 'bootstrap-vue';
export default {
  props: ['list', 'tableFields'],
  components: {
    BIconQuestionFill,
    BIconEye,
    BIconInboxes,
    BIconDocumentText,
  } 
}
</script>

<style>
  .sites__list {
    font-size: 1rem;
    font-weight: 300;
  }

  .sites__list-checkbox {
    margin-right: 5px;
  }
</style>