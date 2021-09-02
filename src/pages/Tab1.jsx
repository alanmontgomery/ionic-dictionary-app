import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { useRef, useState } from 'react';
import { WordCard } from '../components/WordCard';
import { WordStore } from '../store';
import { getPopularWords } from '../store/Selectors';

const Tab1 = () => {

  const pageRef = useRef();
  const popularWords = useStoreState(WordStore, getPopularWords);
  const [ animatedClass, setAnimatedClass ] = useState("animate__slideInLeft");

  return (
    <IonPage ref={ pageRef }>
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

          return <WordCard key={ index } word={ word } animatedClass={ animatedClass } pageRef={ pageRef } />;
        })}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
