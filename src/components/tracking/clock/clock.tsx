import React, { useState } from 'react';
import { useTime } from '../../../hooks/useTime';
import * as S from './clock.style';
import SpeedSlider from '../slider';
import Share from '../share';
import Quotes from '../qoutes/Quotes';
import Order from '../../order/Order';



const Clock = () => {
  const [speed, setSpeed] = useState(1);
  const [timeLeft, setTimeLeft] = useState(120);
  const { hour, minute, second } = useTime(speed);


  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [speed]);
  return (
    <div className='h-screen'>
      {timeLeft > 0 ? (
        <S.Wrapper>
          <div className='p-2 w-80 flex justify-end rounded-full'>
            <Share speed={speed} setSpeed={setSpeed} time={timeLeft} setTime={setTimeLeft} />
          </div>
          <S.Clock>
            <S.Dot />
            <S.HourHand rotation={hour} />
            <S.MinuteHand rotation={minute} />
            <S.SecondHand rotation={second} />
          </S.Clock>
          <SpeedSlider speed={speed} setSpeed={setSpeed} />
          <div className='font-medium text-lg text-orange-500'>Time left: {formatTime(timeLeft)}</div>
          <Quotes />
        </S.Wrapper>
      ) : (
        <Order/>
      )}
    </div>
  );
};

export default Clock;
