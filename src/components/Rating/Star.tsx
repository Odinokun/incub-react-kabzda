import React, {FC} from 'react';

type PropsType = {
  selected: boolean
};

export const Star: FC<PropsType> = (props) => {
  return (
    <span>{props.selected ? <b>Star </b> : 'Star '}</span>
  )
}