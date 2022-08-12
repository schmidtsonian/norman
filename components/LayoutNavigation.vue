<template>
  <div class="l-nav">
    <span class="l-nav__bg"></span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.l-nav {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  transform: translateY(-100vh);
  z-index: $z-index--layout - 1;

  transition-property: transform;
  transition-duration: 0s;
  transition-delay: 0.5s;
}

.l-nav__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: $color--black;
  clip-path: circle(0.0% at 100% 0);

  transition-property: clip-path;
  transition-duration: 0.5s;
  transition-timing-function: $outCubic;
}

.l-nav__svg-path {
  animation: animation-nav-svg 1.75s;
  // animation-timing-function: $inOutQuint;
  // animation-timing-function: linear;
  // animation-direction: alternate;
  animation-iteration-count: 0;
  animation-play-state: paused;
  animation-fill-mode: backwards;
}

.l-nav.is-active {
  transform: translateY(0px);
  transition-delay: 0s;
  .l-nav__bg {
    clip-path: circle(141.2% at 100% 0);
    transition-timing-function: $outQuint;
    transition-duration: 1s;
  }
}

@keyframes animation-nav-svg {
  0% {
    d: path("M0,294.5V400h600V294.5C600,294.5,76.5,284.6,0,294.5z");
  }
  // 25% {
  //   d: path("M 0,400 C 0,400 0,200 0,200 C 93.7129186602871,152.36363636363637 187.4258373205742,104.72727272727272 275,128 C 362.5741626794258,151.27272727272728 444.0095693779904,245.45454545454544 545,255 C 645.9904306220096,264.54545454545456 766.5358851674642,189.45454545454547 869,170 C 971.4641148325358,150.54545454545453 1055.846889952153,186.72727272727272 1148,201 C 1240.153110047847,215.27272727272728 1340.0765550239234,207.63636363636363 1440,200 C 1440,200 1440,400 1440,400 Z");
  // }
  // 33% {
  //   d: path("M600,193.3c0,0-216.1-27.1-303.4,0S0,193.3,0,193.3V400h600V193.3z");
  // }
  50% {
    d: path("M0,294.5V400h600V294.5C600,294.5,92.2-291.6,0,294.5z");
  }
  // 75% {
  //   d: path("M 0,400 C 0,400 0,200 0,200 C 117.59808612440187,191.39712918660285 235.19617224880375,182.79425837320574 326,194 C 416.80382775119625,205.20574162679426 480.8133971291867,236.2200956937799 565,252 C 649.1866028708133,267.7799043062201 753.5502392344497,268.32535885167465 860,258 C 966.4497607655503,247.67464114832532 1074.9856459330144,226.47846889952152 1172,215 C 1269.0143540669856,203.52153110047848 1354.5071770334928,201.76076555023923 1440,200 C 1440,200 1440,400 1440,400 Z");
  // }
  100% {
    d: path("M0,294.5V400h600V294.5C600,294.5,76.5,284.6,0,294.5z");
  }
}

</style>
