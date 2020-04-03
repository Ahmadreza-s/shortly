import React from 'react';
import './LinkItem.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const LinkItem = ({hashUrl, originalUrl}) => {
    const [isCopied, setIsCopied] = React.useState(false);
    const buttonClasses = ['copy-btn'];
    if (isCopied)
        buttonClasses.push('copied');
    return (
        <div className='link-item'>
            <div className='link-item-url ellipsis'>
                <a href={originalUrl}>
                    {originalUrl}
                </a>
            </div>
            <div className='link-item-hash'>
                <a href={`https://${hashUrl}`}>{hashUrl}</a>
                <CopyToClipboard text={hashUrl} onCopy={() => setIsCopied(true)}>
                    <button className={buttonClasses.join(' ')}>{isCopied ? 'Copied!' : 'Copy'}</button>
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default LinkItem;
