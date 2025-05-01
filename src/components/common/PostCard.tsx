import { Post } from '../../types/types';

function PostCard({ title, content }: Post) {
  return (
    <div className="">
      <h3 className='post-card-title'>{title}</h3>
      <p className='post-card-content'>{content}</p>
    </div>
  );
}

export default PostCard;