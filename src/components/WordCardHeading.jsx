import { IonText } from "@ionic/react";

export const WordCardHeading = ({ text }) => (

  <div style={{ marginTop: "-1.5rem" }}>
    <IonText color="light">
      <h2 className="ion-padding-start">{ text }</h2>
    </IonText>
  </div>
);