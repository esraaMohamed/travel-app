import { handleSubmit } from './js/formHandler'
import { validateDestination } from './js/validateDestination'
import ErrorComponent from './js/errorView'
import TripInfoComponent from './js/tripInfoView'
import DestinationInfoComponent from './js/destinationInfoView'
import ForcastWeatherComponent from './js/forcastWeatherView'
import PhotoComponent from './js/photoView'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/weather.scss'

const today = new Date()
document.getElementById('from').value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

export {
    validateDestination,
    ErrorComponent,
    TripInfoComponent,
    DestinationInfoComponent,
    ForcastWeatherComponent,
    PhotoComponent,
    handleSubmit
}