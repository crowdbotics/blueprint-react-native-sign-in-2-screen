import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SignInForm2Data} from '../../components/auth';
import {SignIn2} from './signIn2.component';

export class SignIn2Container extends React.Component {
  static navigationOptions = {
    header: null,
  };

  navigationKey: string = 'SignIn2Container';

  onSignInPress = data => {
    this.props.navigation.goBack();
  };

  onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign Up 2',
    });
  };

  onForgotPasswordPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Forgot Password',
    });
  };

  render() {
    return (
      <SignIn2
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
      />
    );
  }
}
