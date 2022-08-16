import { MainTitle } from '../MainTitle/MainTitle';
import { EventBoard } from '../EventBoard/EventBoard';
import eventsData from '../../eventsData.json';
import { Container } from './App.styled';

const App = () => {
  return (
    <div className="App">
      <Container>
        <MainTitle text="Intergalactic Conference" />
        <EventBoard events={eventsData} />
      </Container>
    </div>
  );
};

export { App };
