
import {Setzefakt,ZeigeFehler} from "../actions/katzenaction"
export const holeKatzenfakten = () => (dispatch) => {

    try {
        window.fetch("https://cat-fact.herokuapp.com/facts").then((response) => {
            response.json().then(
                (katzenfaktenobjekt) => {
                    console.log(katzenfaktenobjekt);
                    let katzenfakt = katzenfaktenobjekt[0].text;
                    let actionobjekt = Setzefakt(katzenfakt);
                    dispatch(actionobjekt);
                }
            )
        })
        .catch((ursache) => {
            console.log("Fehlerursache:", ursache.toString());
            
            dispatch(ZeigeFehler(ursache.toString()));
        });

    } catch (exception) {
        dispatch(ZeigeFehler(exception));
    }

}