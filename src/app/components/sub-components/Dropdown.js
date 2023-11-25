import { Popover } from '@headlessui/react'
import React, { useState } from 'react';

export default function Dropdown(){
    const [textInput, setTextInput] = useState('');

    const handleSubmission = (event) => {
        // send fetch to db

        setTextInput('');
      };

    return (
                <Popover>
                    <Popover.Button className={'text-xl'}>Options</Popover.Button>
                    <div className='bg-neutral-950/50'>
                        <Popover.Panel>
                            <div className='flex flex-col gap-2 p-2'>
                                <input
                                    className='p-2 w-32 h-8 bg-white border rounded-xl border-stone-500 text-black text-m font-normal font-["IM FELL English"]'
                                    type='text'
                                    placeholder='Search Game...'
                                    onChange={(e) => setTextInput(e.target.value)}
                                    onSubmit={handleSubmission}
                                />
                                <button className='text-white'>Save Game</button>
                                <button className='text-white'>Logout</button>
                            </div>
                    
                            <img src="/solutions.jpg" alt="" />
                        </Popover.Panel>
                    </div>
                </Popover>
      );
}


