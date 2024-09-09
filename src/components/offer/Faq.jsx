import { CommonHeading } from '../common/CommonHeading'
import Accordian from './Accordian';

const Faq = () => {
    const items = [
        {
            title: 'Dolor sit amet consectetur. In sapien donec quisque sodales at.',
            content: 'Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc.',
        },
        {
            title: 'Ipsum dolor sit amet consectetur. Semper vel orci nunc.',
            content: 'Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc.',
        },
        {
            title: 'Venenatis augue id lacus diam sed pellentesque amet senectus nunc.',
            content: 'Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc.',
        },
        {
            title: 'A dictum et sit vitae mauris egestas. ',
            content: 'Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc.',
        },
        {
            title: 'quisque aliquam Mi ullamcorper lectus orci purus felis scelerisque.',
            content: 'Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc.',
        },
        {
            title: 'Iaculis odio vitae morbi magna enim dictum viverra habitasse.',
            content: 'Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc.',
        },
    ];

    return (
        <>
            <div className=' max-w-[1164px] mx-auto px-3 lg:pt-20 md:pt-16 sm:pt-14 pt-12 xl:pt-[150px]'>
                <CommonHeading heading="Frequently Asked Questions" className='!text-center' />
                <div className=' pt-5 md:pt-10 lg:pt-[50px]'>
                    <Accordian items={items} />
                </div>
            </div>
        </>
    )
}

export default Faq