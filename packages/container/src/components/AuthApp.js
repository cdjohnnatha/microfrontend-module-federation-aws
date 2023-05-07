import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'auth/AuthApp';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        if (history.location !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return (<div ref={ref} />);
}