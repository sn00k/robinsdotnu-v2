<template>
  <div>
    <img class="fullscreen-gif" src="https://media.giphy.com/media/l46C6sdSa5DVSJnLG/giphy.gif" />
    <div class="content">
      <section class="description">
        <h1>Hi, I'm Robin!</h1>
        <p><s>Fullstack</s>Software Developer from Sweden</p>
        <p>Schooled in C# .NET, currently <i>kind of</i> in love with Javascript and Vue.js. Worked with a bit of everything.</p>
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
  &:nth-child(2) {
    color: #4875b4
  }
}
.content {
  max-width: 50%;
  margin: 20px auto;
  @media (max-width: 1024px) {
    max-width: 80%;
  }
}
</style>
