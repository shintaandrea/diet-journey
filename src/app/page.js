import { TodoCard } from "@/components/todos/todo.card";
import { TodoCreate } from "@/components/todos/todo.create";

async function getTodos() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/c4U1qKdnREFr", {
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
              nama_balita={todo.nama_balita}
              usia={todo.usia}
            />
          );
        })}
      </div>
    </div>
  );
}
