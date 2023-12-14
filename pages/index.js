import Header from "@/components/header/header";
import SliderControlButton from "@/components/control-buttons/slider-control-button/slider-control-button";
import EndEffectorControlButton from "@/components/control-buttons/end-effector-control-button/end-effector-control-button";
import VirtualObjectButton from "@/components/control-buttons/virtual-object-button/virtual-object-button";
import CameraToggleButton from "@/components/camera-toggle-button/camera-toggle-button";

export default function Home() {
  return (
    <>
      <main>
        <Header/>
        <CameraToggleButton/>
        <SliderControlButton/>
        <EndEffectorControlButton/>
        <VirtualObjectButton/>
      </main>
    </>
  )
}
