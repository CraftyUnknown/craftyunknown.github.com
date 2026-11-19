# craftyunknown.github.io

Clock + simple multiplayer games. Static site (`index.html`); multiplayer is peer-to-peer (PeerJS/WebRTC).

## Multiplayer server (free, one-time setup)
Lobbies need a small signaling server (it only introduces players; game data goes peer-to-peer).
1. Sign in at https://render.com with GitHub.
2. New > Blueprint > select this repository > Apply (uses `render.yaml`, free plan).
3. When live it is at `https://craftyunknown-peer.onrender.com` (already listed in `SV` in `index.html`).
   If Render gave it a different URL, edit the `SV` list near the top of the script.

Free instances sleep after ~15 min idle; the site wakes it on page load, first lobby after a long idle can take ~1 min.
