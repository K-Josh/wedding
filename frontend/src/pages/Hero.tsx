import PageLayout from "../components/PageLayout";
import {useTranslation} from "react-i18next";
import {I18nLabel} from "../i18n/labels";
import wed_1 from '../assets/pic2.jpeg'

function Hero() {
    return <PageLayout Id='banner'>
        <div className='flex justify-center my-[0.5rem]'>
         <p className='text-[1rem] text-orange-600 whitespace-nowrap'>
             <I18nLabel label={'text.please.join.us.to.celebrate'} />
         </p>
        </div>
        {/*title and text*/}
        <div className='flex justify-center my-[0.5rem]'>
            <h1 className='text-[1.8rem] lg:text-[3rem]'>
                <I18nLabel label='page.dave.&.maeva' />
            </h1>
        </div>
        <div className='flex justify-center my-[0.4rem]'>
            <p className='text-orange-600'>March 23, 2024</p>
        </div>
        <div className='w-full bg-orange-600'>
                <img src={wed_1} className='w-[40%] h-[30%] md:w-[110%]' alt='pic1'/>
            </div>
    </PageLayout>
    ;
}

export default Hero;
