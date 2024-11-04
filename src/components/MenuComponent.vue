<template>
  <div class="container">
    <ul id="menu">
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/create">Create</router-link>
        </li>
    </ul>
    <div class="cb"></div>
  </div>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style>
    ul#menu {
        margin: 0;
        padding: 0;
    }
    ul#menu li {
        list-style-type: none;
        float: left;
        margin-left: 30px;
    }
    ul#menu li a {
        text-decoration: none;
        color: blanchedalmond;
        font-size: 20px;
    }
    .cb {
        clear: both;
    }
</style>