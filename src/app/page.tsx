'use client'
import  {Formulario} from '@/components/Formulario';
import {Person} from "@/components/Person";

const Teste = () => {
    return (
        <>
            <p>ola </p>
            <Formulario/>
            <Person name='newton cutrim' url="https://google.com/maps/@-8.063598,-34.8709826,3a,75y,175.98h,90t/data=!3m8!1e1!3m6!1sAF1QipPZnymTH0_fOLV56HRMRj0Bs2r7D3oIw4CGsB88!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPZnymTH0_fOLV56HRMRj0Bs2r7D3oIw4CGsB88%3Dw203-h100-k-no-pi-0-ya176.02008-ro-0-fo100!7i5376!8i2688?entry=ttu"/>
        </>
    );
}

export default Teste;
