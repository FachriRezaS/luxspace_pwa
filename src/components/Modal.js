import React from 'react'

const Modal = ({handleShowModal}) => {
  return (
    <div className="fixed inset-0 z-40 top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50" onClick={handleShowModal}>
        <div className="bg-white p-6 md:p-6">
            <div className="w-screen md:w-96 md:pb-96 relative z-40">
                <div className="absolute w-full h-full">
                    <iframe
                        title='video'
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src="https://www.youtube.com/embed/3h0_v1cdUIA"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal