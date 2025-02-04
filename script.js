const systemInfo = `
           .-------------------------:                    a3ndlyb@3ndlyb
          .+=========================.                    --------------
         :++===++==================-       :++-           OS: CachyOS x86_64
        :*++====+++++=============-        .==:           Host: 83GS (LOQ 15IAX9)
       -*+++=====+***++==========:                        Kernel: Linux 6.13.0-3-cachyos
      =*++++========------------:                         Uptime: 15 hours, 35 mins
     =*+++++=====-                     ...                Packages: 1200 (pacman), 20 (flatpak)
   .+*+++++=-===:                    .=+++=:              Shell: fish 3.7.1
  :++++=====-==:                     -*****+              Display (BOE0C29): 1920x1080 @ 144 Hz in 16" [Built-in]
 :++========-=.                      .=+**+.              DE: GNOME 47.3
.+==========-.                          .                 WM: Mutter (X11)
 :+++++++====-                                .--==-.     WM Theme: Adwaita
  :++==========.                             :+++++++:    Theme: Adwaita [GTK2/3/4]
   .-===========.                            =*****+*+    Icons: Adwaita [GTK2/3/4]
    .-===========:                           .+*****+:    Font: Cantarell (11pt) [GTK2/3/4]
      -=======++++:::::::::::::::::::::::::-:  .---:      Cursor: Adwaita (24px)
       :======++++====+++******************=.             Terminal: GNOME Terminal 3.54.3
        :=====+++==========++++++++++++++*-               Terminal Font: Source Code Pro (10pt)
         .====++==============++++++++++*-                CPU: 12th Gen Intel(R) Core(TM) i5-12450HX (12) @ 4.40 GHz
          .===+==================+++++++:                 GPU 1: NVIDIA GeForce RTX 2050 [Discrete]
           .-=======================+++:                  GPU 2: Intel UHD Graphics @ 1.30 GHz [Integrated]
             ..........................                   Memory: 5.05 GiB / 7.47 GiB (68%)
                                                          Swap: 2.14 GiB / 7.47 GiB (29%)
                                                          Disk (/): 63.65 GiB / 123.53 GiB (52%) - btrfs
                                                          Disk (/mnt/data): 261.93 GiB / 351.56 GiB (75%) - fuseblk
                                                          Local IP (wlan0): 192.168.1.2/24
                                                          Battery (L23M4PK4): 60% [Discharging]
                                                          Locale: en_US.UTF-8
`;

let index = 0;
const speed = 10; // Typing speed in milliseconds

function typeText() {
    if (index < systemInfo.length) {
        document.getElementById("terminal-output").textContent += systemInfo.charAt(index);
        index++;
        setTimeout(typeText, speed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500);
});
