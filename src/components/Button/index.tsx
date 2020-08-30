import React from 'react';

import * as S from './styles';

  type Buttonprops = {
    color: string;
    radius: string;
    textColor: string;
    eventBackground: string;
    eventColor: string;
    label: string;
    size: number;
  };

  const defaultProps = {
    color: '#32917B',
    label: 'Adicionar à sacola',
    radius: '4px',
    eventBackground: '#3FB79B',
    eventColor: '#fff',
    textColor: '#fff',
    size: 12,
  };

  const index = ({
    label,
    color,
    radius,
    textColor,
    eventBackground,
    eventColor,
    size,
    ...props
  }: Buttonprops) => {
    return (
      <S.Button
        color={color}
        radius={radius}
        size={size}
        textColor={textColor}
        eventBackground={eventBackground}
        eventColor={eventColor}
        {...props}
      >
        {label}
      </S.Button>
    );
  };

index.defaultProps = defaultProps;

export default index;
