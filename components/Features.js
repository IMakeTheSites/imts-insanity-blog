import SingleFeature from './SingleFeature';
import classes from '../styles/Features.module.scss';

import Feature1 from '../public/feature1.png';
import Feature2 from '../public/feature2.png';
import Feature3 from '../public/feature3.png';
import Feature4 from '../public/feature4.png';

function Features() {
  const features = [
    {
      num: '01',
      title: 'Consulting',
      img: Feature1,
    },
    {
      num: '02',
      title: 'Web Development',
      img: Feature2,
    },
    {
      num: '03',
      title: 'Mobile App',
      img: Feature3,
    },
    {
      num: '04',
      title: 'Web App',
      img: Feature4,
    },
  ];

  return (
    <section className={classes.Features}>
      <h2 className={classes.Features__heading}>Features</h2>
      <div className={classes.Features__list}>
        {features.map((feature) => (
          <SingleFeature
            key={feature.num}
            num={feature.num}
            title={feature.title}
            img={feature.img}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
