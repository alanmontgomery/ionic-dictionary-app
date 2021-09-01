import { IonBadge, IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonIcon, IonNote, IonRow } from "@ionic/react";
import { checkmarkCircleOutline, chevronForward, closeCircleOutline } from "ionicons/icons";

export const WordCard = ({ word, animatedClass }) => {

  return (
    <IonRow className={ `animate__animated animate__faster ${ animatedClass }` }>
      <IonCol size="12">
        <IonCard>
          <IonCardContent>
            <IonCardTitle>{ word.word }</IonCardTitle>
            <div className="ion-padding-bottom ion-padding-top">
              { word.meanings && word.meanings.map((meaning, index) => {

                return <><IonBadge key={index} color="primary">{ meaning.partOfSpeech }</IonBadge>&nbsp;</>;
              })}
            </div>
            <IonNote color="white">{ word.origin }</IonNote>

            <IonRow className="ion-padding-top ion-align-items-center ion-justify-content-center ion-text-center">
              <IonCol size="4">
                <IonCardTitle>{ word.meanings.length }</IonCardTitle>
                <IonCardSubtitle>meanings</IonCardSubtitle>
              </IonCol>

              <IonCol size="4">
                <IonCardTitle>{ word.phonetics.length }</IonCardTitle>
                <IonCardSubtitle>phonetics</IonCardSubtitle>
              </IonCol>
              <IonCol size="4">
                <IonCardTitle>
                  <IonIcon icon={ (word.phonetics[0] && word.phonetics[0].audio) ? checkmarkCircleOutline : closeCircleOutline } />
                </IonCardTitle>
                <IonCardSubtitle>audio</IonCardSubtitle>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <IonButton color="primary" expand="block">
                  View&nbsp;<IonIcon icon={ chevronForward } />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
}

export const NoResultsWordCard = ({ word, animatedClass }) => {

  return (
    <IonRow className={ `animate__animated animate__faster ${ animatedClass }` }>
      <IonCol size="12">
        <IonCard>
          <IonCardContent>
            <IonCardTitle>Whoops...</IonCardTitle>
            <div className="ion-padding-bottom ion-padding-top">
              <IonBadge color="primary">no results</IonBadge>&nbsp;
              <IonBadge color="primary">found</IonBadge>
            </div>
            <IonNote color="white">
              No results have been found for your search criteria! Please try another word.
            </IonNote>

            <IonRow className="ion-padding-top ion-align-items-center ion-justify-content-center ion-text-center">
              <IonCol size="4">
                <IonCardTitle>0</IonCardTitle>
                <IonCardSubtitle>meanings</IonCardSubtitle>
              </IonCol>

              <IonCol size="4">
                <IonCardTitle>0</IonCardTitle>
                <IonCardSubtitle>phonetics</IonCardSubtitle>
              </IonCol>
              <IonCol size="4">
                <IonCardTitle>
                  <IonIcon icon={ closeCircleOutline } />
                </IonCardTitle>
                <IonCardSubtitle>audio</IonCardSubtitle>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
}