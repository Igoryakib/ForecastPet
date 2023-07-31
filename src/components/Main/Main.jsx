import WeatherSection from '../WeatherSection/WeatherSection';
import WeatherWind from '../WeatherWind/WeatherWind';
import styles from './Main.module.scss';

const Main = function(){
  return (
    <main className='grid grid--2-cols'>
      <WeatherSection />
      <div>tomorrow</div>
      <WeatherWind AQiIndex={50}/>
    </main>
  )
}

export default Main
