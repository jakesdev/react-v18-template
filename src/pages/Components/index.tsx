import Breadcrumb from "../../components/Breadcrump";

export default function ComponentsPage() {
  return (
    <>
      <Breadcrumb parent="Components" child="Introduction"></Breadcrumb>
      <div className="p-4">
        <p>Component Introduction</p>
      </div>
    </>
  );
}
