<template>
  <base-section
    id="our-team"
  >
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="Our Team"
        align="center"
      />
      <base-divider
        color="primary"
        align="center"
      />
      <base-body
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
        align="center"
      />
    </div>
    <v-row
      justify="center"
      align="center"
      class="px-10"
    >
      <template v-for="(employee, i) in teamMembers">
        <v-col
          :key="i"
          cols="6"
          md="3"
        >
          <base-team-member
            class="pa-3"
            v-bind="employee"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionOurTeam',
    data () {
      return {
        // Note: If you want to use local images in src/assets/, you will need to replace
        //   src: 'https://sample.com',
        // with
        //   src: require('@/assets/name-of-file.jpg'),
        teamMembers: [
          {
            title: 'CEO',
            name: 'Neil Barnett',
            socialLinks: [
              { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
              { link: 'https://twitter.com', icon: 'mdi-twitter' },
              { link: 'mailto:sample@example.com', icon: 'mdi-email' },
            ],
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Red&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=DarkBrown',
          },
          {
            title: 'COO',
            name: 'Sherri Cayne',
            socialLinks: [
              { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
              { link: 'https://twitter.com', icon: 'mdi-twitter' },
              { link: 'mailto:sample@example.com', icon: 'mdi-email' },
            ],
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Brown',
          },
          {
            title: 'CTO',
            name: 'Erica Baker',
            socialLinks: [
              { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
              { link: 'https://twitter.com', icon: 'mdi-twitter' },
              { link: 'mailto:sample@example.com', icon: 'mdi-email' },
            ],
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Tanned',
          },
          {
            title: 'CFO',
            name: 'Wesley Graves',
            socialLinks: [
              { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
              { link: 'https://twitter.com', icon: 'mdi-twitter' },
              { link: 'mailto:sample@example.com', icon: 'mdi-email' },
            ],
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Tongue&skinColor=Light',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
