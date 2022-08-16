import styled from '@emotion/styled';

export const EventCard = styled.div`
  position: relative;
  border: ${({ theme }) => `2px dashed  ${theme.colors.primaryText}`};
  padding: 8px;
  border-radius: 4px;
`;

export const EventTitle = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const EventInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${({ theme }) => `${theme.colors.primaryText}`};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  // nesting works like in SCSS
  svg {
    display: block;
    margin-right: 8px;
    color: ${({ theme }) => `${theme.colors.primaryText}`};

    &:hover,
    &:focus {
      color: ${({ theme }) => `${theme.colors.secondaryText}`};
    }
  }
`;

const chipBackgroundColor = ({ type, theme }) => {
  switch (type) {
    case 'free':
      return theme.colors.green;
    case 'paid':
      return theme.colors.blue;
    case 'vip':
      return theme.colors.red;
    default:
      return 'theme.colors.black';
  }
};

export const Chip = styled.span`
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 2px 4px;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => `${theme.colors.white}`};
  font-size: 12px;

  background-color: ${chipBackgroundColor};
`;
