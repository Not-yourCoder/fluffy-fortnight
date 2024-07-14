import styled from "styled-components";
import { images } from "../../../constants/images";

export const Wrapper = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
export const Dot = styled.div`
  &:after {
    width: 14px;
    height: 14px;
    position: absolute;
    left: 49%;
    top: 49%;
    content: "";
    z-index: 9999;
    width: 12px;
    height: 12px;
    background: red;
    position: absolute;
    border-radius: 50%;
  }
`;
export const Clock = styled.div`
  height: 320px;
  width: 320px;
  position: relative;
  border: 8px solid #333;
  border-radius: 50%;
  background-image: url(${images.clockFace});
  background-size: cover;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 40px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset,
    rgba(0, 0, 0, 0.45) 0px 15px 50px -20px;
`;
export const HourHand = styled.div<{ rotation: number }>`
  height: 6px;
  width: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 90px;
    width: 6px;
    background: #333;
    position: absolute;
    bottom: 0;
    border-radius: 10px;
  }
`;

export const MinuteHand = styled.div<{ rotation: number }>`
  height: 6px;
  width: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 120px;
    width: 6px;
    background: white;
    border: 1px solid;
    position: absolute;
    bottom: 0;
    border-radius: 10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
  }
`;
export const SecondHand = styled.div<{ rotation: number }>`
  height: 6px;
  width: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(-${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 140px;
    width: 2px;
    background: red;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
  }
`;

