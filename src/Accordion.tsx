import React, {FC} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type PropsType = {};

export const Accordion: FC<PropsType> = (props) => {
  return (
    <>
      <AccordionTitle/>
      <AccordionBody/>
    </>
  )
}