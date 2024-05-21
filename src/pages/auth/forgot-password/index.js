import React from 'react'
import FormPage from '@/components/UI/Forms/FormPage/FormPage'
import FormMessage from '@/components/UI/Forms/FormMessage/FormMessage'
import ForgotPassword from '@/components/Authentcation/ForgotPassword/ForgotPassword'


const index = () => {
  return (
    <FormPage>
    <FormMessage
      header="Reset your Password"
      subtext="Or"
      routetext="go back to Sign-In page"
      route="/auth/sign-in"
    />
    <ForgotPassword />
  </FormPage>
  )
}

export default index