import React from 'react'
import './CV.css'


export default function CV() {
    return (
        <div className='flex-column center'>
            <iframe src="/cvManuelGarcia.pdf" className='borderCard iframeCV' title="CV"></iframe>
        </div>
    )
}
