import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './src/screens/HomeScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import VerifyScreen from './src/screens/VerifyScreen';
// import Order from './src/screens/Order';
// import LoginScreen_2 from './src/screens/LoginScreen_2';
import ProductCard from './src/screens/ProductCard';
import SelectionColor from './src/screens/SelectionColor';



// Tạo Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductCard"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFC700',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'black',
            fontSize: 24,
          },

        }}
      >
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{ title: 'Forget Password' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="Verify" component={VerifyScreen} options={{ title: 'Verify' }} />
        <Stack.Screen name="Order" component={Order} options={{ title: 'Order' }} />
        <Stack.Screen name="Login_2" component={LoginScreen_2} options={{ title: 'Login_2' }} /> */}
        <Stack.Screen name="ProductCard" component={ProductCard} options={{ title: 'ProductCard' }} />
        <Stack.Screen name="SelectionColor" component={SelectionColor} options={{ title: 'SelectionColor' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
