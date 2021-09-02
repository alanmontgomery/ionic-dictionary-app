import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonNote, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { heart, heartOutline, play } from 'ionicons/icons';
import { useStoreState } from 'pullstate';
import { WordStore } from '../store';
import { getFavourites } from '../store/Selectors';
import { addToFavourites } from '../store/WordStore';
import { WordCardHeading } from './WordCardHeading';
import { WordMeaning } from './WordMeaning';

const WordModal = ({ dismiss, word }) => {

  const favourites = useStoreState(WordStore, getFavourites);
  const isFavourite = favourites.includes(word);
  const audio = word.phonetics[0] ? word.phonetics[0].audio : false;

  const playAudio = () => {

    const audioElement = new Audio(`https:${ audio }`);
    audioElement.play();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonButton onClick={ () => addToFavourites(word) }>
              <IonIcon icon={ isFavourite ? heart : heartOutline } />
            </IonButton>
          </IonButtons>
          <IonTitle>View Word</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={ dismiss }>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="animate__animated animate__faster animate__slideInUp">
            <IonCol size="12">

              <IonCard>
                <IonCardContent>
                  <IonCardTitle>{ word.word }</IonCardTitle>
                  <div className="ion-padding-bottom ion-padding-top">
                    { word.meanings && word.meanings.map((meaning, index) => {

                      return (
                        <span key={ `meaning_${ index }` }>
                          <IonBadge key={ index } color="primary">{ meaning.partOfSpeech }</IonBadge>&nbsp;
                        </span>
                      );
                    })}
                  </div>
                  <IonNote color="white">{ word.origin }</IonNote>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          { audio &&
            <IonRow className="animate__animated animate__faster animate__slideInUp">
              <IonCol size="12">
                
                <WordCardHeading text="Audio Clip" />

                <IonCard>
                  <IonCardContent>

                    <IonRow>
                      <IonCol size="12">
                        <IonButton color="primary" expand="block" onClick={ playAudio }>
                          <IonIcon icon={ play } />
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          }

          <IonRow className="animate__animated animate__faster animate__slideInUp">
            <IonCol size="12">
              
              <WordCardHeading text="Meanings" />

              <IonCard>
                <IonCardContent>
                  { word.meanings && word.meanings.map((meaning, index) => {

                    return <WordMeaning key={ index } index={ index } meaning={ meaning } />;
                  })}
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default WordModal;
