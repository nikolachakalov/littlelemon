//import './App.css';

import { Anchor, Avatar, Header, Nav, Box } from 'grommet';
import {ReactComponent as Logo} from './assets/Logo.svg';

const data = ["Home", "Profile", "About", "Menu", "Reservations", "Order online", "Login"];

const AppBar = (props) => (
  <Header background="brand" pad="medium">
      <Logo />
  <Avatar src={props.icon} />
  <Nav direction="row">
    <Box align="start" gap="medium" justify='evenly' pad="small" direction="row">
    {(data.map((item) =>
    <Anchor color="#788E76" label={item} href="#" key={item} />))}
    </Box>
    </Nav>
  </Header>



);

export default AppBar;
