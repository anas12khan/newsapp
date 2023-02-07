import React from "react";

const Sidebar = (props) => {
  const arraySecond = {
    secondArticles: [
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
      { name: "xyz", type: "lorem", disc: "lorem" },
    ],
  };

  console.log(props?.text);
  return (
    <div className="w-full">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {props?.text?.articles?.map((item, key) => {
            return (
              <tr>
                <th scope="row">{key}</th>
                <td>{item.author}</td>
                <td>{item.description}</td>
                <td>{item.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <button>First</button>
        <button>second</button>
        <button>Third</button>
      </div>
    </div>
  );
};

export default Sidebar;
