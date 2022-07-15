import React, {FC} from 'react';

type PropsType = {
  title: string
};

export const PageTitle: FC<PropsType> = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}