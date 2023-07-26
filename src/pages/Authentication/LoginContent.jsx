import Form from "../../components/Authentication/signup/form/Form"
import Sidebar from "../../components/Authentication/signup/sidebar/Sidebar"

const LoginPage = function(){

  return (
    <>
      <Sidebar
          type='login'
        />
        <Form type='login' />
    </>
  )
}

export default LoginPage
