<template>
  <div>
    <section class="hero">
      <img class="fullscreen-gif" src="https://media.giphy.com/media/l46C6sdSa5DVSJnLG/giphy.gif" alt="Hackerman gif montage" />
      <div class="arrow bounce">
        <a href="#" v-scroll-to="'.content'"><font-awesome-icon icon="arrow-down" size="2x" /></a>
      </div>
    </section>
    <div class="content">
      <section class="description">
        <h1>Hi, I'm Robin!</h1>
        <span><s>Fullstack</s>Software Developer from Sweden, schooled in C# .NET</span>
        <p>Here are some of the tools that I'm currently enjoying working with</p>
        <ul class="brands">
          <li><font-awesome-icon :icon="['fab', 'js-square']" size="2x" /><span class='sr-only'>Javascript</span></li>
          <li><font-awesome-icon :icon="['fab', 'vuejs']" size="2x" /><span class='sr-only'>Vue.js</span></li>
          <li><font-awesome-icon :icon="['fab', 'react']" size="2x" /><span class='sr-only'>React.js</span></li>
          <li><font-awesome-icon :icon="['fab', 'php']" size="2x" /><span class='sr-only'>PHP</span></li>
          <li><font-awesome-icon :icon="['fab', 'docker']" size="2x" /><span class='sr-only'>Docker</span></li>
          <li><font-awesome-icon :icon="['fab', 'apple']" size="2x" /><span class='sr-only'>Apple</span></li>
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
$text-standard-black: #2c3e50;
.fullscreen-gif {
  width: 100vw;
  height: 100vh;
  position: relative;
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
  color: $text-standard-black;
  text-decoration: none;
  margin: 0 20px;
}
.content {
  width: 40%;
  max-width: 800px;
  margin: 20px auto;
  @media (max-width: 1024px) {
    width: 80%;
  }
}
.brands {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  width: 60%;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 100%;
  }
}
.sr-only {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.arrow {
  text-align: center;
  margin: 8% 0;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  @media (max-width: 767px) {
    display: none;
  }
}
.arrow a {
  color: whitesmoke;
  text-decoration: none;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
