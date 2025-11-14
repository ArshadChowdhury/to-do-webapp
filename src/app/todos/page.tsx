"use client";

import { CheckSquare, Home, LogOut, User } from "lucide-react";
import { useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete project documentation", completed: false },
    { id: 2, text: "Review pull requests", completed: true },
    { id: 3, text: "Update dependencies", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-64 bg-slate-800 text-white p-6">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Todo App</h1>
        </div>
        <nav className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-700 text-white">
            <Home size={20} />
            <span>Dashboard</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-gray-300">
            <CheckSquare size={20} />
            <span>Todos</span>
          </button>
          <button
            // onClick={() => setCurrentPage("profile")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-gray-300"
          >
            <User size={20} />
            <span>Account Information</span>
          </button>
        </nav>
        <button
          // onClick={() => setCurrentPage("login")}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-gray-300 mt-auto absolute bottom-6"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">My Todos</h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex gap-4">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Add Todo
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {todos.map((todo: any) => (
              <div
                key={todo.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow cursor-move"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {todo.text}
                </span>
                <button className="text-blue-600 hover:text-blue-800 px-3 py-1">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-800 px-3 py-1">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
