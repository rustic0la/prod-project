import React, { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui';

export const BugButton: FC = () => {
  const [error, setError] = useState(false);

  const throwError = () => setError(true);
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={throwError}>Throw Error</Button>;
};
