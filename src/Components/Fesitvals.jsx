import RajaPic from '../assets/raja.webp'
import Manabasa from '../assets/manabasa.jpg'

const Fesitvals = () => {
  return (
    <div className="py-12 bg-blue-200">
      <div className="w-[1400px] mx-auto my-0 py-10 ">
        <div className="flex flex-col gap-7">
          <h4 className="text-center font-semibold text-3xl">
            About our festivals
          </h4>
          <p className="text-center  font-normal text-xl">
            We try to celebrate all type of odia/indian festivals like
          </p>
        </div>
        <div className="grid gap-6 grid-cols-4 mt-14" >
            <div className="flex flex-col gap-3 bg-white shadow-lg pb-3 rounded-lg overflow-hidden" >
                <img className='h-[190px]' src="https://images.pexels.com/photos/17349035/pexels-photo-17349035/free-photo-of-rath-11.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <h5 className="text-2xl font-semibold text-center" >Rathayatra</h5>
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg pb-3 rounded-lg overflow-hidden" >
                <img className='h-[190px]' src={RajaPic} alt="" />
                <h5 className="text-2xl font-semibold text-center" >Rojo</h5>
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg pb-3 rounded-lg overflow-hidden" >
                <img className='h-[190px]' src='https://sambadenglish.com/wp-content/uploads/2020/11/kartika-purnima-741x430.jpg' alt="" />
                <h5 className="text-2xl font-semibold text-center" >Kartika Purnima</h5>
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg pb-3 rounded-lg overflow-hidden" >
                <img className='h-[190px]' src='https://www.infobowl.in/wp-content/uploads/2019/11/chhadakhai-odia-festival.jpg' alt="" />
                <h5 className="text-2xl font-semibold text-center" >Chadakhai</h5>
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg pb-3 rounded-lg overflow-hidden" >
                <img className='h-[190px]' src='https://imgeng.jagran.com/images/2023/apr/odisha-day-20231680320903573.jpg' alt="" />
                <h5 className="text-2xl font-semibold text-center" >Utkal Divas</h5>
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg pb-3 rounded-lg overflow-hidden" >
                <img className='h-[190px]' src='https://images.hindustantimes.com/bangla/img/2022/05/29/960x540/sabitri_brata_1653797698536_1653797704832.jpg' alt="" />
                <h5 className="text-2xl font-semibold text-center" >Sabitri</h5>
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg pb-3 rounded-lg overflow-hidden" >
                <img className='h-[190px]' src='https://assets.telegraphindia.com/telegraph/21oriPAKHALfinal.jpg' alt="" />
                <h5 className="text-2xl font-semibold text-center" >Pakhala Divas</h5>
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg pb-3 rounded-lg overflow-hidden" >
                <img className='h-[190px]' src='https://gumlet.assettype.com/freepressjournal/2023-07/39271581-b3b0-4911-ae53-ac8082bc7655/SS.jpg' alt="" />
                <h5 className="text-2xl font-semibold text-center" >Chietau Amavashya</h5>
            </div>
  
        </div>
      </div>
      <div className=' flex justify-center'><button className='text-lg text-white p-3 bg-cyan-700 rounded'>Load More</button> </div>
    </div>
  );
};

export default Fesitvals;
