import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as EyeOff } from './assets/eye-off.svg';

function App() {
  return (
    <div className='font-["Titillium_Web"] bg-[url("/src/assets/background.png")] bg-cover flex flex-col sm:flex-row sm:bg-none h-screen'>
      <div className='flex-1 bg-[#F8FAFC;] rounded-xl mx-3 my-3 sm:mx-0 sm:my-0 '>
        <div className='mt-3 ml-3 sm:mt-10 sm:ml-28'>
          <Logo  />
          
          <div className='mt-[90px] flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-4xl font-bold'>Acesse a plataforma</h1>
              <p className='max-w-[351px]'>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
            </div>
            <div className='max-w-[384px] flex flex-col gap-8'>
              <div className='flex flex-col gap-4'>
                <form className='flex flex-col gap-2'>
                  <label for='email' className='text-sm font-semibold'>E-mail</label>
                  <input id='email' name='email' type="email" className='border-[1px] border-[#E2E8F0] hover:border-[#7C3AED] focus:border-[#7C3AED] outline-0 outline-[#7C3AED] rounded-[4px] w-auto mr-3 sm:w-[384px] px-4 py-3 text-sm' placeholder='Digite seu e-mail'/>
                  <div className='flex justify-between'>
                    <label for='password' className='text-sm font-semibold'>Senha</label>
                    <button><span className='text-sm font-semibold text-[#7C3AED] mr-4 sm:mr-0'>Esqueceu sua senha?</span></button>
                  </div>
                  <form className='flex justify-between bg-white border-[1px] border-[#E2E8F0] hover:border-[#7C3AED] focus-within:border-[#7C3AED] focus:border-[#7C3AED] outline-0 outline-[#7C3AED] rounded-[4px] w-auto mr-3 sm:w-[384px] px-4 py-3 text-sm'>
                    <input required id='password' name='password' type="password" className='w-[300px] sm:w-[330px] outline-none' placeholder='Digite sua senha'/>
                    <button><EyeOff /></button>
                  </form>
                  <input type="submit" value="Entrar" className='mr-3 mt-8 sm:mr-0 bg-[#7C3AED] hover:bg-[#9F67FF] py-4 px-6 rounded-[4px] font-bold text-white'/>
                </form>
              </div>
              

              <p className='text-[#475569]'>Ainda não tem uma conta? <span className='text-[#7C3AED] font-bold  '><button className='hover:underline hover:underline-offset-1 hover:underline-[#7C3AED]'>Inscreva-se</button></span></p>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:flex-1 sm:bg-[url("/src/assets/background.png")] sm:bg-cover'></div>
    </div>
  )
}

export default App
