GUI=document.body.children["GUI"]
window.onload=function(){ //cmd window execution here for visuals
    setInterval(function(){GUI.children[1].children[3].innerText=fps},1)
    console.group("Information");console.warn("This game was orginially created by Matt Trobbiani, @Orann, please buy the orginial game for the best experience: (https://store.steampowered.com/app/365450/Hacknet/)"),console.warn("This project was created by Bartender (https://steamcommunity.com/id/WineBartender/), a complete recreation of hacknet in javascript for support of all broswers and devices; allowing people to play on their phones anywhere."),console.warn("This game is offine page accessible! You can simply download and play anywhere, even without wifi! (https://github.com/BartenderWinery/Hacknet)"); console.groupEnd()
    if(!Cookies.get()){
        Cookies.set("settings","0;0;0;0;0;0;500;default;1920x1080;English")}
    GUI.insertAdjacentHTML("afterbegin","<iframe src='content/web/Login.html'style='height: 55%;width: 448px;margin-top: 10.8%;;margin-left: 10%;margin-right: 10%'></iframe>")}
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
    ["replace [filename] \"target\" \"replacement\""],
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
scripts={ //hacker boi scripts here
    }
progression={
    }
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
        GUI.style.visibility="visible"}}
profiles={
    load:function(account){
        document.body.style=document.body.style+""
        GUI.children[0].style.display="none"
        GUI.children[1].style.display="flex"
        GUI.children[2].style.display="block"
        GUI.children[3].style.display="block"
        GUI.children[4].style.display="block"
        GUI.children[5].style.display="block"
        if(String(Cookies.get("accounts")).includes(account)){
            d=String(Cookies.get("accounts")).split(";")
            d=d.splice(d.indexOf(account),1)
            d[d.length]=account
            Cookies.set("accounts",d.join(";"))
        }else{
            if(Cookies.get("accounts")&&!Cookies.get(account)){Cookies.set("accounts",Cookies.get("accounts")+";"+account)}
            if(!Cookies.get("accounts")){Cookies.set("accounts",account)}
            if(!Cookies.get(account)){
                Cookies.set(account,"1")
                Cookies.set(account+";missions","")
                Cookies.set(account+";logs","")}}},
    deload:function(){
        GUI.children[0].style.display="flex"
        GUI.children[1].style.display="none"
        GUI.children[2].style.display="none"
        GUI.children[3].style.display="none"
        GUI.children[4].style.display="none"
        GUI.children[5].style.display="none"}}
function AddEvent(object, id, func) {
    if(object.attachEvent) object.attachEvent("on" + id, function() {func.call(object)})
    else if(object.addEventListener) object.addEventListener(id, func, false)}
AddEvent(window,'keydown',function(e){
    console.log(e.keyCode)//temp code for debugging keycodes
    switch(e.keyCode){}})
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
! function(rcon) {
    var cook;
    if ("function" == typeof define && define.amd && (define(rcon), cook = !0), "object" == typeof exports && (module.exports = rcon(), cook = !0), !cook) {
       var tray = window.Cookies,
          oven = window.Cookies = rcon();
       oven.noConflict = function() {
          return window.Cookies = tray, oven}}}
(function() {
    function rcon() {
        for (var cook = 0, cook = {}; rcon < arguments.length; rcon++) {
           var tray = arguments[rcon];
           for (var oven in tray) cook[oven] = tray[oven]}
        return cook}
    function cook(rcon) {
        return rcon.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)}
    return function tray(oven) {
    function record() {}
    function write(cook, tray, write) {
        if ("undefined" != typeof document) {
            "number" == typeof(write = rcon({
                path: "/"},
            record.defaults, write)).expires && (write.expires = new Date(1 * new Date + 864e5 * write.expires)), write.expires = write.expires ? write.expires.toUTCString() : "";
            try {
                var read = JSON.stringify(tray);
                /^[\{\[]/.test(read) && (tray = read)} catch (rcon) {}
            tray = oven.write ? oven.write(tray, cook) : encodeURIComponent(String(tray)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), cook = encodeURIComponent(String(cook)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
            var ID = "";
            for (var strings in write) write[strings] && (ID += "; " + strings, !0 !== write[strings] && (ID += "=" + write[strings].split(";")[0]));
            return document.cookie = cook + "=" + tray + ID}}
    function read(rcon, tray) {
        if ("undefined" != typeof document) {
            for (var record = {}, write = document.cookie ? document.cookie.split("; ") : [], read = 0; read < write.length; read++) {
                var ID = write[read].split("="),
                strings = ID.slice(1).join("=");
                tray || '"' !== strings.charAt(0) || (strings = strings.slice(1, -1));
                try {
                    var baked = cook(ID[0]);
                    if (strings = (oven.read || oven)(strings, baked) || cook(strings), tray) 
                    try {
                        strings = JSON.parse(strings)} catch (rcon) {}
                    if (record[baked] = strings, rcon === baked) break} catch (rcon) {}}
          return rcon ? record[rcon] : record}}
    return record.set = write, record.get = function(rcon) {
        return read(rcon, !1)}, record.getJSON = function(rcon) {
        return read(rcon, !0)}, record.remove = function(cook, tray) {
        write(cook, "", rcon(tray, {
            expires: -1}))}, record.defaults = {}, record.withConverter = tray, record}(function() {})})