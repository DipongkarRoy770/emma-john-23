import moment from "moment";

const Clock = () => {
  return (
    <div className="w-96 h-96 rounded-full bg-fuchsia-200 mx-auto mt-24 border-2 border-teal-200 hover:border-red-400">
      <h2 className="text-3xl font-thin py-[35%] text-center">{moment().format("h:mm:ss a")}
      <h1 className="text-2xl font-mono mt-6 text-center">{moment().format("dddd, MMMM Do YYYY")}</h1>
      </h2>
      
    </div>
  );
};

export default Clock;