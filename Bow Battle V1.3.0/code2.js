gdjs.Loading_32SceneCode = {};
gdjs.Loading_32SceneCode.localVariables = [];
gdjs.Loading_32SceneCode.idToCallbackMap = new Map();
gdjs.Loading_32SceneCode.GDLoadingObjects1= [];
gdjs.Loading_32SceneCode.GDLoadingObjects2= [];


gdjs.Loading_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.playerAuthentication.isAuthenticationWindowOpen());
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Lobby"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Game Scene"));
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Lobby");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Game Scene");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Lobby");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Game Scene");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}
}

}


};

gdjs.Loading_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Loading_32SceneCode.GDLoadingObjects1.length = 0;
gdjs.Loading_32SceneCode.GDLoadingObjects2.length = 0;

gdjs.Loading_32SceneCode.eventsList0(runtimeScene);
gdjs.Loading_32SceneCode.GDLoadingObjects1.length = 0;
gdjs.Loading_32SceneCode.GDLoadingObjects2.length = 0;


return;

}

gdjs['Loading_32SceneCode'] = gdjs.Loading_32SceneCode;
