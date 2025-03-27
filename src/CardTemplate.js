import { Card, CardHeader, CardBody, Heading, Paragraph, Image, Box  } from 'grommet';



const CardTemplate = (props) => {
    return (
      <Card>
        <CardHeader pad="medium">
          <Heading level={2} margin="none">
            {props.title}
          </Heading>
        </CardHeader>
        <CardBody pad="medium">
        <Box height="medium" width="medium">
          <Image fit="cover" src={props.link} />
        </Box>
          <Paragraph>
            {props.body}
          </Paragraph>
        </CardBody>
      </Card>
    );
  };

export default CardTemplate;