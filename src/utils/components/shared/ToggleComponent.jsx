import React from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

const ToggleComponent = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-accent' : 'bg-white'
      } relative inline-flex h-6 w-10 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-5 bg-accent ' : 'translate-x-1 bg-white '
        } inline-block h-4 w-4 transform rounded-full transition`}
      />
    </Switch>
  );
};

export default ToggleComponent;
