import { formatEventStartDate, formatDuration } from 'functions/index';
import { iconSizes } from 'constants/index';
import PropTypes from 'prop-types';
import { ImLocation } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import {
  EventCard,
  EventTitle,
  EventInfo,
  EventInfoIcon,
  Chip,
} from './Event.styled';

export const Event = ({
  name,
  location,
  speaker,
  startDate,
  endDate,
  type,
}) => {
  const formattedStartDate = formatEventStartDate(startDate);
  const formattedDuration = formatDuration(startDate, endDate);
  return (
    <>
      <EventCard>
        <EventTitle>{name}</EventTitle>

        <EventInfo>
          <ImLocation size={iconSizes.md} />
          {location}
        </EventInfo>

        <EventInfo>
          <CgProfile size={iconSizes.md} />
          {speaker}
        </EventInfo>

        <EventInfo>
          <FaCalendarAlt size={iconSizes.md} />
          {formattedStartDate}
        </EventInfo>

        <EventInfo>
          <FaClock size={iconSizes.md} />
          Duration: {formattedDuration}
        </EventInfo>
        <Chip type={type}>{type}</Chip>
      </EventCard>
    </>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
