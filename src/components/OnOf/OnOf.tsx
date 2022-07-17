import s from './onOf.module.css'
import React, {FC} from 'react';

type PropsType = {
  isActive: boolean
};

export const OnOf: FC<PropsType> = (props) => {
  return (
    <div className={`${s.onOf} ${props.isActive && s.active}`}>
      <div className={s.onOf__btn}>ON</div>
      <div className={s.onOf__btn}>OFF</div>
      <div className={s.onOf__lamp}></div>
    </div>
  )
}