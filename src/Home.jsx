import React from 'react';
import { RaulButton, RaulGridCell, RaulGrid, RaulGridBody, RaulGridRow } from "@realpage/react-raul";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
 
const Home = () => {
  const navigate=useNavigate();
  const HrView=() =>{
    navigate('/hr');
  }
  
  return (
    <>
    <Navbar pageName="RealPage India Leave Portal" />
    <div>
      <RaulGrid>
        <RaulGridBody>
          <RaulGridRow class="r-mb-3 .r-border-gray-lightest">
            <RaulGridCell className="md:r-w-1/2 sm:r-w-full">
              <div style={{ display: 'flex', alignItems: 'center', height: '75vh' }}>
                <div style={{ width: 'fit-content', margin: 'auto' }}> {/* Added margin: 'auto' for left-center alignment */}
                  <h1 class="r-text-hero r-font-bold r-ml-40" >Welcome</h1>
                  <br /><br />
                  <h1 class="r-text-hero r-font-bold r-ml-48" >To</h1>
                  <br /><br />
                  <h1 class="r-text-hero r-font-bold"  >RealPage India Leave Portal</h1>
                </div>
              </div>
            </RaulGridCell>
            <RaulGridCell className="md:r-w-1/2 sm:r-w-full">
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '75vh' }}>
                <div style={{ width: '300px', margin: 'auto' }}> {/* Added margin: 'auto' for right-center alignment */}
                  <RaulGrid>
                    <RaulButton style={{borderRadius: '4px'}} variant class="r-max-w-md r-bg-secondary r-text-white ">New Leave </RaulButton>
                    <br />
                    <RaulButton style={{borderRadius: '4px'}} variant class="r-max-w-md r-bg-secondary r-text-white">My Leaves</RaulButton>
                    <br />
                    <RaulButton style={{borderRadius: '4px'}} variant class="r-max-w-md r-bg-secondary r-text-white" > Pending My Approvals</RaulButton>
                    <br />
                    <RaulButton style={{borderRadius: '4px'}} variant class="r-max-w-md r-bg-secondary r-text-white"> Update My Team Details </RaulButton>
                    <br />
                    <RaulButton style={{borderRadius: '4px'}} onClick={HrView} variant class="r-max-w-md r-bg-secondary r-text-white">HR</RaulButton>
                  </RaulGrid>
                </div>
              </div>
            </RaulGridCell>
          </RaulGridRow>
        </RaulGridBody>
      </RaulGrid>
    </div>
    </>
  );
};
 
export default Home;