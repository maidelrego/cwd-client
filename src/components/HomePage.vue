<template>
  <v-card class="mx-auto" flat>
    <v-parallax class="parallaxOpacity" src="../assets/parallax.jpg">
      <div class="textBox">
        <p class="headTextColor text-center">
          Campbell Wood Designs
        </p>
      </div>
    </v-parallax>
    <br>
    <br>

    <p class="text-center mt-5 aboutUstext">About Us</p>

    <v-card-text>
      <p class="aboutUsBody mr-5 ml-5">
        Campbell Wood Designs was founded in 2017. It is a Veteran and Family owned business.
        We are located in our hometown of Excelsior Springs, Missouri. The business was started when I built
        my wife a table for Christmas, and has just grown from there. I started with reclaimed pallet projects,
        and moved into building with fresh lumber. It is amazing that building Small furniture for my wife
        has turned into a business. I now specialize in sliding barn doors, and only build small furniture on the side.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

@media screen and (max-width: 540px) {
  .textBox {
    margin-left: 5%;
    margin-right: 5%;
    background-color: rgba(225, 225, 225, 0.60);
    opacity: 0.;
  }

  .headTextColor {
    font-family: 'Lobster Two';
    color: #827717;
    font-size: 3rem;
  }

  .aboutUstext {
    font-family: 'Lobster Two';
    color: #827717;
    font-size: 2rem;
  }

  .aboutUsBody {
    font-family: 'Lato';
    font-size: 16px;
    text-align: justify;
  }
}

@media screen and (min-width: 540px) {
  .textBox {
    margin-left: 15%;
    margin-right: 15%;
    background-color: rgba(225, 225, 225, 0.60);
  }

  .headTextColor {
    font-family: 'Lobster Two';
    color: #827717;
    font-size: 4rem;
  }

  .aboutUstext {
    font-family: 'Lobster Two';
    color: #827717;
    font-size: 3rem;
  }

  .aboutUsBody {
    font-family: 'Lato';
    font-size: 20px;
    text-align: justify;
  }
}

.parallaxOpacity {
  opacity: 0.9;
}
</style>
E0E0E0
