<template>
  <v-layout column justify-center align-center>
    <div>
      <v-snackbar
        v-model="snackbar.switch"
        vertical
        top
        :color="snackbar.color"
      >
        {{ snackbar.text }}
        <v-btn dark text @click="snackbar.switch = false">
          Close
        </v-btn>
      </v-snackbar>
    </div>

    <v-flex xs12 sm8 md6>
      <v-card>
        <v-stepper v-model="e1">
          <ValidationObserver ref="testObserver" v-slot="{}">
            <form>
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
                        complete an online screener based on guidelines from
                        public health officials. Based on the responses you can
                        determine your risk level and connect you to the nearest
                        center to get tested and possible medical attention.
                      </p>
                    </v-card-text>
                  </v-card>

                  <v-btn color="primary" @click="e1 = 2">
                    Continue
                  </v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-card class="mb-12" color="lighten-1" style="width: 500px;">
                    <v-card-title class="headline">
                      How old are you?
                    </v-card-title>
                    <v-card-text>
                      <p>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Age"
                          rules="required|mustBeANumber"
                        >
                          <v-text-field
                            v-model="User.age"
                            :disabled="existingUser"
                            :error-messages="errors"
                            label="Age"
                            required
                            type="number"
                          ></v-text-field>
                        </ValidationProvider>
                      </p>
                    </v-card-text>
                  </v-card>

                  <v-btn color="primary" @click="next">
                    Next <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>

                  <v-btn text @click="back">Back</v-btn>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <v-card class="mb-12" color="lighten-1">
                    <v-card-title class="headline">
                      Have you been coughing for the past 14 days?
                    </v-card-title>
                    <v-card-text>
                      <p>
                        <v-radio-group
                          v-model="test.cough"
                          row
                          :mandatory="true"
                        >
                          <v-radio label="Yes" value="Yes"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                      </p>
                    </v-card-text>
                  </v-card>

                  <v-btn
                    color="primary"
                    @click="e1 = test.cough === 'Yes' ? 4 : 5"
                  >
                    Next <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>

                  <v-btn text @click="e1 = 2">Back</v-btn>
                </v-stepper-content>
                <v-stepper-content step="4">
                  <v-card class="mb-12" color="lighten-1">
                    <v-card-title class="headline">
                      Is your cough dry or do you feel dryness in your throat
                      while coughing?
                    </v-card-title>
                    <v-card-text>
                      <p>
                        <v-radio-group
                          v-model="test.dryCough"
                          row
                          :mandatory="true"
                        >
                          <v-radio label="Yes" value="Yes"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                      </p>
                    </v-card-text>
                  </v-card>

                  <v-btn color="primary" @click="e1 = 5">
                    Next <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>

                  <v-btn text @click="e1 = 3">Back</v-btn>
                </v-stepper-content>
                <v-stepper-content step="5">
                  <v-card class="mb-12" color="lighten-1" style="width: 531px;">
                    <v-card-title class="headline">
                      Do you have fever?
                    </v-card-title>
                    <v-card-text>
                      <p>
                        <v-radio-group
                          v-model="test.fever"
                          row
                          :mandatory="true"
                        >
                          <v-radio label="Yes" value="Yes"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                      </p>
                    </v-card-text>
                  </v-card>

                  <v-btn color="primary" @click="e1 = 7">
                    Next <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>

                  <v-btn text @click="e1 = 4">Back</v-btn>
                </v-stepper-content>
                <v-stepper-content step="7">
                  <v-card class="mb-12" color="lighten-1">
                    <v-card-title class="headline">
                      Do you have difficulty in breathing?
                    </v-card-title>
                    <v-card-text>
                      <p>
                        <v-radio-group
                          v-model="test.breathing"
                          row
                          :mandatory="true"
                        >
                          <v-radio label="Yes" value="Yes"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                      </p>
                    </v-card-text>
                  </v-card>

                  <v-btn color="primary" @click="e1 = 8">
                    Next <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>

                  <v-btn text @click="e1 = 6">Back</v-btn>
                </v-stepper-content>
                <v-stepper-content step="8">
                  <v-card class="mb-12" color="lighten-1">
                    <v-card-title class="headline">
                      Fever is body temperature above 37 degrees centigrade or
                      98.6 degrees Fahrenheit?
                    </v-card-title>
                    <v-card-text>
                      <p>
                        <v-radio-group
                          v-model="test.temp"
                          row
                          :mandatory="true"
                        >
                          <v-radio label="Yes" value="Yes"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                          <v-radio label="Not Sure" value=""></v-radio>
                        </v-radio-group>
                      </p>
                    </v-card-text>
                  </v-card>

                  <v-btn color="primary" @click="e1 = 9">
                    Next <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>

                  <v-btn text @click="e1 = 7">Back</v-btn>
                </v-stepper-content>
                <v-stepper-content step="9">
                  <v-card class="mb-12" color="lighten-1">
                    <v-card-title class="headline">
                      In the past 14 days have you or anyone you have come in
                      contact with traveled to China, Iran, UK, Italy, Spain,
                      USA or any country with over 1000 cases?
                    </v-card-title>
                    <v-card-text>
                      <p>
                        <v-radio-group
                          v-model="test.contact"
                          row
                          :mandatory="true"
                        >
                          <v-radio label="Yes" value="Yes"></v-radio>
                          <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                      </p>
                    </v-card-text>
                  </v-card>

                  <v-btn color="primary" @click="e1 = 10">
                    Next <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>

                  <v-btn text @click="e1 = 8">Back</v-btn>
                </v-stepper-content>
                <v-stepper-content step="10">
                  <v-card class="mb-12" color="lighten-1">
                    <v-card-title class="headline">
                      In the past 14 days have you or anyone you have come in
                      contact with had close contact with a confirmed case of
                      COVID-19 (coronavirus) infection?
                    </v-card-title>
                    <v-card-text>
                      <p>
                        <v-radio-group
                          v-model="test.infect"
                          row
                          :mandatory="true"
                        >
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
                  <div>
                    <v-card>
                      <v-card-title class="headline"
                        >Create new account?</v-card-title
                      >
                      <v-card-text
                        >Would you like to receive news, recommendations and
                        precautionary measures right in your inbox?</v-card-text
                      >
                    </v-card>

                    <v-btn
                      color="green darken-1"
                      text
                      @click="createAnonymousAccount"
                      >No</v-btn
                    >
                    <v-btn color="green darken-1" text>Yes</v-btn>
                  </div>
                </v-stepper-content>
                <v-stepper-content step="12">
                  <v-card class="mb-12" color="lighten-1">
                    <v-card-text>
                      <div class="text-center">
                        <v-img src="/high.png" contain width="300"></v-img>
                      </div>
                      <h4>
                        You are at high risk for COVID-19. Please do the
                        following:
                      </h4>

                      <h5>Stay calm</h5>
                      <p>
                        Isolate yourself from family and friends Call the
                        following Numbers and you will be told what to do next:
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
                        <v-img src="/mid.png" contain width="300"></v-img>
                      </div>
                      <h4>
                        You are at intermediate risk for COVID-19. Please do the
                        following:
                      </h4>

                      <h5>Stay calm</h5>
                      <h5>
                        Stay safe and healthy. Please follow the advice on
                        COVID19 prevention.
                      </h5>
                      <p>
                        Take this test again tomorrow
                      </p>
                      <p>
                        Isolate yourself from family and friends Call the
                        following Numbers and you will be told what to do next:
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
                <v-stepper-content step="14">
                  <v-card class="mb-12" color="lighten-1">
                    <v-card-text>
                      <div class="text-center">
                        <v-img src="/low.png" contain width="300"></v-img>
                      </div>
                      <h4>
                        You are at low risk for COVID-19. Please do the
                        following:
                      </h4>

                      <h5>
                        Stay safe and healthy. Please follow the advice on
                        COVID19 prevention.
                      </h5>
                      <p>
                        Take this test again tomorrow, Call the following
                        Numbers in case there is any issues or concerns:
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
            </form>
          </ValidationObserver>
        </v-stepper>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'

import { supportForLocalStorage } from '~/src/lib'

import { required } from 'vee-validate/dist/rules'

import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('mustBeANumber', {
  validate(value) {
    return typeof value !== 'number'
  },
  message: '{_field_} must be a number'
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      User: {
        id: null,
        age: null,
        coords: {
          latitude: null,
          longitude: null
        },
        tests: []
      },
      address: null,
      city: null,
      country: null,
      cors: null,
      snackbar: {
        switch: false,
        text: null,
        color: null
      },
      e1: 1,
      existingUser: false,
      errorMessages: '',
      test: {
        cough: null,
        dryCough: null,
        fever: null,
        breathing: null,
        temp: null,
        contact: null,
        infect: null,
        level: null,
        timeOfTest: Date.now()
      }
    }
  },
  mounted() {},
  methods: {
    async next() {
      const validated = await this.$refs.testObserver.validate()
      if (validated) {
        this.e1 += 1
      }
    },
    back() {
      this.e1 -= 1
    },
    snackbarAlert(msg, color) {
      this.snackbarMessage = msg
      this.color = color
      this.snackbar = true
    },
    submit() {
      this.e1 = 11
      this.submitQuestionnaire()
    },
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
    },
    async createAnonymousAccount() {
      if (this.test.cough === 'Yes') {
        level += 1
      }
      if (this.test.dryCough === 'Yes') {
        level += 2
      }
      if (this.test.fever === 'Yes') {
        level += 1
      }
      if (this.test.breathing === 'Yes') {
        level += 2
      }
      if (this.test.temp === 'Yes') {
        level += 2
      }
      if (this.test.contact === 'Yes') {
        level += 2
      }
      if (this.test.infect === 'Yes') {
        level += 2
      }
      let level = 0
      if (level < 4) {
        this.test.level = 'Low'
        this.e1 = 14
      } else if (level >= 4 && level <= 6) {
        this.test.level = 'Mid'
        this.e1 = 13
      } else if (level > 6) {
        this.test.level = 'High'
        this.e1 = 12
      }
      try {
        const LocalStorage = window.localStorage

        var newTest = this.test

        // Is this a returning user?
        const existingUser = LocalStorage.getItem('coronaApp_userId')
        console.log(existingUser, '--existing user-')
        if (existingUser !== null) {
          firebase
            .database()
            .ref('/users/' + existingUser + '/tests')
            .push(newTest)
        } else {
          const User = this.User

          const usersRef = firebase.database().ref('users/' + this.User.id) // Use location timestamp as anonymous user id

          usersRef.set(User)

          usersRef.on('value', (snapshot) => {
            supportForLocalStorage()

            // Save user id on local storage in order to identify a returning user
            // who has not created an account.
            LocalStorage.setItem('coronaApp_userId', snapshot.val().id)
          })
        }

        //this.next()
      } catch (error) {
        throw new Error(error)
      }
    },
    submitQuestionnaire() {
      this.snackbarAlert(
        'Allow location permission in order to get information on the infection rate within your vicinity',
        'primary'
      )
      if (process.browser) {
        if (!navigator.geolocation) {
          // Geolocation is not available on the client
          console.log('Unsupported browser')
        } else {
          // Geolocation is available on the client
          const { geolocation } = navigator
          const options = { enableHighAccuracy: true, maximumAge: 0 }
          geolocation.getCurrentPosition(
            ({ coords, timestamp }) => {
              const { latitude, longitude } = coords
              this.User.coords.latitude = latitude
              this.User.coords.longitude = longitude
              this.User.id = timestamp
              this.User.tests = [...[this.test]]
            },
            ({ code, message }) => {
              if (code) {
                throw new Error(
                  `---Attempt to fetch location information failed due to:  ${code} - ${message}`
                )
              }
            },
            options
          )
        }
      }
    }
  },
  created() {
    if (process.browser) {
      const LocalStorage = window.localStorage
      // Prefill age of existing user
      const existingUser = LocalStorage.getItem('coronaApp_userId')
      if (existingUser !== null) {
        this.existingUser = true
        firebase
          .database()
          .ref(`users/${existingUser}`)
          .once('value')
          .then((snapshot) => {
            const userAge = (snapshot.val() && snapshot.val().age) || ''
            this.User.age = userAge
          })
      }
    }
  }
}
</script>
