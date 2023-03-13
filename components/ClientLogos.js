import classes from '../styles/ClientLogos.module.scss';
import Image from 'next/image';

import Logo1 from '../public/logo1.png';
import Logo2 from '../public/logo2.png';
import Logo3 from '../public/logo3.png';
import Logo4 from '../public/logo4.png';

function ClientLogos() {
  return (
    <div className={classes.ClientLogos}>
      <ul className={classes.ClientLogos__list}>
        <div className={classes.ClientLogos__logo1}>
          <Image src={Logo1} alt="worklete" width={298} height={43} />
        </div>
        <div className={classes.ClientLogos__logo2}>
          <Image src={Logo2} alt="lob" width={80} height={38} />
        </div>
        <div className={classes.ClientLogos__logo3}>
          <Image src={Logo3} alt="rolfsonoil" width={215} height={43} />
        </div>
        <div className={classes.ClientLogos__logo4}>
          <Image src={Logo4} alt="archetape" width={193} height={44} />
        </div>
      </ul>
    </div>
  );
}

export default ClientLogos;
