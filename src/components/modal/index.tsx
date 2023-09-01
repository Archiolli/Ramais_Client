'use client'
import React, { ForwardRefRenderFunction, HTMLAttributes, PropsWithChildren, ReactNode, forwardRef, useImperativeHandle } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from "react";

interface iModalProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
    modalTitle?: ReactNode;
}

export interface iModalAttributes {
    openModal: () => void;
    closeModal: () => void;
}

const Modal: ForwardRefRenderFunction<iModalAttributes, iModalProps> = ({ children, modalTitle }, ref) => {

    const [open, setOpen] = useState<boolean>(false)

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

  
    useImperativeHandle(ref, () => {
        return {
            openModal,
            closeModal
        }
    })

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="border-b-2 border-slate-300 flex w-full justify-center items-center text-center text-lg font-medium leading-6 text-gray-900"
                                >
                                    {modalTitle}
                                </Dialog.Title>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default forwardRef(Modal)


