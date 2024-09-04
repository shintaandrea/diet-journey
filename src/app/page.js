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

export default async function page() {
  const { data } = await getTodos();

  return (
    <div>
      <TodoCreate />
      <div className="space-y-4">
        {data.map((todo) => {
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
  );
}
