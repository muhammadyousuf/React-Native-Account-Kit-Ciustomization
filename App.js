/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from 'react';


import RNAccountKit from 'react-native-facebook-account-kit'
import {
  Text,
} from 'react-native';

export default class App extends Component {
  componentDidMount() {
    RNAccountKit.configure({
      responseType: 'code', // 'token' by default,
      // titleType: 'login',
      // initialAuthState: '',
      // initialEmail: 'some.initial@email.com',
      initialPhoneCountryPrefix: '+92', // autodetected if none is provided
      // initialPhoneNumber: '123-456-7890',
      // facebookNotificationsEnabled: true|false, // true by default
      // readPhoneStateEnabled: true|false, // true by default,
      // countryWhitelist: ['AR'], // [] by default
      // countryBlacklist: ['US'], // [] by default
      defaultCountry: 'PK',
      // theme: {
      //   // for iOS only, see the Theme section
      // },
      // viewControllerMode: 'show'|'present', // for iOS only, 'present' by default
      // getACallEnabled: true|false,
      // setEnableInitialSmsButton: true|false, // true by default
    })

    // Shows the Facebook Account Kit view for login via SMS
    RNAccountKit.loginWithPhone()
      .then((token) => {
        if (!token) {
          console.log('Login cancelled')
        } else {
          console.log(`Logged with phone. Token: ${token}`)
        }
      })
  }
  render() {
    return (
      <Fragment>
        <Text>
          Login Suceessfull
      </Text>

      </Fragment>
    );
  }
};

