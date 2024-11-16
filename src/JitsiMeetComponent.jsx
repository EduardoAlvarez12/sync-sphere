import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

const JitsiMeetComponent = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <JitsiMeeting
        domain="meet.jit.si"
        roomName="Sync Sphere"
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
          enableNoisyMicDetection: true,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        }}
        userInfo={{
          displayName: 'Tu nombre de usuario',
        }}
        onApiReady={(externalApi) => {
          // Here you can attach custom event listeners to the Jitsi Meet External API
          console.log('Jitsi Meet External API', externalApi);
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = '100%';
        }}
      />
    </div>
  );
};

export default JitsiMeetComponent;
