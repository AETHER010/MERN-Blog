import React from 'react';

const NotFoundPage =() => {
    return(
        <div>
            <img className="lg:h-55 md:h-50 w-full object-cover object-center" src='/images/notfound.jpg' alt="" />
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">PAGE NOT FOUND</h1>
        </div>
    );
}

export default NotFoundPage;