<template>
  <section id="hero">
    <p align="center">
      <img class="site-logo" src="/logo.png" alt="Hongbusi - The more you know, the more you don't know.">
      <br>
    </p>
    <h1 class="tagline">
      洪布斯
    </h1>
    <p class="description">知道的越多，不知道的越多。</p>

    <p class="actions">
      <a class="get-started" href="/javascript/browser">
        Get Started
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
        >
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
        </svg>
      </a>
      <a class="setup" href="https://github.com/Hongbusi" target="_blank">
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          width="15"
          height="15"
          viewBox="0 0 24 24"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
        GitHub
      </a>
    </p>
  </section>
</template>

<style scoped>
section {
  padding: 42px 32px;
}
#hero {
  padding: 96px 32px;
  text-align: center;
}
.site-logo {
  max-width: 180px;
}
.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}
.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}
.actions .get-started {
  font-weight: 600;
  background-color: var(--vt-c-green);
  color: #fff;
  margin-right: 18px;
}
.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}
.dark .actions .get-started {
  color: var(--vt-c-indigo);
}
.actions .get-started:hover {
  background-color: var(--vt-c-green-dark);
  transition-duration: 0.2s;
}
.actions .get-started:hover .icon {
  transform: translateX(2px);
}
.dark .actions .get-started:hover {
  background-color: var(--vt-c-green-light);
}
.actions .setup {
  color: var(--vt-c-text-code);
}
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}
@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}
@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}
@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
}
@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
