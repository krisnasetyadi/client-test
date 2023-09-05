'use client'
import { useState } from 'react'
import { FileApi } from "@/services"
import swal from 'sweetalert2'
import LoadingHoverComponent from './loading-hover-component'

function ButtonUpload() {
    const [isErrorMessage, setIsErrorMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function handleSubmit (e: any) {
      e.preventDefault()
      setIsLoading(true)
      const file = e.target[0].files[0]
      if(file) {
        setIsErrorMessage('')
        try {
          const response = await FileApi.upload(file)
          console.log('response', response)
          swal.fire({
            text: `Your data saved sucessfully`,
            icon: 'success'
          })
          resetInput(e.target[0])
          setIsLoading(false)
        } catch (error) {
        console.log('errpr', error)
        if (error instanceof TypeError && error.message === "Failed to fetch") {
          swal.fire({
            title: 'Network error occurred.',
            text: 'Please check your internet connection.',
            icon: 'error'
          })
        } else {
        swal.fire({
         text: `Something went wrong`,
          icon: 'error'
        })
        }
        resetInput(e.target[0])
        setIsLoading(false)
      }
      } else {
        setIsErrorMessage('choose your file first')
        setIsLoading(false)
      }
    }

    function resetInput(input: HTMLInputElement) {
      input.value = ''
    }
    return (
      <form onSubmit={handleSubmit} className='flex'>
        {isLoading && <LoadingHoverComponent />}
        <div className='flex flex-col'>
          <input type="file" />
          <span className='text-red-400'>{isErrorMessage}</span>
        </div>
        <div>
          <button type="submit" className='bg-blue-500 hover:bg-blue-400 px-2 py-1 border rounded-lg text-white' >submit</button>
        </div>
      </form>
        
    )

}

export default ButtonUpload