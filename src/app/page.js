import { TodoCard } from "@/components/todos/todo.card";
import { TodoCreate } from "@/components/todos/todo.create";

async function getTodos() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/Ed8KzKobj1ri", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const { data } = await getTodos();

  return (
    <div>
      {/* <picture>
        <img
          src="https://blendofbites.com/wp-content/uploads/2021/12/yellow-pear-consept-of-pear-body-shape.webp"
          alt="Diet Journey"
        />
      </picture> */}

      <TodoCreate />

      <div>
        <div className="grid grid-cols-4  gap-2 space-x-2 space-y-2 items-center p-14 border-spacing-6 ">
          {data?.map((todo) => {
            return (
              <TodoCard
                key={todo._id}
                id={todo._id}
                date={todo.date}
                body_fat_percent={todo.body_fat_percent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
