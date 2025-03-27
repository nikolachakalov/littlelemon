
import React from 'react';
import { Button, Heading, Paragraph, Grid, Box, Image } from 'grommet';
import {Cafeteria} from 'grommet-icons';

export const Hero = (props) => (
  <>
      <Heading>{props.title}</Heading>
      <Grid
        columns={{count: props.image ? 2 : 1, size: "auto"}}
        height="auto"
        gap="large"
        align='center'
        border={props.border}>

        

          <Box responsive="true">

          <Paragraph 
            fill="true" 
            size={props.size}>
            {props.body}
          </Paragraph>

          {props.button &&
          <Button 
            icon={<Cafeteria size="medium" />} 
            pad={{horizontal: "medium", vertical:"small"}} 
            primary label="Reserve a table" 
            alignSelf='start'/>
          }

          </Box>

          {props.image &&
            <Box fill="horizontal" responsive="true" height="300px">
              <Image 
                fit="cover" 
                src={props.url}/>
            </Box>
            }

      </Grid>
      </>
);

export default Hero;