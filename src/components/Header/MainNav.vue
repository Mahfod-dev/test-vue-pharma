<!-- @format -->

<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="border-blue flex h-full flex-nowrap border-b border-brand-gray-1 px-8"
      >
        <a class="flex h-full items-center text-xl" :href="url">{{
          company
        }}</a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              class="ml-9 h-full first:ml-0"
              v-for="menuItem in menuItems"
              key="menuItem"
            >
              <a href="" class="flex h-full items-center py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton button-msg="Sign in" type="primary" v-else />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import ActionButton from "../UI/ActionButton.vue";
import ProfileImage from "../UI/ProfileImage.vue";

const company = "Careers";
const url = "https://careers.google.com/";
const menuItems = [
  "Teams",
  "Locations",
  "Life at Bobo Corp",
  "How we hire",
  "Jobs",
];
</script>

<style lang="scss" scoped></style>
