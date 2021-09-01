import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { WordStore } from '../store';
import { getPopularWords } from '../store/Selectors';

const Tab1 = () => {

  const popularWords = useStoreState(WordStore, getPopularWords);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>

        { popularWords.map((word, index) => {

          const audioElement = new Audio(`https:${ word.phonetics[0].audio }`);

          return (
            <>
              <IonButton color="primary" onClick={ () => audioElement.play() }>Play</IonButton>
            </>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
