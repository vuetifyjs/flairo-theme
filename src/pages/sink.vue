<script setup lang="ts">
  const skills = ref<{ 
    name: string
    value: number 
  }[]>(
    [
      { name: 'Vue.js', value: 100 },
      { name: 'Python', value: 90 },
      { name: 'Javascript', value: 100 },
      { name: 'Node', value: 80 },
      { name: 'Swift', value: 50 },
    ]
  )

  const teamSocialLinks = ref<{ 
    link: string
    icon: string 
  }[]>(
    [
      { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
      { link: 'https://twitter.com', icon: 'mdi-twitter' },
      { link: 'mailto:sample@example.com', icon: 'mdi-email' },
    ]
  )

  const planFeatures = ref<string[]>(
    [
      'Wordpress',
      'HTML5 & CSS3',
      'PSD Files',
      'Unlimited Support',
    ]
  )

  const getImgUrl = (imagePath: string) => new URL(`${imagePath}`, import.meta.url).href;

</script>

<template>
  <Section id="sink" space="16">
  <v-container
    id="home"
    class="fill-height text-center mx-0 px-0 pt-0"
    style="max-width: none"
    tag="section"
  >
    <v-row justify="start">
      <template v-for="skill in skills" :key="skill.name">
        <v-col
          cols="6"
        >
          <SkillMeter
            class="px-3"
            color="primary"
            rounded
            :skill="skill.name"
            :value="skill.value"
          />
        </v-col>
      </template>
    </v-row>
    <!-- Feature Cards -->
    <v-row justify="center">
      <Feature
        icon="mdi-auto-fix"
        title="Unlimited Colors"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        max-width="400px"
      />
      <Feature
        icon="mdi-flash"
        title="Responsive Design"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        max-width="400px"
      />
      <Feature
        icon="mdi-recycle"
        title="Awesome Sliders"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        max-width="400px"
        outlined
        outlineColor="black"
      />
      <Feature
        icon="mdi-water"
        title="Unlimited Colors"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        max-width="400px"
      />
    </v-row>
    <v-row justify="center">
      <Testimony
        :src="getImgUrl('../assets/testimony/testimony-1.jpg')"
        :background-src="getImgUrl('../assets/background-light.png')"
        :customer="{ review: 'Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima.', name: 'Sample Name', title: 'New Customer' }"
      />
      <Testimony
        :src="getImgUrl('../assets/testimony/testimony-3.jpg')"
        :customer="{ review: 'Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima.', name: 'Sample Name', title: 'New Customer' }"
      />
    </v-row>
    <v-row justify="center" style="margin-top: 10px;">
      <FeatureAlt
        size="text-h6"
        title="Friendly Support"
        icon="mdi-auto-fix"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        to="/"
      />
      <FeatureAlt
        size="text-h6"
        title="Responsive"
        outlined
        icon="mdi-sync mdi-rotate-270"
        avatar-color="primary"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        to="/"
      />
      <FeatureAlt
        size="text-h6"
        title="Awesome Sliders"
        icon="mdi-cog"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        to="/"
      />
      <FeatureAlt
        size="text-h6"
        title="Unlimited Colors"
        icon="mdi-water"
        outlined
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        to="/"
      />
    </v-row>
    <v-row
      justify="center"
      class="pa-3"
      style="width: 100% ;"
    >
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <TeamMember
          title="CEO"
          name="Neil Barnett"
          :social-links="teamSocialLinks"
          :src="getImgUrl('../assets/team/rana-sawalha-IhuHLIxS_Tk-unsplash.jpg')"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <TeamMember
          title="COO"
          name="Sherri Cayne"
          :social-links="teamSocialLinks"
          :src="getImgUrl('../assets/team/christopher-campbell-rDEOVtE7vOs-unsplash.jpg')"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <TeamMember
          title="CTO"
          name="Erica Baker"
          :social-links="teamSocialLinks"
          :src="getImgUrl('../assets/team/dan-ROJFuWCsfmA-unsplash.jpg')"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <TeamMember
          title="CFO"
          name="Wesley Graves"
          :social-links="teamSocialLinks"
          :src="getImgUrl('../assets/team/brooke-cagle-wKOKidNT14w-unsplash.jpg')"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <FeatureAlt
        size="text-h5"
        outlined
        title="Friendly Support"
        icon="mdi-auto-fix"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        max-width="370px"
        to="/"
      />
      <FeatureAlt
        size="text-h5"
        outlined
        title="Responsive"
        icon="mdi-sync mdi-rotate-270"
        avatar-color="black"
        max-width="370px"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        to="/"
      />
      <FeatureAlt
        size="text-h5"
        title="Awesome Sliders"
        icon="mdi-cog"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        max-width="370px"
        to="/"
      />
    </v-row>
    <v-row justify="center">
      <PricingPlan
        size="text-h5"
        class="mx-5 my-1"
        price="$59.99"
        frequency="month"
        title="Basic Plan"
        subtitle="Starting at"
        :features="planFeatures"
      >
        <v-btn
          color="primary"
          depressed
          large
          class="px-12 mx-auto"
        > Order Now </v-btn>
      </PricingPlan>
      <PricingPlan
        size="text-h5"
        class="mx-5 my-1"
        price="$99.99"
        frequency="month"
        title="Pro Plan"
        subtitle="Starting at"
        :features="planFeatures"
      >
        <v-btn
          color="primary"
          depressed
          large
          class="px-12 mx-auto"
        > Order Now </v-btn>
      </PricingPlan>
      <PricingPlan
        size="text-h5"
        class="mx-5 my-1"
        price="$999.99"
        frequency="month"
        title="Enterprise Plan"
        subtitle="Starting at"
        :features="planFeatures"
      >
        <v-btn
          color="primary"
          depressed
          large
          class="px-12 mx-auto"
        > Order Now </v-btn>
      </PricingPlan>
    </v-row>
    <v-row justify="center">
      <FeatureAlt
        rounded
        size="text-h5"
        title="Friendly Support"
        icon="mdi-auto-fix"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        max-width="400px"
        to="/"
      />
      <FeatureAlt
        rounded
        size="text-h5"
        title="Responsive"
        icon="mdi-sync mdi-rotate-270"
        avatar-color="black"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        max-width="400px"
        to="/"
      />
      <FeatureAlt
        rounded
        size="text-h5"
        title="Awesome Sliders"
        icon="mdi-cog"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        max-width="400px"
        to="/"
      />
    </v-row>
    <v-row
      justify="center"
      class="pt-12"
    >
      <FeatureCard
        class="mx-3 mt-12"
        icon="mdi-auto-fix"
        heading="Friendly Support"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        to="/"
      />
      <FeatureCard
        class="mx-3 mt-12"
        icon="mdi-recycle"
        heading="Fusion Builder"
        outlined
        outline-color="white"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        to="/"
      />
      <FeatureCard
        class="mx-3 mt-12"
        icon="mdi-water"
        heading="Unlimited Colors"
        body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
        to="/"
      />
    </v-row>
    <v-row justify="center">
      <Feature
        tile
        icon="mdi-auto-fix"
        title="Unlimited Colors"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      />
      <Feature
        tile
        icon="mdi-flash"
        title="Responsive Design"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      />
      <Feature
        tile
        icon="mdi-recycle"
        title="Awesome Sliders"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      />
      <Feature
        tile
        icon="mdi-water"
        title="Unlimited Colors"
        text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
      />
    </v-row>
    <v-row justify="center">
      <Stat
        statNumber="1458"
        text="Lines of Code"
        :outlined=true
      />
      <Stat
        statNumber="768"
        text="Works"
      />
      <Stat
        statNumber="475"
        text="Cups of coffee"
        :outlined=true
      />
      <Stat
        statNumber="83"
        text="Awards won"
      />
    </v-row>
  </v-container>
  </Section>
</template>
