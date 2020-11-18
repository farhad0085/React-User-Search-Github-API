import React, { useState } from 'react';
import { CopyToClipboard as Copy } from 'react-copy-to-clipboard';

const CopyToClipboard = props => {

    const [copied, setCopied] = useState(false)

    return (
        <Copy text={props.value}
            onCopy={() => setCopied(true)}>
            <button className="btn btn-primary btn-lg ml-2">{copied ? "Copied" : "Copy"}</button>
        </Copy>
    );

}

export default CopyToClipboard