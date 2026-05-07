import Navbar from "./Navbar";
import Button from "./Button";
import Card from "./Card";
import Tableau from "./Tableau";
import Footer from "./Footer";
import ModaleAfficherInfo from "./ModaleAfficherInfo";
import { useState } from "react";
import ModaleDelete from "./ModaleDelete";
import ModaleEdit from "./ModaleEdit";

function Container() {
  const [isOpen, setIsOpen] = useState(false)
  const [valideDelete, setValideDelete] = useState(false)
  const [edit, setEdit] = useState(false)

  return (
    <div className="w-full h-screen bg-white mx-2">
      <Navbar />
      <div className="w-full h-[calc(100vh-90px)] bg-gray-100 rounded-lg">
        <div className="w-full bg-gray-100 rounded-lg mt-2 p-2">
        <div className="max-w-full flex flex-col lg:flex-row items-center justify-between mb-3">
          <div className="leading-1 py-3">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <p className="text-gray-500 mt-2 text-sm"> This is your dashboard. </p>
          </div>
          <div className="flex items-center gap-2 py-4">
            <Button title="Add Product" />
            <Button title="Import Data" />
          </div>
        </div>

        <div className="w-full">
          <Card />
          <Tableau onClick={() => setIsOpen(true)} OnDelete={() => setValideDelete(true)} onEdit={()=>setEdit(true)}/>
          <Footer/>
          <ModaleAfficherInfo isOpen={isOpen} onClose={() => setIsOpen(false)}/>
          <ModaleDelete isOpen={valideDelete} onClose={() => setValideDelete(false)}/>
          <ModaleEdit isOpen={edit} onClose={() => setEdit(false)}/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Container;
