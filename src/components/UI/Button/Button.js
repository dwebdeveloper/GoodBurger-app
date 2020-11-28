import React from 'react';
import '../Button/Button.css'

const button = (props) => (
    <button classnName={[Button, props.btnType].join(' ')} onClick={props.clicked} > { props.children}</button >
);

export default button;