import { useState } from 'react'
import { Switch } from '@headlessui/react'

interface SwitchProps {
    label: string;
    selected: boolean;
    setEnabled: (value: boolean) => void;
}

const SwitchUI: React.FC<SwitchProps> = ({ label, selected, setEnabled }) => {
//   const [enabled, setEnabled] = useState(false)
  return (
    <div className="p-2 flex justify-center items-center space-x-4">
      <p className="text-xl text-gray-500">{label}:</p>
      <Switch
        checked={selected}
        onChange={setEnabled}
        className={`${selected ? 'bg-purple-500' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${selected ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}

export default SwitchUI;
