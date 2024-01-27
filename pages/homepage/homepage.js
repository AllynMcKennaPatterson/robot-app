import Header from "@/components/header/header";
import SliderControlButton from "@/components/control-buttons/slider-control-button/slider-control-button";
import EndEffectorControlButton from "@/components/control-buttons/end-effector-control-button/end-effector-control-button";
import VirtualObjectButton from "@/components/control-buttons/virtual-object-button/virtual-object-button";
import CameraToggleButton from "@/components/camera-toggle-button/camera-toggle-button";
import SliderControlModal from "@/components/controls/slider-control-modal/slider-control-modal";
import { useState } from "react";
import EndEffectorControlModal from "@/components/controls/end-effector-control-modal/end-effector-control-modal";
import TestScene from "@/components/react-three-fiber/test-scene/test-scene";
import { ModelContextProvider } from "../Store/modelContext";

export default function HomePage() {
  const [openSliderModal, setOpenSliders] = useState(false);
  const [openCoordinateModal, setOpenCoordinateModal] = useState(false);

  return (
    <div>
      <Header />
      <ModelContextProvider>
        <TestScene />
        <CameraToggleButton />
        <SliderControlButton
          setOpenSliders={() => setOpenSliders(true)}
          setOpenCoordinateModal={() => setOpenCoordinateModal(false)}
        />
        <EndEffectorControlButton
          setOpenCoordinateModal={() => setOpenCoordinateModal(true)}
          setOpenSliders={() => setOpenSliders(false)}
        />
        <VirtualObjectButton />
        <SliderControlModal
          open={openSliderModal}
          onClose={() => setOpenSliders(false)}
        />
        <EndEffectorControlModal
          open={openCoordinateModal}
          onClose={() => setOpenCoordinateModal(false)}
        />
      </ModelContextProvider>
    </div>
  );
}
