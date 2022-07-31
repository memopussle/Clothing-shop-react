import React from 'react';
import Link from 'next/link';

const canceled = () => {
  return (
    <div className='container canceled flex'>
      <Link href="/">
        <button className="border-button">CONTINUE SHOPPING</button>
      </Link>
    </div>
  );
}

export default canceled