import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from '../sanityClient';
import Button from '../components/Button';
import Link from 'next/link';

function PostCard(props) {
  console.log(props.post);
  const post = props.data;
  const slug = post.slug.current;
  const imageProps = useNextSanityImage(sanityClient, post.mainImage);

  return (
    <div className="border my-4 w-80 shadow hover:shadow-xl">
      <div>
        {post.mainImage && (
          // <img src={post.mainImage} />
          <Image {...imageProps} layout="intrinsic" alt="" />
        )}
        <div className="p-2 flex justify-between items-baseline">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-md">{post.excerpt}</p>
          <Button>
            <Link href={`/post/${encodeURIComponent(slug)}`}>View More...</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
