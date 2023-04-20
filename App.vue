<template>
  <div id="nav">
    <router-link to="/"> Home </router-link> |
    <router-link to="/posts"> Posts </router-link> |
    <router-link to="/users"> Users </router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>