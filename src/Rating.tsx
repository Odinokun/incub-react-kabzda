import React, {FC} from 'react';
import {Star} from './Star';

type PropsType = {};

export const Rating: FC<PropsType> = (props) => {
  return (
    <>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </>
  )
}