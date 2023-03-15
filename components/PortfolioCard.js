import Image from 'next/image';
import Link from 'next/link';

function PortfolioCard(props) {
  return (
    <>
      <div className="border my-4 w-80 shadow hover:shadow-xl">
        <Link href="/portfolio">
          <Image src={props.img} alt="" width={354} height={292} />
          <div className="p-2 flex justify-between items-baseline bg-white">
            <h2 className="text-lg font-bold ">{props.name}</h2>
            <span>{props.job}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PortfolioCard;
