<script setup lang="ts">
  const getImgUrl = (imagePath : string) => new URL(`${imagePath}`, import.meta.url).href

  const teamMembers = ref([
    {
      title: 'CEO',
      name: 'Neil Barnett',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: getImgUrl('../assets/team/rana-sawalha-IhuHLIxS_Tk-unsplash.jpg'),
    },
    {
      title: 'COO',
      name: 'Sherri Cayne',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: getImgUrl('../assets/team/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'),
    },
    {
      title: 'CTO',
      name: 'Erica Baker',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: getImgUrl('../assets/team/dan-ROJFuWCsfmA-unsplash.jpg'),
    },
    {
      title: 'CFO',
      name: 'Wesley Graves',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: getImgUrl('../assets/team/brooke-cagle-wKOKidNT14w-unsplash.jpg'),
    },
  ])
</script>

<template>
  <Section
    id="our-team"
  >
    <div class="justify-center align-center">
      <Heading
        class="font-weight-bold"
        title="Our Team"
        align="center"
      />
      <Divider
        color="primary"
        align="center"
      />
      <Body
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
        align="center"
      />
    </div>
    <v-row
      justify="center"
      align="center"
      class="px-10"
    >
      <template v-for="(employee, _i) in teamMembers" :key="_i">
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <TeamMember v-bind="employee" />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
