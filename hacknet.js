GUI=document.body.children["GUI"]
app={
    terminal:GUI.children["cmd"].children[1].children[0],
    cmd:GUI.children["cmd"].children[1].children[0].children[0],
    color:"white",
    error:"SYS.compile([app[\"env\"]+lines[i]+\"\",\"No Command \"+lines[i].split(\" \")[0]+\" - Check Syntax\"])",
    buffer:120}
SYS["clear"]=function(e){for(var i=0;i<line;i++)if(e.children[0].id!="cursor")e.children[0].remove()}
window.onload=function(){ //cmd window execution here for visuals
    setInterval(function(){GUI.children[1].children[3].innerText=fps},1)
    console.group("Information");console.warn("This game was orginially created by Matt Trobbiani, @Orann, please buy the orginial game for the best experience: (https://store.steampowered.com/app/365450/Hacknet/)"),console.warn("This project was created by Bartender (https://steamcommunity.com/id/WineBartender/), a complete recreation of hacknet in javascript for support of all broswers and devices; allowing people to play on their phones anywhere."),console.warn("This game is offine page accessible! You can simply download and play anywhere, even without wifi! (https://github.com/BartenderWinery/Hacknet)"); console.groupEnd()
    if(!Cookies.get("settings")){
        Cookies.set("settings","")}
    //replace regular text with P tag
    GUI.insertAdjacentHTML("afterbegin","<iframe src=content/web/Login.html style=height:55%;width:448px;margin-top:135px;margin-left:180px;margin-right:10%></iframe>")}
addEventListener("resize",()=>{
    CMD.set("help",["SYS.compile(['?:>[]']);SYS.compile([...[\""+"-".repeat(innerWidth/19)+"\"],...eval(\"switch(::){case 2:['yo'];default:['Command list - Page 1 of 3','','help [PAGE NUMBER]','  Displays the specified page of commands.','','scp [filename] [OPTIONAL: destination]','  copies file named [filename] from remote machine to specified local folder (/bin default)','','scan','  Scans for links on the connected machine and adds them to the map','','rm [filename (or use * for all files in folder)]','  Deletes specified file(s)','','ps','  Lists currently running processes and their PIDs','']}\"),...[\""+"-".repeat(innerWidth/19)+"\"]])",["'"+"-".repeat(innerWidth/18.8)+"'","'Command list - Page 1 of 3'"]])})
API={ //scripts for common buttons and such
    encode:function(d,s,r){ //incorporate into native cookie system later
        var a=Cookies.parse(d)
        a[s]=r
        Cookies.set(d,typeof(a)!="object"?a:JSON.stringify(a))},
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
        if(!document.body.children["SUB"])
            document.body.insertAdjacentHTML("afterbegin","<iframe id='SUB' loading=lazy style='position:absolute' src="+data+"></iframe>")
        else
            document.body.children["SUB"].style.pointerEvents="all"
            document.body.children["SUB"].src=data},
    deload:function(){
        document.body.children["SUB"].style.pointerEvents="none"
        document.body.children["SUB"].src=""
        GUI.style.visibility="visible"}}
hacknet={
    node:function(n,i,x,y){
        GUI.children[4].insertAdjacentHTML("beforeEnd","<div id='"+i+"' name='"+n+"' class='node' style=left:"+x+"%;top:"+y+"%><img src=content/NodeCircle.png style=height:70%></img></div>")
        GUI.children[4].children[i].children[0].onclick=hacknet.connect(GUI.children[4].children[i])},
    connect:function(e){
        GUI.children["taskbar"].children["net"].children[0].innerText="Location: "+(e?e.attributes.name.value+"@"+e.id:"Not Connected")}}
profiles={
    load:function(account){
        document.body.style=document.body.style+""
        GUI.children[0].style.display="none"
        GUI.children[1].style.display="flex"
        GUI.children[2].style.display="block"
        GUI.children[3].style.display="block"
        GUI.children[4].style.display="flex"
        GUI.children[5].style.display="block"
        if(!String(Cookies.get("accounts")).includes(account)){
            if(Cookies.get("accounts")&&!Cookies.get(account)){Cookies.set("accounts","{\"data\":\""+Cookies.parse("accounts")["data"]+";"+account+"\",\"login\":\""+account+"\"}")}
            if(!Cookies.get("accounts")){Cookies.set("accounts","{\"data\":\""+account+"\",\"login\":\""+account+"\"}")}
            if(!Cookies.get(account)){
                Cookies.set(account,"{\"ip\":\""+(Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"\"}")}}
        app["env"]=Cookies.parse(account)["ip"]+"@>"
        app["terminal"].children[0].focus({preventScroll:true})
        GUI.children["taskbar"].children["net"].children[1].innerText="Home IP: "+Cookies.parse(account)["ip"]
        app.cmd.parentElement.childNodes[0].textContent=app.env
        CMD=new Map([
            ["help",["SYS.compile(['?:>[]']);SYS.compile([...[\""+"-".repeat(innerWidth/19)+"\"],...eval(\"switch(::){case 2:['yo'];default:['Command list - Page 1 of 3','','help [PAGE NUMBER]','  Displays the specified page of commands.','','scp [filename] [OPTIONAL: destination]','  copies file named [filename] from remote machine to specified local folder (/bin default)','','scan','  Scans for links on the connected machine and adds them to the map','','rm [filename (or use * for all files in folder)]','  Deletes specified file(s)','','ps','  Lists currently running processes and their PIDs','']}\"),...[\""+"-".repeat(innerWidth/19)+"\"]])",["'"+"-".repeat(innerWidth/18.8)+"'","'Command list - Page 1 of 3'"]]],
            ["clear",["SYS.clear(app['terminal'].parentElement)"]],
            ["",["SYS.compile(['"+app.env+"'])"]]])
        API.encode("accounts","login",account)},
    deload:function(){
        GUI.children[0].style.display="flex"
        GUI.children[1].style.display="none"
        GUI.children[2].style.display="none"
        GUI.children[3].style.display="none"
        GUI.children[4].style.display="none"
        GUI.children[5].style.display="none"}}
const times = [];let fps;
function refreshLoop(){
    window.requestAnimationFrame(()=>{
        const now = performance.now();
        while(times.length>0&&times[0]<=now-1000){
            times.shift()}
        times.push(now)
        fps = times.length
        refreshLoop()})}
refreshLoop()
var _cookies=document.cookie?Object.fromEntries(decodeURIComponent(document.cookie).split("; ").map((m)=>{m=m.split("=");return[m[0],m[1]]})):{}
var Cookies={
    set:function(k,v){
        document.cookie=k+"="+encodeURIComponent(typeof(v)!="object"?v:JSON.stringify(v))
        return _cookies[k]=v},
    get:function(k){
        return _cookies[k]},
    parse:function(k){
        return JSON.parse(this.get(k))},
    remove:function(k){
        document.cookie=k+"=; expires=Thu, 18 Dec 2013 12:00:00 UTC"
        delete _cookies[k]}}