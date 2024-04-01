import {I18nLabel} from "../i18n/labels";
import wed_2 from '../images/pic3.jpeg'

function Story() {
    return (
        <div className='min-h-[75vh] lg:my-[7rem] text-white w-full' id='story'>
            <div className="bg_image"></div>
            <div className='h-[20rem] z-1 w-full flex justify-between items-center bg-orange-400'>
                <h2 className='text-[] md:text-[3rem] '><I18nLabel label='text.our.story' /></h2>
                <div className='py-[1rem]'>
                    <p className='my-[1.4rem] text-[] md:text-[1.6rem] mx-[2rem]'>
                        <I18nLabel label='text.maeva et moi nous nous sommes connus en 2018...' />
                    </p>
                    <p className='my-[1.4rem] text-[] md:text-[1.6rem] mx-[2rem]'>
                        <I18nLabel label='L&apos;arrivée de notre fils ...' />
                    </p>
                    <p className='my-[1.4rem] text-[] md:text-[1.6rem] mx-[2rem]'>
                        <I18nLabel label='Le mariage pour nous représente un ...' />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Story;
