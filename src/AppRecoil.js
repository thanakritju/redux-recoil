import { StylingMenu } from "./features-recoil/stylingMenu/StylingMenu";
import { StoreInfo } from "./features-recoil/storeInfo/StoreInfo";
import {
  RecoilRoot
} from "recoil";

function AppRecoil() {
  return (
    <div>
      <div>Recoil</div>
      <RecoilRoot>
        <StylingMenu />
        <StoreInfo />
      </RecoilRoot>
    </div>
  )
}

export default AppRecoil;