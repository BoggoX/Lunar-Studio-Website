gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.idToCallbackMap = new Map();
gdjs.LobbyCode.GDLobbyButtonObjects1= [];
gdjs.LobbyCode.GDLobbyButtonObjects2= [];
gdjs.LobbyCode.GDInstructionsTextObjects1= [];
gdjs.LobbyCode.GDInstructionsTextObjects2= [];
gdjs.LobbyCode.GDStoneObjects1= [];
gdjs.LobbyCode.GDStoneObjects2= [];
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects1= [];
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects2= [];
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects1= [];
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects2= [];
gdjs.LobbyCode.GDLeaderBoardButtonObjects1= [];
gdjs.LobbyCode.GDLeaderBoardButtonObjects2= [];
gdjs.LobbyCode.GDControllerTextObjects1= [];
gdjs.LobbyCode.GDControllerTextObjects2= [];
gdjs.LobbyCode.GDTitleObjects1= [];
gdjs.LobbyCode.GDTitleObjects2= [];
gdjs.LobbyCode.GDVersionTextObjects1= [];
gdjs.LobbyCode.GDVersionTextObjects2= [];
gdjs.LobbyCode.GDUpdateTextObjects1= [];
gdjs.LobbyCode.GDUpdateTextObjects2= [];


gdjs.LobbyCode.asyncCallback16803652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LobbyCode.localVariables);
gdjs.LobbyCode.localVariables.length = 0;
}
gdjs.LobbyCode.idToCallbackMap.set(16803652, gdjs.LobbyCode.asyncCallback16803652);
gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LobbyCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.LobbyCode.asyncCallback16803652(runtimeScene, asyncObjectsList)), 16803652, asyncObjectsList);
}
}

}


};gdjs.LobbyCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ControllerText"), gdjs.LobbyCode.GDControllerTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeaderBoardButton"), gdjs.LobbyCode.GDLeaderBoardButtonObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}
{for(var i = 0, len = gdjs.LobbyCode.GDControllerTextObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDControllerTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDLeaderBoardButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDLeaderBoardButtonObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("1").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("3").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("4").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.evtTools.leaderboards.setPreferSendConnectedPlayerScore(runtimeScene, true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LobbyButton"), gdjs.LobbyCode.GDLobbyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDLobbyButtonObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDLobbyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDLobbyButtonObjects1[k] = gdjs.LobbyCode.GDLobbyButtonObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDLobbyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbiesWindowOpen(runtimeScene));
}
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, null));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "A", null);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.multiplayer.isLobbiesWindowOpen(runtimeScene));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}

{ //Subevents
gdjs.LobbyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.multiplayer.isLobbiesWindowOpen(runtimeScene));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ControllerText"), gdjs.LobbyCode.GDControllerTextObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDControllerTextObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDControllerTextObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderBoardButton"), gdjs.LobbyCode.GDLeaderBoardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDLeaderBoardButtonObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDLeaderBoardButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDLeaderBoardButtonObjects1[k] = gdjs.LobbyCode.GDLeaderBoardButtonObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDLeaderBoardButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "20c26ecc-74be-4946-963d-76715a5402c7", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("InstructionsText"), gdjs.LobbyCode.GDInstructionsTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeaderBoardButton"), gdjs.LobbyCode.GDLeaderBoardButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LobbyButton"), gdjs.LobbyCode.GDLobbyButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpdateText"), gdjs.LobbyCode.GDUpdateTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("VersionText"), gdjs.LobbyCode.GDVersionTextObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDLobbyButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDLobbyButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDInstructionsTextObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDInstructionsTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDLeaderBoardButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDLeaderBoardButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDVersionTextObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDVersionTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDUpdateTextObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDUpdateTextObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Equal");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("InstructionsText"), gdjs.LobbyCode.GDInstructionsTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeaderBoardButton"), gdjs.LobbyCode.GDLeaderBoardButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LobbyButton"), gdjs.LobbyCode.GDLobbyButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpdateText"), gdjs.LobbyCode.GDUpdateTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("VersionText"), gdjs.LobbyCode.GDVersionTextObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDLobbyButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDLobbyButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDInstructionsTextObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDInstructionsTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDLeaderBoardButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDLeaderBoardButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDUpdateTextObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDUpdateTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDVersionTextObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDVersionTextObjects1[i].hide(false);
}
}
}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDLobbyButtonObjects1.length = 0;
gdjs.LobbyCode.GDLobbyButtonObjects2.length = 0;
gdjs.LobbyCode.GDInstructionsTextObjects1.length = 0;
gdjs.LobbyCode.GDInstructionsTextObjects2.length = 0;
gdjs.LobbyCode.GDStoneObjects1.length = 0;
gdjs.LobbyCode.GDStoneObjects2.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDLeaderBoardButtonObjects1.length = 0;
gdjs.LobbyCode.GDLeaderBoardButtonObjects2.length = 0;
gdjs.LobbyCode.GDControllerTextObjects1.length = 0;
gdjs.LobbyCode.GDControllerTextObjects2.length = 0;
gdjs.LobbyCode.GDTitleObjects1.length = 0;
gdjs.LobbyCode.GDTitleObjects2.length = 0;
gdjs.LobbyCode.GDVersionTextObjects1.length = 0;
gdjs.LobbyCode.GDVersionTextObjects2.length = 0;
gdjs.LobbyCode.GDUpdateTextObjects1.length = 0;
gdjs.LobbyCode.GDUpdateTextObjects2.length = 0;

gdjs.LobbyCode.eventsList1(runtimeScene);
gdjs.LobbyCode.GDLobbyButtonObjects1.length = 0;
gdjs.LobbyCode.GDLobbyButtonObjects2.length = 0;
gdjs.LobbyCode.GDInstructionsTextObjects1.length = 0;
gdjs.LobbyCode.GDInstructionsTextObjects2.length = 0;
gdjs.LobbyCode.GDStoneObjects1.length = 0;
gdjs.LobbyCode.GDStoneObjects2.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDLeaderBoardButtonObjects1.length = 0;
gdjs.LobbyCode.GDLeaderBoardButtonObjects2.length = 0;
gdjs.LobbyCode.GDControllerTextObjects1.length = 0;
gdjs.LobbyCode.GDControllerTextObjects2.length = 0;
gdjs.LobbyCode.GDTitleObjects1.length = 0;
gdjs.LobbyCode.GDTitleObjects2.length = 0;
gdjs.LobbyCode.GDVersionTextObjects1.length = 0;
gdjs.LobbyCode.GDVersionTextObjects2.length = 0;
gdjs.LobbyCode.GDUpdateTextObjects1.length = 0;
gdjs.LobbyCode.GDUpdateTextObjects2.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
