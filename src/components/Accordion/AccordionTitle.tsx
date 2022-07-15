import React, {FC} from 'react';

type PropsType = {
  title: string
};

export const AccordionTitle: FC<PropsType> = (props) => {
  return (
    <h3>{props.title}</h3>
  )
}