import React, { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  isLoading?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  isLoading,
}) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <div className="w-96 rounded-lg bg-light-gray p-6 text-center shadow-lg">
        {children}
        {!isLoading && (
          <button
            className="mb-4 rounded bg-primary-clr-light1 px-4 py-2 text-white"
            onClick={onClose}
          >
            Close
          </button>
        )}
      </div>
    </div>
  )
}

export default Modal
