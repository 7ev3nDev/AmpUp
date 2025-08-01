<template>
  <section>
    <h1>AmpUp</h1>
    <p>A bridge that connects Underground Bands, Venues, and Fans.</p>
    <div class="grid">
      <p>
        Find a new venue <span class="emphasize">anywhere</span> you go
      </p>
      <p>
        Discover a new band <span class="emphasize">anytime</span> you want
      </p>
      <p>
        Connect with your <span class="emphasize">local</span> music scene
      </p>
      <p>
        <span class="emphasize">Join</span> the community and help it grow
      </p>
      <p>
        <span class="emphasize">Share</span> your favorite bands and venues
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding-top: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  padding-bottom: 100px;

  & > h1 {
    font-size: 80px;
    font-weight: 700;
    color: #FC0;

    margin-bottom: 16px;
  }

  & > p {
    text-align: center;
    font-size: 1.2rem;
    max-width: 80%;
  }

  $items: 5;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;

    margin-top: 80px;

    width: 96%;
    max-width: 1000px;

    @for $i from 1 through $items {
      $col: if($i % 2 == 1, 2, 1);
      > *:nth-child(#{$i}) {
        grid-column: #{$col};
        grid-row: #{$i};
      }
    }

    & > p {
      font-size: 2.4rem;
      max-width: 380px;

      &:nth-child(2n+1) {
        text-align: right;
        margin-left: auto;
      }

      & > span.emphasize {
        color: #FC0;
        font-weight: 500;
        display: block;
      }
    }

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;

      row-gap: 60px;

      & > p {
        text-align: center !important;
        grid-column: 1 !important;
      }
    }
  }
}
</style>