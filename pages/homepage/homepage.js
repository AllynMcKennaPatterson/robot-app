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
import ScriptFooter from "@/components/script-footer/script-footer";
import { ScriptContextProvider } from "../Store/scriptContext";
import DelayButton from "@/components/control-buttons/delay-button/delay-button";
import DelayModal from "@/components/controls/delay-modal/delay-modal";
import VirtualObjectModal from "@/components/controls/virtual-object-modal/virtual-object-modal";

export default function HomePage() {
  const [openSliderModal, setOpenSliders] = useState(false);
  const [openCoordinateModal, setOpenCoordinateModal] = useState(false);
  const [openDelayModal, setOpenDelayModal] = useState(false);
  const [openObjectModal, setOpenObjectModal] = useState(false);


  return (
    <div>
      <Header />
      <ScriptContextProvider>
        <ModelContextProvider>
          <TestScene />
          <CameraToggleButton />
          <SliderControlButton
            setOpenSliders={() => setOpenSliders(!openSliderModal)}
            setOpenObjectModal={() => setOpenObjectModal(false)}
            setOpenCoordinateModal={() => setOpenCoordinateModal(false)}
            setOpenDelayModal={() => setOpenDelayModal(false)}
          />
          <EndEffectorControlButton
            setOpenCoordinateModal={() => setOpenCoordinateModal(!openCoordinateModal)}
            setOpenObjectModal={() => setOpenObjectModal(false)}
            setOpenSliders={() => setOpenSliders(false)}
            setOpenDelayModal={() => setOpenDelayModal(false)}
          />
          <VirtualObjectButton
            setOpenSliders={() => setOpenSliders(false)}
            setOpenObjectModal={() => setOpenObjectModal(!openObjectModal)}
            setOpenDelayModal={() => setOpenDelayModal(false)}
            setOpenCoordinateModal={() => setOpenCoordinateModal(false)}
             />
          <DelayButton
            setOpenDelayModal={() => setOpenDelayModal(!openDelayModal)}
            setOpenObjectModal={() => setOpenObjectModal(false)}
            setOpenCoordinateModal={() => setOpenCoordinateModal(false)}
            setOpenSliders={() => setOpenSliders(false)}
          />

          <SliderControlModal
            open={openSliderModal}
            onClose={() => setOpenSliders(false)}
          />
          <EndEffectorControlModal
            open={openCoordinateModal}
            onClose={() => setOpenCoordinateModal(false)}
          />
          <VirtualObjectModal
            open={openObjectModal}
            onClose={() => setOpenObjectModal(false)}
            setOpenObjectModal={() => setOpenObjectModal(!openObjectModal)}
          />
          <DelayModal
            open={openDelayModal}
            onClose={() => setOpenDelayModal(false)}
          />
        </ModelContextProvider>
        <ScriptFooter />
      </ScriptContextProvider>
    </div>
  );
}