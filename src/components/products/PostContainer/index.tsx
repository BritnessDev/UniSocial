import { PostCategory } from './PostCategory'
import { PostLikeListContainer } from './PostLikeListContainer'
import { PostPreviewList } from './PostPreviewList'

export const PostContainer: React.ElementType = ({ groups, recGroups }) => (
  <div className="w-full overflow-x-hidden bg-themeBg1 py-14">
    <PostCategory />
    <div
      className="
      mt-[24px] flex flex-col justify-center gap-[24px]
      lg:flex-row lg:justify-between"
    >
      <PostPreviewList groups={groups} />
      <PostLikeListContainer recGroups={recGroups} />
    </div>
  </div>
)
