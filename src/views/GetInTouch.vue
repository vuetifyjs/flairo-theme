<script setup lang="ts">
  import { useAppData } from '@/stores/mockup';
  import { useDisplay } from 'vuetify';
  
  const { mdAndUp } = useDisplay();
  const appData = useAppData();
  const name = ref('')
  const email = ref('')
  const website = ref('')
  const subject = ref('')
  const message = ref('')
</script>

<template>
  <Section
    id="get-in-touch"
    class="grey lighten-3"
    space="20"
  >
    <v-row align="start">
      <v-col
        cols="3"
        sm="6"
        class="px-12"
      >
        <Subheading
          class="font-weight-black primary--text"
          title="GET IN TOUCH"
          align="left"
        />
        <Body
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
          align="left"
        />
        <Subheading
          title="Contact Information"
          class="primary--text"
          align="left"
        />
        <Subtitle
          title="Company"
          weight="bold"
        />
        <Body
          space="2"
          text="Company Name A"
        />
        <Subtitle
          title="Email"
          weight="bold"
        />
        <Body
          space="2"
          :text="appData.contact.email.value"
        />
        <Subtitle
          title="Phone"
          weight="bold"
        />
        <Body
          space="2"
          :text="appData.contact.phone.value"
        />
      </v-col>
      <v-col
        cols="9"
        sm="6"
      >
        <v-row no-gutters>
          <v-col
            cols="12"
            md="6"
          >
            <TextField
              v-model="name"
              label="Name"
              :class="mdAndUp ? 'mr-1' : ''"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <TextField
              v-model="email"
              :class="mdAndUp ? 'ml-1' : ''"
              label="Email"
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col
            cols="12"
            md="6"
          >
            <TextField
              v-model="website"
              label="Website"
              :class="mdAndUp ? 'mr-1' : ''"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <TextField
              v-model="subject"
              :class="mdAndUp ? 'ml-1' : ''"
              label="Subject"
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-textarea
            v-model="message"
            label="Message"
            outlined
          />
        </v-row>
        <v-row no-gutters>
          <Btn
            color="primary"
            class="px-12"
            depressed
          >
            <span
              class="font-weight-bold"
              v-text="'Submit Message'"
            />
          </Btn>
        </v-row>
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
