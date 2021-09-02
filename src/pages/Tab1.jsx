import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { bookOutline, heart, search } from 'ionicons/icons';
import { useStoreState } from 'pullstate';
import { useRef } from 'react';
import { WordStore } from '../store';
import { getFavourites, getSearchCount } from '../store/Selectors';

const Tab1 = () => {

  const pageRef = useRef();
  const favourites = useStoreState(WordStore, getFavourites);
  const searchCount = useStoreState(WordStore, getSearchCount);

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
        
        <IonGrid>
          <IonRow className={ `animate__animated animate__faster animate__fadeIn` }>
            <IonCol size="12">
              <IonCard>
                <IonCardContent>
                  <IonIcon icon={ bookOutline } color="primary" style={{ fontSize: "2rem" }} />
                  <IonCardTitle>Ionic Dictionary App</IonCardTitle>
                  <p>Based on the English language</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        
          <IonRow className={ `animate__animated animate__faster animate__fadeIn` }>
            <IonCol size="12">
              <IonCard>
                <IonCardContent>
                  <IonCardTitle>Did you know?</IonCardTitle>
                  <p>There are 171, 146 words in the English language!</p>
                  <IonButton expand="block" className="ion-margin-top" routerLink="/search">Search now &rarr;</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className={ `animate__animated animate__faster animate__fadeIn` }>
            <IonCol size="6">
              <IonCard routerLink="/favourites">
                <IonCardContent className="ion-text-center">
                  <IonIcon icon={ heart } color="primary" />
                  <IonCardTitle>{ favourites.length }</IonCardTitle>
                  <IonCardSubtitle>Favourites</IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard routerLink="/favourites">
                <IonCardContent className="ion-text-center">
                  <IonIcon icon={ search } color="primary" />
                  <IonCardTitle>{ searchCount }</IonCardTitle>
                  <IonCardSubtitle>Searches</IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
