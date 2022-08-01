import locationMap from '../../assets/images/location-map.svg';
import locationMapMob from '../../assets/images/location-map-mob.svg';
import Notification from '../../components/Notification';
import { StyledLegalization } from './styles';

function Legalization() {

    return (
        <StyledLegalization className='overflow-hidden'>
            <div className='container'>
                <div className='width-wrapper col-12 col-xl-10'>
                    <h2 className='mb-5'>Continued <br className='d-block d-md-none' /> Legalization.</h2>
                    <h3>
                        <span className="text-primary">Many states are expected to include cannabis reform
                            initiatives</span> on the November 2022 ballots.
                        There are an estimated population of 16.7 million cannabis consumers in the 16 states that
                        have potential of legalization
                    </h3>
                    <h5 className='d-md-none'>Budbo locations:</h5>
                    <img src={locationMapMob} alt="Budbo Locations" className="location-map d-md-none" />
                    <h4 className='my-5 position-relative' style={{ zIndex: 1 }}>
                        European Union Movement Toward Legalization:</h4>
                    <p className='text-colored mb-5 mb-lg-0'>
                        With Malta’s December 2021 legalization of cannabis and the legalization in Germany and
                        Luxembourg, momentum has been growing for other countries to participate in the
                        decriminalization. Curaleaf, an American operator has already invested $285 million
                        dollars in EMMAC Life Sciences, a multinational European operator.1</p>
                    <h5 className='d-none d-md-block'>Budbo locations:</h5>
                </div>
                <div className="width-wrapper col-12 col-xl-10">
                    <img src={locationMap}
                        alt="Budbo Locations" className='d-none d-md-block location-map' />
                </div>
                <div className='width-wrapper col-12 col-xl-10'>
                    <Notification
                        title='As the market grows, a return on investment can blossom.'
                        description='This is your chance to get in early and reap the benefits.'
                        link='/'
                        linkText='Invest Now'
                        minimized
                    />
                </div>
            </div>
        </StyledLegalization >
    )
}

export default Legalization