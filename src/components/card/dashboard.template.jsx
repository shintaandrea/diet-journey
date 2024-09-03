import { Home2 } from "solar-icon-set/essentionalui";
import { Paper } from "solar-icon-set/notes";
import { Diploma } from "solar-icon-set/school";
import { VideoLibrary } from "solar-icon-set/videoaudiosound";

export const DashboardTemplate = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-[430px] bg-slate-50 border-r p-8 sapce-y-60">
        <div>Devscale.</div>
        <section>
          <Menu label="Dashboard" icon={<Home2 />} />
          <Menu label="Cources" icon={<VideoLibrary />} />
          <Menu label="Resources" icon={<Paper />} />
          <Menu label="Certificates" icon={<Diploma />} />
        </section>
      </aside>
      <main className="w-[calc(100%-430px)] p-8 ">
        <div className="max-w-3xl m-auto">{children}</div>
      </main>
    </div>
  );
};

const Menu = ({ label, icon }) => {
  return (
    <div className="bg-transparent hover:bg-indigo-600 text-sm font-medium hover:text-white px-3 py-1.5 rounded-lg flex gap-2 items-center">
      {icon}
      <div>{label}</div>
    </div>
  );
};
