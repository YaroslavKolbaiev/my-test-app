export const TaskDescription = () => (
  <>
    <h1 className="title">Task 5</h1>
        <div className="content">
          <p>Please implement the following task using React and Redux/MobX.</p>
          <p>The result is expected to be ONE repository on GitHub/GitLab/Bitbucket/etc</p>
          <p>Create a webpage that shows lists of products. User can add or remove products. 
            Also, the user should be able to pin an item, which means the item has to be the first in the list. 
            Only one pinned item is allowed. Items can be searched by name or description.
          </p>
          <p>Items have to be shown:</p>
          <ul>
            <li>3 columns (≥ 992px)</li>
            <li>{`2 columns (≥576px && <992px)`}</li>
            <li>{`1 column (< 576px)`}</li>
          </ul>
          <p>Product entity:</p>
          <ul>
            <li>Image</li>
            <li>Name</li>
            <li>Description</li>
            <li>Price</li>
          </ul>
        </div>
        <hr />
  </>
)