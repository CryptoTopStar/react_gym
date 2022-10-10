import React from "react"
import Chat from "../components/chat"
import GymCard from "../components/gymCard"
import Login from "../components/login"
import Model from "../components/model"
import PlanTitle from "../components/planTitle"

const local_datas = [
  { cost: "20", title: "Wild Stone Infra Hotel", img: "url(./card_back_bronze.svg)", list: ['unlimeted gym access', '5 training programs'], name: "BRONZE" },
  { cost: "35", title: "Wild Stone Infra Hotel", img: "url(./card_back_siver.svg   )", list: ['unlimeted gym access', '5 training programs', 'free fitness consultation'], name: "SILVER" },
  { cost: "49", title: "Wild Stone Infra Hotel", img: "url(./card_back_gold.svg)", list: ['unlimeted gym access', '5 training programs', 'free fitness consultation', 'personal trainer'], name: "GOLD" }

];

export default function IndexPage() {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(0);
  const modalOpen = () => {
    setOpen(true);
  }
  const modalClose = () => {
    setOpen(false);
  }
  console.log(selectedRow);
  return (
    <>
      <section style={{ marginRight: "auto", marginLeft: "auto", width: "1440px", paddingLeft: "10px" }} className="relative">
        <Login modalOpen={modalOpen} />
        <PlanTitle />
        <GymCard selectedRow={local_datas[selectedRow]} />
        <Chat />
        <Model open={open} modalClose = {modalClose} local_datas={local_datas} setSelectedRow={setSelectedRow} />
      </section>

    </>
  )
}
