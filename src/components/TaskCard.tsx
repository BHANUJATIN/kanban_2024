import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { Id, Task } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import photo from "../icons/Photo.png";
import AvatarGrp from "./AvatarGrp";
import { ChatBubbleLeftEllipsisIcon, PaperClipIcon, HeartIcon } from "@heroicons/react/24/outline";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
      bg-gray-200 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-rose-500  cursor-grab relative
      "
      />
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-gray-300 p-2.5 h-[100px] text-black min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative"
      >
        <textarea
          className="
        h-[90%]
        w-full resize-none border-none rounded bg-transparent focus:outline-none
        "
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="bg-mainBackgroundColor p-2.5 h-full items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative task"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <div className="flex flex-col justify-center w-full">
        <img src={photo} className="p-1" />
        <div className="flex">
          <div className="m-1 w-12 md:w-16 border-4 border-orange-500 rounded-full"></div>
          <div className="m-1 w-12 md:w-16 border-4 border-red-500 rounded-full"></div>
          <div className="m-1 w-12 md:w-16 border-4 border-blue-500 rounded-full"></div>
          <div className="m-1 w-12 md:w-16 border-4 border-green-500 rounded-full"></div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold p-1">Heading</h3>
          <p className="my-auto h-[90%] text-gray-600 p-1 w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
            {task.content}
          </p>
        </div>
        <div className="flex items-between py-2">
          <AvatarGrp sizeClass=" w-7 h-7 " number="" marginClass=" -mr-3 "/>
          <div className="flex">
            <p className="text-gray-500">46</p>
            <ChatBubbleLeftEllipsisIcon className="w-5 text-gray-500 ml-0.5 mr-4"/>
            <p className="text-gray-500">32</p>
            <HeartIcon className="w-5 text-gray-500 ml-0.5 mr-4"/>
            <p className="text-gray-500">76</p>
            <PaperClipIcon className="w-5 text-gray-500 ml-0.5"/>
          </div>
        </div>
      </div>

      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded opacity-60 hover:opacity-100"
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
