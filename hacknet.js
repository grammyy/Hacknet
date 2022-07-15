GUI=document.body.children["GUI"]
window.onload=function(){ //cmd window execution here for visuals
    setInterval(function(){GUI.children[1].children[3].innerText=fps},1)
    console.group("Information");console.warn("This game was orginially created by Matt Trobbiani, @Orann, please buy the orginial game for the best experience: (https://store.steampowered.com/app/365450/Hacknet/)"),console.warn("This project was created by Bartender (https://steamcommunity.com/id/WineBartender/), a complete recreation of hacknet in javascript for support of all broswers and devices; allowing people to play on their phones anywhere."),console.warn("This game is offine page accessible! You can simply download and play anywhere, even without wifi! (https://github.com/BartenderWinery/Hacknet)"); console.groupEnd()
    if(!appdata.get("settings")){
        appdata.set("settings","")}
    //replace regular text with P tag
    GUI.insertAdjacentHTML("afterbegin","<iframe src=content/web/Login.html style=height:55%;width:448px;margin-top:135px;margin-left:180px;margin-right:10%></iframe>")}
commands=[
    ["help [PAGE NUMBER]"],
    ["scp [filename] [OPTIONAL: destination]"],
    ["scan"],
    ["rm [filename (or use * for all files in the folder)]"],
    ["ps"],
    ["kill [PID]"],
    ["cd [foldername]"],
    ["connect [ip]"],
    //second page
    ["probe"],
    ["exe"],
    ["disconnect"],
    ["cat [filename]"],
    ["openCDTray"],
    ["closeCDTray"],
    ["reboot [OPTIONAL: -i]"],
    ["replaceAll [filename] \"target\" \"replaceAllment\""],
    ["analyze"],
    ["solve [FIREWALL SOLUTION]"],
    //third page
    ["login"],
    ["upload [LOCAL FILE PATH/FILENAME]"],
    ["clear"],
    ["addNote [NOTE]"],
    ["append [FILENAME] [DATA]"],
    ["shell"],
    ["save!(SJN!*SNL8vAewew57WewJdwl89(*4;;;&!)@&(ak'^&#@J3KH@!*"]]
API={ //scripts for common buttons and such
    toggle:function(data){
        a=data.classList.toggle("1")
        if(a) data.style.backgroundColor="#00c4ff"; else data.style.backgroundColor="#393156d9"},
    write:function(data){
        GUI.children[5].children[1].insertAdjacentHTML("beforeEnd","<p>"+data+"</p>")}}
//scripts={ //hacker boi scripts here
//    }
//progression={
//    }
render={ //load and deload scenes effectively
    frame:function(data){
        GUI.style.visibility="hidden"
        if(!document.body.children["SUB"])
            document.body.insertAdjacentHTML("afterbegin","<iframe id='SUB' loading=lazy style='position:absolute' src="+data+"></iframe>")
        else
            document.body.children["SUB"].style.pointerEvents="all"
            document.body.children["SUB"].src=data},
    deload:function(){
        document.body.children["SUB"].style.pointerEvents="none"
        document.body.children["SUB"].src=""
        GUI.style.visibility="visible"},
    node:function(n,i,x,y){
        GUI.children[4].insertAdjacentHTML("beforeEnd","<div id='"+i+"' name='"+n+"' class='node' style='left:"+x+"'px;top:'"+y+"px'></div>")}}
profiles={
    load:function(account){
        document.body.style=document.body.style+""
        GUI.children[0].style.display="none"
        GUI.children[1].style.display="flex"
        GUI.children[2].style.display="block"
        GUI.children[3].style.display="block"
        GUI.children[4].style.display="flex"
        GUI.children[5].style.display="block"
        if(!String(appdata.get("accounts")).includes(account)){
            if(appdata.get("accounts")&&!appdata.get(account)){appdata.encode("accounts","{\"data\":\""+appdata.get("accounts")["data"]+";"+account+"\",\"login\":\""+account+"\"}")}
            if(!appdata.get("accounts")){appdata.encode("accounts","{\"data\":\""+account+"\",\"login\":\""+account+"\"}")}
            if(!appdata.get(account)){
                appdata.set(account,"{\"ip\":\""+(Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"\"}")
                appdata.set(account+";missions","{}")
                appdata.set(account+";logs","{}")}}
        appdata.encode("accounts","login",account)},
    deload:function(){
        GUI.children[0].style.display="flex"
        GUI.children[1].style.display="none"
        GUI.children[2].style.display="none"
        GUI.children[3].style.display="none"
        GUI.children[4].style.display="none"
        GUI.children[5].style.display="none"}}
//function AddEvent(object, id, func) {
//    if(object.attachEvent) object.attachEvent("on" + id, function() {func.call(object)})
//    else if(object.addEventListener) object.addEventListener(id, func, false)}
//AddEvent(window,'keydown',function(e){
//    console.log(e.keyCode)//temp code for debugging keycodes
//    switch(e.keyCode){}})
const times = [];let fps;
function refreshLoop(){
    window.requestAnimationFrame(()=>{
        const now = performance.now();
        while(times.length>0&&times[0]<=now-1000){
            times.shift()}
        times.push(now)
        fps = times.length
        refreshLoop()})}
refreshLoop();
var appdata={
    set:function(n){
        if(!document.cookie)document.cookie=n+"={}"
        else document.cookie=document.cookie+"; "+String(n)},
    encode:function(n,d,v){
        if(!document.cookie.includes(n+"="))document.cookie=n+"={"+d.replaceAll("]","").replaceAll("[","").split(",").join(":{},")+":{}}"
        var t=decodeURIComponent(document.cookie).replaceAll("};","}||").split("||")
        var p=t.findIndex((e)=>e.includes(n+"="))
        var m=t[p].replaceAll(n+"=","")
        console.log(JSON.parse(m)[d])
        return JSON.parse(m.replace(JSON.parse(m)[d],v))},
    get:function(n){
        var t=decodeURIComponent(document.cookie).replaceAll("};","}||").split("||")
        var p=t.findIndex((e)=>e.includes(n+"="))
        return p==-1?undefined:JSON.parse(t[p].replaceAll(n+"=",""))}}