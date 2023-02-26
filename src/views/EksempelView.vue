<template>
  <div class="container page-container">
    <h1>Eksempel</h1>
    <p class="font-lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi harum commodi fuga culpa! Accusantium necessitatibus illum illo voluptatem? Architecto tempora rerum quam inventore nesciunt iure, eligendi est beatae? Nesciunt, impedit!</p>

    <div>
      <h2>Opret todo</h2>
      <fds-formgroup>
        <fds-label> Ny Todo </fds-label>
        <fds-tooltip class="ml-2"> Hjælpende <b>tekst</b> </fds-tooltip>
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input v-model="todo"></fds-input>
      </fds-formgroup>
      <fds-button class="my-4" @click="opretHandler" :disabled="todo.length===0">Opret</fds-button>
    </div>

    <div class="my-6">
      <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Todo</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(t, i) of todos" :key="i">
                <td data-title="index">#{{ i }} </td>
                <td data-title="todo">{{t}}</td>
                <td>
                  <fds-funktionslink
                    @click="fjernHandler(t)"
                    icon="delete"
                    title="fjern todo"
                  >
                    Fjern
                  </fds-funktionslink>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
  </div>
 
</template>

<script lang="ts" setup>import { ref } from 'vue';


const todos = ref<string[]>(['Første Todo'])
const todo = ref('');

const opretHandler = () =>{
  todos.value.push(todo.value);
  todo.value = '';
}

const fjernHandler = (t: string)=>{
  todos.value = todos.value.filter(f=>f !== t)
}


</script>

<style>

</style>
