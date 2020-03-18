<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-stepper v-model="e1">
          <v-stepper-header v-show="false">
            <v-stepper-step :complete="e1 > 1" step="1"
              >Name of step 1</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2"
              >Name of step 2</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step step="3">Name of step 3</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  COVID-19 risk screening and testing</v-card-title
                >
                <v-card-text>
                  <p>
                    If you are interested in getting tested for COVID-19,
                    complete an online screener based on guidelines from public
                    health officials. Based on the responses you can determin
                    your risk level and connect you to the nearest center to get
                    tested and possible medical attention.
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 2">
                Continue
              </v-btn>

              <v-btn text>Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  How old are you?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-text-field
                      ref="age"
                      v-model="age"
                      :rules="[() => !!age || 'This field is required']"
                      :error-messages="errorMessages"
                      label="age"
                      placeholder="Age"
                      required
                    ></v-text-field>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 3">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 1">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Have you been coughing for the past 14 days?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="cough" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = cough === 'Yes' ? 4 : 5">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 2">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Are the cough dry or do you feel dryness in your throat while
                  coughing?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="dryCough" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 5">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 3">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="5">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Do you have Headaches?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="headache" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 6">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 4">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="6">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Do you have Runny Nose?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="runnyNose" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 7">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 5">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="7">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Do you have itchy or red eyes?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="itchyEye" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 8">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 6">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="8">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Are you sneezing?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="sneezing" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 9">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 7">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="9">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Do you have a Fever?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="fever" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 10">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 8">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="10">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Do you have a Sore throat?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="soreThroat" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 11">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 9">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="11">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Do you have a Muscle or join pain?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="musclePain" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 12">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 10">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="12">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Do you have a Difficulty in breathing?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="fever" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 13">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 11">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="13">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Do you have a Difficulty in breathing?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="fever" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 13">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 11">Back</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      e1: 1,
      errorMessages: '',
      age: null,
      cough: null,
      dryCough: null,
      headache: null,
      runnyNose: null,
      itchyEye: null,
      sneezing: null,
      fever: null,
      breathing: null,
      soreThroat: null,
      musclePain: null,
      address: null,
      city: null,
      country: null,
      cors: null
    }
  },
  mounted() {},
  methods: {
    async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          'foo@foo.foo',
          'test123456'
        )
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }
  }
}
</script>
