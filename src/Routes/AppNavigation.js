/* eslint-disable no-unused-vars */
import { useRoutes } from "react-router-dom";
import KYC from "../Manufacturer/KYC/KYC";
import Overview from "../Manufacturer/Overview";
// eslint-disable-next-line no-unused-vars
import AppIndex from "./AppIndex";
import Settings from "../Manufacturer/Settings";
import ViewRegisteredDrugs from "../Manufacturer/ViewRegisteredDrugs";
import RegisterNewDrug from "../Manufacturer/RegisterNewDrug";
import Notifications from "../Manufacturer/Notifications";
import Account from "../Manufacturer/Account";
import QRCodePage from "../Manufacturer/QRCodePage";
import Profile from "../component/Profile";
import Gethelp from "../Manufacturer/Gethelp";
import KYCApproval from "../Manufacturer/KYC/KYCApproval";
import Passphrase from "../Manufacturer/KYC/Passphrase";
import Register from "../Manufacturer/KYC/Register";
import Login from "../Manufacturer/KYC/Login";
import RecPassphrase from "../Manufacturer/KYC/RecPassphrase";
import ViewKYCApproval from "../Manufacturer/KYC/ViewKYCApproval";
import SoleAgent from "../Manufacturer/SoleAgent";
import Marketers from "../Manufacturer/Marketers";
import CreateMarketer from "../Manufacturer/CreateMarketer";
import CreateSoleAgent from "../Manufacturer/CreateSoleAgent";
import Page404 from "../Manufacturer/Page404";
import ClaimToken from "../Claim/ClaimToken";
 

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <Register />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <Register /> },

        {
          path: "/overview",
          element: <Overview />,
        },
        {
          path: "/registered-drugs",
          element: <ViewRegisteredDrugs />,
        },
        {
          path: "/register-new-drug",
          element: <RegisterNewDrug />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/QRCode",
          element: <QRCodePage />,
        },
        {
          path: "/GetHelp",
          element: <Gethelp />,
        },
        {
          path: "/sole-agents",
          element: <SoleAgent />,
        },
        {
          path: "/create-sole-agent",
          element: <CreateMarketer/>,
        },
        {
          path: "/marketers",
          element: <Marketers />,
        },
        {
          path: "/create-marketer",
          element: <CreateMarketer />,
        }
      ],
    },
    {
      path: "/KYC",
      element: <KYC />,
    },
    {
      path: "/KYCApproval",
      element: <KYCApproval />,
    },
    {
      path: "/view-KYC-approval",
      element: <ViewKYCApproval />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/account/passphrass",
      element: <Passphrase />,
    },
    
    {
      path: '/recorver-passphrase',
      element: <RecPassphrase />
    },
    {
      path: '/claim-token',
      element: <ClaimToken />
    },
    {
      path: '*',
      element: <Page404 />
    }
  ]);
  return element;
}
export default AppNavigation;
