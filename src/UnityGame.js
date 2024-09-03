import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'build/Build/UnityBuild.loader.js',
    dataUrl: 'build/Build/UnityBuild.data',
    frameworkUrl: 'build/Build/UnityBuild.framework.js',
    codeUrl: 'build/Build/UnityBuild.wasm',
  });

  return <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />;
}

export default UnityGame;
