const terminalOutput = document.getElementById('terminal-output');
const systemInfo = `
<font color="#2AA1B3"><b>           </b></font><font color="#171421"><b>.</b></font><font color="#2AA1B3"><b>-------------------------:</b></font>                    <font color="#2AA1B3"><b>a3ndlyb</b></font>@<font color="#2AA1B3"><b>3ndlyb</b></font>
<font color="#2AA1B3"><b>          .</b></font><font color="#26A269"><b>+=</b></font><font color="#2AA1B3"><b>========================.</b></font>                    --------------
<font color="#2AA1B3"><b>         :</b></font><font color="#26A269"><b>++</b></font><font color="#2AA1B3"><b>===</b></font><font color="#26A269"><b>++===</b></font><font color="#2AA1B3"><b>===============-       :</b></font><font color="#26A269"><b>++</b></font><font color="#2AA1B3"><b>-</b></font>           <font color="#2AA1B3"><b>OS</b></font>: CachyOS x86_64
<font color="#2AA1B3"><b>        :</b></font><font color="#26A269"><b>*++</b></font><font color="#2AA1B3"><b>====</b></font><font color="#26A269"><b>+++++==</b></font><font color="#2AA1B3"><b>===========-        .==:</b></font>           <font color="#2AA1B3"><b>Host</b></font>: 83GS (LOQ 15IAX9)
<font color="#2AA1B3"><b>       -</b></font><font color="#26A269"><b>*+++</b></font><font color="#2AA1B3"><b>=====</b></font><font color="#26A269"><b>+***++=</b></font><font color="#2AA1B3"><b>=========:</b></font>                        <font color="#2AA1B3"><b>Kernel</b></font>: Linux 6.13.0-3-cachyos
<font color="#2AA1B3"><b>      =</b></font><font color="#26A269"><b>*++++=</b></font><font color="#2AA1B3"><b>=======------------:</b></font>                         <font color="#2AA1B3"><b>Uptime</b></font>: 14 hours, 8 mins
<font color="#2AA1B3"><b>     =</b></font><font color="#26A269"><b>*+++++=</b></font><font color="#2AA1B3"><b>====-                     </b></font><font color="#171421"><b>...</b></font>                <font color="#2AA1B3"><b>Packages</b></font>: 1200 (pacman), 18 (flatpak)
<font color="#2AA1B3"><b>   .</b></font><font color="#26A269"><b>+*+++++</b></font><font color="#2AA1B3"><b>=-===:                    .</b></font><font color="#26A269"><b>=+++=</b></font><font color="#2AA1B3"><b>:</b></font>              <font color="#2AA1B3"><b>Shell</b></font>: fish 3.7.1
<font color="#2AA1B3"><b>  :</b></font><font color="#26A269"><b>++++</b></font><font color="#2AA1B3"><b>=====-==:                     -***</b></font><font color="#26A269"><b>**</b></font><font color="#2AA1B3"><b>+</b></font>              <font color="#2AA1B3"><b>Display (BOE0C29)</b></font>: 1920x1080 @ 144 Hz in 16&quot; [Built-in]
<font color="#2AA1B3"><b> :</b></font><font color="#26A269"><b>++=</b></font><font color="#2AA1B3"><b>=======-=.                      .=+**+</b></font><font color="#171421"><b>.</b></font>              <font color="#2AA1B3"><b>DE</b></font>: GNOME 47.3
<font color="#2AA1B3"><b>.</b></font><font color="#26A269"><b>+</b></font><font color="#2AA1B3"><b>==========-.                          </b></font><font color="#171421"><b>.</b></font>                 <font color="#2AA1B3"><b>WM</b></font>: Mutter (X11)
<font color="#2AA1B3"><b> :</b></font><font color="#26A269"><b>+++++++</b></font><font color="#2AA1B3"><b>====-                                </b></font><font color="#171421"><b>.</b></font><font color="#2AA1B3"><b>--==-</b></font><font color="#171421"><b>.</b></font>     <font color="#2AA1B3"><b>WM Theme</b></font>: Adwaita
<font color="#2AA1B3"><b>  :</b></font><font color="#26A269"><b>++</b></font><font color="#2AA1B3"><b>==========.                             </b></font><font color="#171421"><b>:</b></font><font color="#26A269"><b>+++++++</b></font><font color="#171421"><b>:</b></font>    <font color="#2AA1B3"><b>Theme</b></font>: Adwaita [GTK2/3/4]
<font color="#171421"><b>   </b></font><font color="#2AA1B3"><b>.-===========.                            =*****+*+</b></font>    <font color="#2AA1B3"><b>Icons</b></font>: Adwaita [GTK2/3/4]
<font color="#2AA1B3"><b>    .-===========:                           .+*****+:</b></font>    <font color="#2AA1B3"><b>Font</b></font>: Cantarell (11pt) [GTK2/3/4]
<font color="#2AA1B3"><b>      -=======</b></font><font color="#26A269"><b>++++</b></font><font color="#2AA1B3"><b>:::::::::::::::::::::::::-:  </b></font><font color="#171421"><b>.</b></font><font color="#2AA1B3"><b>---:</b></font>      <font color="#2AA1B3"><b>Cursor</b></font>: Adwaita (24px)
<font color="#2AA1B3"><b>       :======</b></font><font color="#26A269"><b>++++</b></font><font color="#2AA1B3"><b>====</b></font><font color="#26A269"><b>+++******************=.</b></font>             <font color="#2AA1B3"><b>Terminal</b></font>: GNOME Terminal 3.54.3
<font color="#26A269"><b>        </b></font><font color="#2AA1B3"><b>:=====</b></font><font color="#26A269"><b>+++</b></font><font color="#2AA1B3"><b>==========</b></font><font color="#26A269"><b>++++++++++++++*-</b></font>               <font color="#2AA1B3"><b>Terminal Font</b></font>: Source Code Pro (10pt)
<font color="#26A269"><b>         </b></font><font color="#2AA1B3"><b>.====</b></font><font color="#26A269"><b>++</b></font><font color="#2AA1B3"><b>==============</b></font><font color="#26A269"><b>++++++++++*-</b></font>                <font color="#2AA1B3"><b>CPU</b></font>: 12th Gen Intel(R) Core(TM) i5-12450HX (12) @ 4.40 GHz
<font color="#26A269"><b>          </b></font><font color="#2AA1B3"><b>.===</b></font><font color="#26A269"><b>+</b></font><font color="#2AA1B3"><b>==================</b></font><font color="#26A269"><b>+++++++:</b></font>                 <font color="#2AA1B3"><b>GPU 1</b></font>: NVIDIA GeForce RTX 2050 [Discrete]
<font color="#26A269"><b>           </b></font><font color="#2AA1B3"><b>.-=======================</b></font><font color="#26A269"><b>+++:</b></font>                  <font color="#2AA1B3"><b>GPU 2</b></font>: Intel UHD Graphics @ 1.30 GHz [Integrated]
<font color="#26A269"><b>             </b></font><font color="#171421"><b>..........................</b></font>                   <font color="#2AA1B3"><b>Memory</b></font>: 4.59 GiB / 7.47 GiB (<font color="#E9AD0C">61%</font>)
                                                      <font color="#2AA1B3"><b>Swap</b></font>: 1.10 GiB / 7.47 GiB (<font color="#26A269">15%</font>)
                                                      <font color="#2AA1B3"><b>Disk (</b></font><font color="#2AA1B3"><b>/</b></font><font color="#2AA1B3"><b>)</b></font>: 63.17 GiB / 123.53 GiB (<font color="#E9AD0C">51%</font>) - btrfs
                                                      <font color="#2AA1B3"><b>Disk (</b></font><font color="#2AA1B3"><b>/mnt/data</b></font><font color="#2AA1B3"><b>)</b></font>: 261.93 GiB / 351.56 GiB (<font color="#E9AD0C">75%</font>) - fuseblk
                                                      <font color="#2AA1B3"><b>Local IP (wlan0)</b></font>: 192.168.1.2/24
                                                      <font color="#2AA1B3"><b>Battery (L23M4PK4)</b></font>: <font color="#26A269">100%</font> [AC Connected]
                                                      <font color="#2AA1B3"><b>Locale</b></font>: en_US.UTF-8

                                                      <span style="background-color:#171421">   </span><span style="background-color:#C01C28">   </span><span style="background-color:#26A269">   </span><span style="background-color:#A2734C">   </span><span style="background-color:#12488B">   </span><span style="background-color:#A347BA">   </span><span style="background-color:#2AA1B3">   </span><span style="background-color:#D0CFCC">   </span>
                                                      <span style="background-color:#5E5C64">   </span><span style="background-color:#F66151">   </span><span style="background-color:#33D17A">   </span><span style="background-color:#E9AD0C">   </span><span style="background-color:#2A7BDE">   </span><span style="background-color:#C061CB">   </span><span style="background-color:#33C7DE">   </span><span style="background-color:#FFFFFF">   </span>
<font color="#12488B">~</font>
<font color="#A347BA">❯</font> 
`;

let index = 0;
const speed = 500; // Adjust speed here (lower is faster)

function typeWriter() {
    if (index < systemInfo.length) {
        terminalOutput.innerHTML += systemInfo.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
