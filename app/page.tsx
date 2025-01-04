import { TbCloudMinus } from "react-icons/tb";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 h-[400px]">
      <h3
        className="text-xl font-bold text-default-600 font-rubik p-2"
        style={{ textTransform: "uppercase" }}
      >
        welcome to
      </h3>
      <h1 className="text-gradient text-6xl p-2 font-rubik">cloudthea</h1>
      <TbCloudMinus className="text-default-700" size={72} />
    </section>
  );
}
