import TagIndexItem from "../TagIndexItem";

const TagIndex = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <TagIndexItem tag={tag} key={tag.id} />
      ))}
    </>
  );
};

export default TagIndex;
