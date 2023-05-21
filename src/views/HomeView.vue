<template>
  <div class="hero-section" style="min-height: 100vh">
    <div class="p-5 mb-5 h-100 hero-bg text-white d-flex">
      <div class="m-auto text-center">
        <Typed class="cursor-size mb-1" :options="options">
          <h1 class="greeting-text typing d-inline text-grey-400"></h1>
        </Typed>
        <p>
          <span class="text-grey-300">I'm not here to please everyone. </span>I'm here to push
          boundaries and create innovative solutions
        </p>
        <buttonPacks target="github" icon="fab fa-github" name="Github"></buttonPacks>
        <buttonPacks target="discord" icon="fab fa-discord" name="Discord"></buttonPacks>
        <buttonPacks target="resume" name="Resume"></buttonPacks>
      </div>
    </div>
  </div>
  <div class="container text-light g-3">
    <section class="mb-5">
      <div class="row">
        <div class="col-lg-5 col-12 text-center">
          <img src="@/assets/me.png" style="object-fit: cover" class="w-75 mb-5" alt="me" />
        </div>
        <div class="col-lg-7 col-12">
          <section class="mb-5">
            <h2 class="mb-4 hilight-title">Introduction</h2>
            <p class="text-muted" style="text-indent: 0.6in">
              What can i say about me? I'm a 20-year-old Thai guy currently studying Computer
              Science in Chiang Mai. I believe in embracing diverse perspectives and letting people
              live life on their own terms. My goal is to become a skilled Backend developer,
              creating efficient and robust solutions. I'm always eager to learn and help out, so
              feel free to reach out to me for any assistance you need.
            </p>
          </section>

          <section>
            <h2 class="mb-4 hilight-title">Technology and Language</h2>
            <div class="text-muted">
              <p class="mb-2">Languages: Node.js, TypeScript, SQL, PHP, JavaScript, HTML, CSS</p>
              <p class="mb-2">Frameworks: VueJS, Nuxt, Bootstrap, Codeigniter 4</p>
              <p class="mb-2">Tools: Git, Docker, GitHub, Navicat, Postman</p>
              <p class="mb-2">Other: Firebase, mySQL, Vercel, CircleCI, CloudFlare</p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section>
      <h3 class="hilight-title mb-4">Projects</h3>
      <div class="row g-3">
        <projectCards
          v-for="(item, index) in projects"
          :key="index"
          :title="item.title.toString()"
          :description="item.description.toString()"
          :image="item.image.toString()"
          :link="item.link.toString()"
        ></projectCards>
      </div>
    </section>
  </div>

  <h4 class="text-center text-light" style="margin-top: 4em; margin-bottom: 2em">
    <b><span class="text-yellow-500">"</span></b> <span class="text-red-700">Don't</span>
    <span class="text-grey-500"> just learn to code</span>, Learn to create!
    <b><span class="text-yellow-500">"</span></b>
  </h4>
</template>
<script lang="ts">
import { ref } from "vue";
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";
import buttonPacks from "@/components/buttonPacks.vue";
import projectCards from "@/components/projectCards.vue";

import projectMcMart from "@/assets/McMart.jpeg";
import projectClassX from "@/assets/classX.png";
import projectLannawords from "@/assets/lannaword.png";

export default {
  name: "HomeView",
  components: {
    Typed,
    buttonPacks,
    projectCards
  },
  data() {
    const options: TypedOptions = {
      strings: ["Hello World", "Hello World, I'm <span class='text-yellow-600'>Codename_T</span>"],
      loop: false,
      typeSpeed: 50,
      cursorChar: "|",
      backDelay: 700
    };
    const projects: {
      image: String;
      title: String;
      description: String;
      link: String;
    }[] = [
      {
        image: "",
        title: "Blockify",
        description: "Simple Minecraft webshop platform",
        link: ""
      },
      {
        image: "",
        title: "VTuber.in.th",
        description: "Thai vtuber tracking",
        link: ""
      },
      {
        image: projectMcMart,
        title: "MC Mart",
        description: "Standalone Minecraft webshop",
        link: ""
      },
      {
        image: projectClassX,
        title: "Class X",
        description: "Online classroom solution",
        link: ""
      },
      {
        image: projectLannawords,
        title: "Lanna words",
        description: "Simple word gussing game",
        link: ""
      },
      {
        image: "",
        title: "LTC Guide",
        description: "Student handbook application",
        link: ""
      }
    ];
    const hilightName = ref(false);
    return { hilightName, options, projects };
  }
};
</script>
<style scoped>
.hero-section {
  height: 600px;
}
.hero-bg {
  background: linear-gradient(
      0deg,
      rgba(4, 28, 50, 1) 0%,
      rgba(4, 28, 50, 0.35) 50%,
      rgba(4, 28, 50, 0.6) 100%
    ),
    url("https://images.alphacoders.com/113/1138740.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.hilight-title {
  text-shadow: 0 0 10px #ccc, 2px 2px 2px rgba(206, 89, 55, 0);
}

.cursor-size {
  font-size: calc(38 * 1.3pt) !important;
  vertical-align: middle;
}
.greeting-text {
  font-size: 38pt !important;
}

.active-name {
  animation: fadeInText 1s linear, color 1s linear;
}

@keyframes fadeInText {
  from {
    color: #000;
  }
  to {
    color: white;
  }
}
</style>
