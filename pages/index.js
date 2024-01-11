import Header from "@/components/header/header";
import SliderControlButton from "@/components/control-buttons/slider-control-button/slider-control-button";
import EndEffectorControlButton from "@/components/control-buttons/end-effector-control-button/end-effector-control-button";
import VirtualObjectButton from "@/components/control-buttons/virtual-object-button/virtual-object-button";
import CameraToggleButton from "@/components/camera-toggle-button/camera-toggle-button";
import SliderControlModal from "@/components/controls/slider-control-modal/slider-control-modal";
import { useState } from "react";

export default function Home() {
  const [openSliderModal, setOpenSliders] = useState(false);
  
  return (
    <>
      <main>
        <Header/>
        <CameraToggleButton/>
        <SliderControlButton setOpenSliders={() => setOpenSliders(true)}/>
        <EndEffectorControlButton/>
        <VirtualObjectButton/>
        <SliderControlModal open={openSliderModal} onClose={() => setOpenSliders(false)}/>
      </main>
    </>
  )
}
