import React from "react";

import { useStore } from "store/store";

export default () => {
  const { count, clear } = useStore();
  const countRef = React.useRef(null);
  React.useEffect(() => {
    if (countRef.current === null || count === 0) return;
    
    countRef.current.classList.add('-animate');

  }, [count]);

  const handleAnimationEnd = () => {
    if (countRef.current === null) return;

    countRef.current.classList.remove('-animate');
  }

  React.useEffect(() => {
    if (countRef.current === null) return;

    countRef.current.addEventListener('animationend', handleAnimationEnd);
    return () => {
      countRef.current.removeEventListener('animationend', handleAnimationEnd);
    }
  }, []);
  
  return (
    <fieldset className={`header mf-wrap`}>
      <legend>
        <span className="mf">I am a <strong>Header</strong> component</span>
      </legend>
      <div className="title"><span>le</span>Shop</div>
      <div className="cart">
        <div className="cart-count" ref={countRef}>
          {count}
        </div>

        <button
          onClick={clear}
          className="button"
        >
          abandon <strong>cart</strong>
        </button>
      </div>
    </fieldset>
  );
};
