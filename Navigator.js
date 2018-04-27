import  { StackNavigator } from 'react-navigation'
import Register from './Containers/Auth/Register'
import Login from './Containers/Auth/Login'
import Display from './Containers/Notes/Display'
export default StackNavigator({
    Login: {
      screen: Login,
    },
    Register:{
        screen:Register
    },
    Display:{
        screen:Display
    }
  });
  