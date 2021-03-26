export const Setzefakt=(fakt)=>({
type:"FAKT_GELIFERT",
payload:fakt
})

export const ZeigeFehler=(fehler)=>({
    type:"FEHLER",
    payload:fehler
    })
