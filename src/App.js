import './App.css';
import { GlobalStyle, Title, Description, Location,Timeline } from "./styles";
import { ThemeProvider } from "styled-components";
import timelineElements  from './data'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const theme = {
  mainColor:"#4d516d",
  backgroundColor:"lavender", 
};
function App() {
  return(
    <div>
       <ThemeProvider theme ={theme}>
        <GlobalStyle />
      <div>
        <Timeline>My Timeline</Timeline>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return(
            <VerticalTimelineElement
              key={element.key}
              >
                <Title>{element.title}</Title>
                <Location>{element.location}</Location>
                <Description>{element.description}</Description>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      </div>
      </ThemeProvider>  
    </div>
  );
 
}

export default App;
