/* eslint-disable react/prop-types */const CommentList = ({ commentsArticle }) => {
  return (
    <>
      <h3 className="sm:text-2xl text-xl font-bold my-6 text-gray-900">
        Comments : {commentsArticle.name}
        {console.log(commentsArticle)}
      </h3>
      {/* {commentsArticle.comments.map((comment, index) => {
        <div key={index}>
          <h4 className="text-xl font-bold">{comment.username}</h4>
          <p className="mt-1 mb-4">{comment.text}</p>
        </div>;
      })}
      ; */}
    </>
  );
};

export default CommentList;
