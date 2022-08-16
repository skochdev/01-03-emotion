import PropTypes from 'prop-types';
import { Event } from 'components/Event/Event';
import { Board } from './EventBoard.styled';

export const EventBoard = ({ events }) => {
  return (
    <Board>
      {events.map(({ name, location, speaker, time, type }) => {
        return (
          <li key={name}>
            <Event
              name={name}
              location={location}
              speaker={speaker}
              startDate={time.start}
              endDate={time.end}
              type={type}
            />
          </li>
        );
      })}
    </Board>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }).isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};
