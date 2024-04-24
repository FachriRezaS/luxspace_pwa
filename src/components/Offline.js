import React from 'react'

const Offline = () => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
            {/* <div className="flex-shrink-0">
                <img src="images/content/logo.png" alt="Luxspace | Fulfill your house with beautiful furniture" />
            </div> */}
            <div className="ml-3">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Offline
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Your internet connection appears to be offline.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Offline