<template>
  <div>
    <img class="fullscreen-gif" src="https://media.giphy.com/media/l46C6sdSa5DVSJnLG/giphy.gif" />
    <div class="content">
      <section class="description">
        <h1>Hi, I'm Robin!</h1>
        <span><s>Fullstack</s>Software Developer from Sweden, schooled in C# .NET</span>
        <p>Here are some of the tools that I'm currently enjoying working with</p>
        <ul class="brands">
          <li><font-awesome-icon :icon="['fab', 'js-square']" size="2x" /></li>
          <li><font-awesome-icon :icon="['fab', 'vuejs']" size="2x" /></li>
          <li><font-awesome-icon :icon="['fab', 'react']" size="2x" /></li>
          <li><font-awesome-icon :icon="['fab', 'php']" size="2x" /></li>
          <li><font-awesome-icon :icon="['fab', 'docker']" size="2x" /></li>
          <li><font-awesome-icon :icon="['fab', 'apple']" size="2x" /></li>
        </ul>
        <p>Passionate about programming, technology, football, beer and this list is getting too long. Why don't you get in touch with me so we can talk more?</p>
      </section>
      <section class="contact">
        <a href="mailto:hello@robins.nu">
          <font-awesome-icon icon="envelope" size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/robin-nilsson-5248a64b" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
        </a>
        <a href="https://github.com/sn00k" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" size="2x" />
        </a>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
.fullscreen-gif {
  width: 100vw;
  height: 100vh;
  @media (max-width: 767px) {
    height: 50vh;
  }
}
.description {
  h1 {
    font-size: 48px;
  }
}
.contact a {
  color: #2c3e50;
  text-decoration: none;
  margin: 0 20px;
}
.content {
  width: 40%;
  max-width: 800px;
  margin: 20px auto;
  @media (max-width: 1024px) {
    max-width: 80%;
  }
}
.brands {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
</style>
