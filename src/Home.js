import Hero from "./Hero.js";
import CardTemplate from "./CardTemplate.js";
import Sitemap from "./Sitemap.js";
import { Page, PageContent, PageHeader, Grid, Carousel, Box, Image } from 'grommet';
import "@fontsource/inter/300.css"; // Defaults to weight 400





function Home() {
  return (

    <Page>
      <PageContent>
        <Hero
        size="medium"
        button="true"
        image="true"
        url="https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" 
        title="Little Lemon"
        link="/reservations"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo
        gravida tincidunt. Nunc fringilla blandit tortor, id accumsan nisi
        dictum quis. Aenean porttitor at mi id semper. Donec mattis bibendum
        leo, interdum ullamcorper lectus ultrices vel. Fusce nec enim faucibus
        nunc porta egestas. Fusce dapibus lobortis tincidunt."/>
      </PageContent>
      <PageContent>
      <PageHeader title="Specials" />
        <Grid 
          columns="medium" 
          gap="large" 
          pad={{ bottom: "large" }}>
      <CardTemplate 
        title="Greek salad" 
        body="Try our delicious Greek salad with fresh tomatoes and homegrown cucumbers. The perfect dish for a warm and sunny day."
        link="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     <CardTemplate 
        title="Greek salad" 
        body="Try our delicious Greek salad with fresh tomatoes and homegrown cucumbers. The perfect dish for a warm and sunny day."
        link="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     <CardTemplate 
        title="Greek salad" 
        body="Try our delicious Greek salad with fresh tomatoes and homegrown cucumbers. The perfect dish for a warm and sunny day."
        link="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </Grid>
      </PageContent>

      <PageContent>
      <PageHeader title="Testimonials" />
      <Grid
        columns="medium"
        gap="large"
        pad={{ bottom: "large" }}>
        <CardTemplate
        title="John Smith"
        body="Little Lemon is my secret spot in my neighbourhood, that all the locals go to. A great restaurant with top notch service. The food is authentic and delicious."
        link="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <CardTemplate
        title="John Smith"
        body="Little Lemon is my secret spot in my neighbourhood, that all the locals go to. A great restaurant with top notch service. The food is authentic and delicious."
        link="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/><CardTemplate 
        title="John Smith"
        body="Little Lemon is my secret spot in my neighbourhood, that all the locals go to. A great restaurant with top notch service. The food is authentic and delicious."
        link="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </Grid>
      </PageContent>

      <PageContent>
      <PageHeader title="About" />

      <Grid
        columns={{count:2, size: "auto" }}
        width="auto"
        height="auto"
        gap="xlarge"
        align="center"
        margin={{left: "150px", right: "150px", bottom:"50px"}}
      >
      <Box
        width="auto"
        height="300px"
      >

        <Hero
        title="Little Lemon"
        size="medium"
        body="The greatest restaurant you have never seen. The greatest restaurant you have never seen.The greatest restaurant you have never seen.The greatest restaurant you have never seen.The greatest restaurant you have never seen.The greatest restaurant you have never seen." 
        />

      </Box>

      <Box
        width="auto"
        height="300px"
        responsive="true"
        alignContent="center"
        >

        <Carousel
        width="300px"
        height="inherit"
        initialChild={2}
        overflow="hidden"
        fill
      >
        <Box fill align="center" justify="center" >
          <Image fit="cover" src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Box>
        <Box fill align="center" justify="center">
          <Image fit="cover" src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Box>
        <Box fill align="center" justify="center">
          <Image fit="cover" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Box>
      </Carousel>
      </Box>
      </Grid>
      </PageContent>


      <Sitemap />
    </Page>
 
  );
}

export default Home;
