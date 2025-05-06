//import './App.css';

import { Anchor, Avatar, Header, Nav, Box } from 'grommet';
import {ReactComponent as Logo} from './assets/Logo.svg';

const data = [["Home", "/"], ["Profile", "/"], ["About","/"], ["Menu", "/"], ["Reservations", "/reservations"], ["Order online", "/"], ["Login", "/"]];

const AppBar = (props) => (
 
  <Header background="brand" pad="medium" className="header-bar" elevation='medium' sticky='scrollup'>
  <Logo />
  <Avatar src={props.icon} />
  <Nav direction="row">
    <Box align="start" gap="medium" justify='evenly' pad="small" direction="row">
    {(data.map((item) =>
    <Anchor color="#788E76" label={item[0]} href={item[1]} key={item[0]} />))}
    </Box>
    </Nav>
  </Header>



);

export default AppBar;
