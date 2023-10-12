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
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-10 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-5' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default ToggleComponent;
