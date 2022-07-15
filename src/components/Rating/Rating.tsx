import React, {FC} from 'react';
import {Star} from './Star';

type PropsType = {
  value: number
};

export const Rating: FC<PropsType> = (props) => {
  return (
    <>
      <Star selected={true}/>
      <Star selected={true}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
    </>
  )
}