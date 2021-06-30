import React from "react";

import style from './ListElem.module.css';

const ListElem = (props: any) => {
  return (
    <li
      key={props.index}
      className={style.wrapper}
    >{props.title}</li>
  );
}

export default ListElem;