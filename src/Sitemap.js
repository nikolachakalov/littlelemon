import React from 'react';
import { Anchor, Box, Footer, Text } from 'grommet';
import {ReactComponent as Logo} from './assets/Logo.svg';



const data = [
  ["Navigation", ["Home", "/"], ["About", "/"], ["Reserve a table","/reservations"], ["Menu", "/"]],
  ["Social Media Links", ["Facebook", "/"], ["Instagram", "/"], ["Yelp", "/"]]
];


const FooterAnchor = ({ ...rest }) => (
    <Anchor size="small" color="#788E76" {...rest} />
  );


const FooterContent = () => (
    <Box direction="row-responsive" gap="large">
      {data.map((item) => (
        <Box gap="small" key={item[0]}>
          <Text weight="bold" size="small" color="#5E6F5C">
            {item[0]}
          </Text>
          <Box>
            {[1, 2, 3].map((i) => (
              <FooterAnchor href={item[i][1]} key={item[i]}>{item[i][0]}</FooterAnchor>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );


  export const Sitemap = () => (

    <Box>
      <Footer background="brand" pad="large">
        <Box direction="row-responsive" gap="xsmall">
          <Box align="center" gap="small">
            <Logo />
          </Box>
        </Box>
        <FooterContent />
      </Footer>
    </Box>
  );

  export default Sitemap;
