/* eslint-disable react/prop-types */const CommentList = ({ info }) => {
  return (
    <>
      <h3 className="sm:text-2xl text-xl font-bold my-6 text-gray-900">Comments :</h3>
      {
        info.map((comment, index) => {
          <div key={index}>
            <h4 className="text-xl font-bold">{comment.name}</h4>
            <p className="mt-1 mb-4">{comment.text}</p>
          </div>
        })};

    </>
  )
}
export default CommentList;


