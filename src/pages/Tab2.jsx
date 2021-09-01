import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { NoSearch } from '../components/NoSearch';
import { NoResultsWordCard, WordCard } from '../components/WordCard';
import { searchWord } from '../utils';

const Tab2 = () => {

  const [ searchTerm, setSearchTerm ] = useState("");
  const [ searchResult, setSearchResult ] = useState(false);
  const [ animatedClass, setAnimatedClass ] = useState("animate__slideInLeft");

  const performSearch = async () => {

    setAnimatedClass("animate__slideOutRight");
    const result = searchTerm !== "" ? await searchWord(searchTerm) : undefined;

    setTimeout(() => {
      
      setSearchResult(result === undefined ? "none" : result);
      setAnimatedClass("animate__slideInLeft");
    }, 80);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol size="9">
              <IonSearchbar animated value={ searchTerm } onIonChange={ e => setSearchTerm(e.target.value) } />
            </IonCol>

            <IonCol size="3">
              <IonButton color="primary" onClick={ performSearch }>Search</IonButton>
            </IonCol>
          </IonRow>

          { (searchResult && searchResult !== "none") && 
            
            <WordCard word={ searchResult } animatedClass={ animatedClass } /> 
          }

          { (searchResult && searchResult === "none") && 
            
            <NoResultsWordCard word={ searchResult } animatedClass={ animatedClass } /> 
          }

          { !searchResult && <NoSearch /> }
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
