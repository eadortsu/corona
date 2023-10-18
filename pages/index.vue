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
                  COVID-19 Risk Screening and Testing</v-card-title
                >
                <v-card-text>
                  <p>
                    If you are interested in getting tested for COVID-19,
                    complete an online screener based on guidelines from public
                    health officials. Based on the responses you can determine
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
              <v-card class="mb-12" color="lighten-1" style="width: 500px;">
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
              <v-card class="mb-12" color="lighten-1" style="width: 531px;">
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

              <v-btn color="primary" @click="e1 = 7">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 4">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="7">
              <v-card class="mb-12" color="lighten-1">
                <v-card-title class="headline">
                  Do you have a Difficulty in breathing?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="breathing" row :mandatory="true">
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
                  Fever is body temperature above 37 degrees centigrade or 98.6
                  degrees Fahrenheit?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="temp" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                      <v-radio label="Not Sure" value=""></v-radio>
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
                  In the past 14 days have you or anyone you have come in
                  contact with traveled to China, Iran, UK, Italy, Spain, USA or
                  any country with over 1000 cases?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="contact" row :mandatory="true">
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
                  In the past 14 days have you or anyone you have come in
                  contact with had close contact with a confirmed case of
                  COVID19 (coronavirus) infection?
                </v-card-title>
                <v-card-text>
                  <p>
                    <v-radio-group v-model="infect" row :mandatory="true">
                      <v-radio label="Yes" value="Yes"></v-radio>
                      <v-radio label="No" value="No"></v-radio>
                    </v-radio-group>
                  </p>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="submit">
                Continue
              </v-btn>

              <v-btn text @click="e1 = 9">Back</v-btn>
            </v-stepper-content>
            <v-stepper-content step="11">
              <v-card class="mb-12" color="lighten-1">
                <v-card-text>
                  <div class="text-center">
                    <v-img src="/high.png" contain width="300"></v-img>
                  </div>
                  <h4>
                    You are at high risk for COVID-19. Please do the following:
                  </h4>

                  <h5>Stay calm</h5>
                  <p>
                    Isolate yourself from family and friends Call the following
                    Numbers and you will be told what to do next:
                  </p>
                  <p>For Ghana: +233 55 843 9868/+233 50 949 7700</p>
                  <p>
                    For Nigeria: 08000CORONA 08023169485, 08033565529,
                    08052817243
                  </p>

                  <p>For Kenya: 0729 471414 and 0732 353535</p>

                  <p>For Gambia: 1025</p>

                  <p>For Cameroon: 1510</p>
                </v-card-text>
              </v-card>
            </v-stepper-content>
            <v-stepper-content step="12">
              <v-card class="mb-12" color="lighten-1">
                <v-card-text>
                  <div class="text-center">
                    <v-img src="/mid.png" contain width="300"></v-img>
                  </div>
                  <h4>
                    You are at intermediate risk for COVID-19. Please do the
                    following:
                  </h4>

                  <h5>Stay calm</h5>
                  <h5>
                    Stay safe and healthy. Please follow the advice on COVID19
                    prevention.
                  </h5>
                  <p>
                    Take this test again tomorrow
                  </p>
                  <p>
                    Isolate yourself from family and friends Call the following
                    Numbers and you will be told what to do next:
                  </p>
                  <p>For Ghana: +233 55 843 9868 / +233 50 949 7700</p>
                  <p>
                    For Nigeria: 08000CORONA 08023169485, 08033565529,
                    08052817243
                  </p>

                  <p>For Kenya: 0729 471414 and 0732 353535</p>

                  <p>For Gambia: 1025</p>

                  <p>For Cameroon: 1510</p>
                </v-card-text>
              </v-card>
            </v-stepper-content>
            <v-stepper-content step="13">
              <v-card class="mb-12" color="lighten-1">
                <v-card-text>
                  <div class="text-center">
                    <v-img src="/low.png" contain width="300"></v-img>
                  </div>
                  <h4>
                    You are at low risk for COVID-19. Please do the following:
                  </h4>

                  <h5>
                    Stay safe and healthy. Please follow the advice on COVID19
                    prevention. Ware a nose marsk.
                  </h5>
                  <p>
                    Take this test again tomorrow, Call the following Numbers in
                    case there is any issues or concerns:
                  </p>
                  <p>For Ghana: +233 55 843 9868 / +233 50 949 7700</p>
                  <p>
                    For Nigeria: 08000CORONA 08023169485, 08033565529,
                    08052817243
                  </p>

                  <p>For Kenya: 0729 471414 and 0732 353535</p>

                  <p>For Gambia: 1025</p>

                  <p>For Cameroon: 1510</p>
                </v-card-text>
              </v-card>
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
      fever: null,
      breathing: null,
      address: null,
      city: null,
      country: null,
      cors: null,
      temp: null,
      contact: null,
      infect: null,
      level: null
    }
  },
  mounted() {},
  methods: {
    submit() {
      let level = 0
      if (this.cough === 'Yes') {
        level += 1
      }
      if (this.dryCough === 'Yes') {
        level += 2
      }
      if (this.fever === 'Yes') {
        level += 1
      }
      if (this.breathing === 'Yes') {
        level += 2
      }
      if (this.temp === 'Yes') {
        level += 2
      }
      if (this.contact === 'Yes') {
        level += 2
      }
      if (this.infect === 'Yes') {
        level += 2
      }
      if (level < 4) {
        this.level = 'Low'
        this.e1 = 13
      } else if (level >= 4 && level <= 6) {
        this.level = 'Mid'
        this.e1 = 12
      } else if (level > 6) {
        this.level = 'High'
        this.e1 = 11
      }
    },
  }
}
</script>
