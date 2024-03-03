import { DatePicker, TimePicker } from "antd";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex flex-col gap-[20px]">
        <DatePicker />
        <TimePicker />
      </div>
    </>
  );
}

export default App;
