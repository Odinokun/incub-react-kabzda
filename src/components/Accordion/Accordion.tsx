import React, {FC} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type PropsType = {
  title: string
  collapsed: boolean
};

export const Accordion: FC<PropsType> = (props) => {
  return (
    <>
      <AccordionTitle title={props.title}/>
      {!props.collapsed && <AccordionBody/>}
    </>
  )
}