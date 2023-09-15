import Databiz from '../../../../assets/images/client-databiz.svg'
import AudioPhile from '../../../../assets/images/client-audiophile.svg'
import Meet from '../../../../assets/images/client-meet.svg'
import Maker from '../../../../assets/images/client-maker.svg'
const Brands = () => {
    return(
        <div className="brands">
            <img src={Databiz} alt="Databiz" />
            <img src={AudioPhile} alt="AudioPhile" />
            <img src={Meet} alt="Meet" />
            <img src={Maker} alt="Maker" />
        </div>
    )
}

export default Brands