<template>
  <v-container
    id="home"
    class="fill-height text-center mx-0 px-0 pt-0"
    style="max-width: none"
    tag="section"
  >
    <base-banner
      heading="Ready to Stand Out?"
      align="left"
      body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
    >
      <base-btn
        class="text-none font-weight-medium"
        outlined
        block
      >
        Buy Now
      </base-btn>
    </base-banner>
    <base-banner
      heading="super flexible"
      body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      stacked
    >
      <base-btn
        class="text-none font-weight-medium"
        rounded
      >
        Buy Now
      </base-btn>
    </base-banner>
    <!-- Feature Cards -->
    <v-row justify="center">
      <base-feature
        icon="mdi-auto-fix"
        heading="Unlimited Colors"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      />
      <base-feature
        icon="mdi-flash"
        heading="Responsive Design"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      />
      <base-feature
        icon="mdi-recycle"
        heading="Awesome Sliders"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        outlined
        outline-color="black"
      />
      <base-feature
        icon="mdi-water"
        heading="Unlimited Colors"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      />
    </v-row>
    <v-row justify="center">
      <base-feature-alt
        heading="Friendly Support"
        icon="mdi-auto-fix"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
      <base-feature-alt
        heading="Responsive"
        outlined
        icon="mdi-sync mdi-rotate-270"
        avatar-color="primary"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
      <base-feature-alt
        heading="Awesome Sliders"
        icon="mdi-cog"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
      <base-feature-alt
        heading="Unlimited Colors"
        icon="mdi-water"
        outlined
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
    </v-row>
    <v-row justify="center">
      <base-feature-alt
        indented
        outlined
        heading="Friendly Support"
        icon="mdi-auto-fix"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
      <base-feature-alt
        indented
        outlined
        heading="Responsive"
        icon="mdi-sync mdi-rotate-270"
        avatar-color="black"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
      <base-feature-alt
        indented
        heading="Awesome Sliders"
        icon="mdi-cog"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
    </v-row>
    <v-row justify="center">
      <base-feature-alt
        indented
        rounded
        heading="Friendly Support"
        icon="mdi-auto-fix"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
      <base-feature-alt
        indented
        rounded
        heading="Responsive"
        icon="mdi-sync mdi-rotate-270"
        avatar-color="black"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
      <base-feature-alt
        indented
        rounded
        heading="Awesome Sliders"
        icon="mdi-cog"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
    </v-row>
    <v-row
      justify="center"
      class="pt-12"
    >
      <base-feature-card
        class="mx-3"
        icon="mdi-auto-fix"
        heading="Friendly Support"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
      <base-feature-card
        class="mx-3"
        icon="mdi-recycle"
        heading="Fusion Builder"
        outlined
        outline-color="white"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
      <base-feature-card
        class="mx-3"
        icon="mdi-water"
        heading="Unlimited Colors"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        :to="{ name: 'Home' }"
      />
    </v-row>
    <v-row justify="center">
      <base-feature
        tile
        icon="mdi-auto-fix"
        heading="Unlimited Colors"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      />
      <base-feature
        tile
        icon="mdi-flash"
        heading="Responsive Design"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      />
      <base-feature
        tile
        icon="mdi-recycle"
        heading="Awesome Sliders"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      />
      <base-feature
        tile
        icon="mdi-water"
        heading="Unlimited Colors"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      />
    </v-row>
    <v-row justify="center">
      <base-stat
        number="1458"
        text="Lines of Code"
        outlined
      />
      <base-stat
        number="768"
        text="Works"
      />
      <base-stat
        number="475"
        text="Cups of coffee"
        outlined
      />
      <base-stat
        number="83"
        text="Awards won"
      />
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Sink',

    data: () => ({

    }),
  }
</script>
