import MessageListItem from '../components/MessageListItem';
import { useState, useEffect } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonSearchbar,
  IonButton,
  IonRow,
  IonCol,
  IonGrid,
  IonLabel,
  IonCard,
  IonListHeader,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from '@ionic/react';
import './Home.css';
import { Doughnut , Chart} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ArcElement,
  registerables
} from 'chart.js';
import faker from 'faker';
import { chevronForward } from 'ionicons/icons';

ChartJS.register(...registerables);


ChartJS.register(
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);



const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const [doughnutData, setDoughnutData] = useState({
    labels: labels,
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  });

  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Line Chart',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      },
      {
        type: 'bar' as const,
        label: 'Bar Graph',
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'white',
        borderWidth: 2,
      }
    ],
  });

  // const data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.8)',
  //         'rgba(54, 162, 235, 0.8)',
  //         'rgba(255, 206, 86, 0.8)',
  //         'rgba(75, 192, 192, 0.8)',
  //         'rgba(153, 102, 255, 0.8)',
  //         'rgba(255, 159, 64, 0.8)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 2,
  //     },
  //   ],
  // };

  
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
  );
  const smaple = {
    "word": "google.com",
    "messages": [
        "Google.com is an amazing search engine",
        "Hi. I am Arya and I like google.com"
    ],
    "totalCount": 50,
    "ten_day_count": [
        {
            "count": 1,
            "date": "2022-01-02"
        },
        {
            "count": 7,
            "date": "2022-01-03"
        },
        {
          "count": 2,
          "date": "2022-01-04"
      },
      {
        "count": 9,
        "date": "2022-01-05"
      },
      {
          "count": 11,
          "date": "2022-01-06"
      },
      {
        "count": 3,
        "date": "2022-01-07"
      },
      {
        "count": 4,
        "date": "2022-01-08"
      },
    ]
}


    const onClick = async(e: any) => {
      try{
        // const res= await fetch('url',{
        //   method: 'GET',
        // });
        setTtotal(smaple.totalCount);
        setDoughnutData({...doughnutData,
          labels: smaple.ten_day_count.map(x => x.date),
          datasets: [
            {
              label: '10 days count',
              data: smaple.ten_day_count.map(x => x.count),
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
          ],

        });
        setChartData({...chartData,
          labels: smaple.ten_day_count.map(x => x.date),
          datasets: [
            {
              type: 'line' as const,
              label: 'Line Chart',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 2,
              fill: false,
              data: smaple.ten_day_count.map(x => x.count),
            },
            {
              type: 'bar' as const,
              label: 'Bar Graph',
              backgroundColor: 'rgb(75, 192, 192)',
              data: smaple.ten_day_count.map(x => x.count),
              borderColor: 'white',
              borderWidth: 2,
            }
          ],
        });
        smaple.messages.forEach((msg,idx)=> {
          messages[idx]= {
            message: msg,
            id: idx,
          };
        });
        messages.length = smaple.messages.length;
        console.log(messages);
        setShowHelp(false);
      }catch(e){
        console.error(e);
      }
    }

  const [total, setTtotal] = useState(0);

  const[showHelp, setShowHelp] = useState(true);
  const [width,setWidth]= useState(window.innerWidth);
  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  const [searchText, setSearchText] = useState('');
  console.log(searchText);
  const [showDoughnut, setShowDoughnut] = useState(true);
  const [showBar, setShowBar] = useState(true);

  useEffect(() => {
    if(!showBar && !showDoughnut){
      setWidth(100);
    }else{
      setWidth(window.innerWidth);
    }
  }, [showBar, showDoughnut]);
  return (


    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search-app</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Search-app
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid fixed> 
          <IonRow style={{height: 'fit-content'}}>
            <IonCol size-xl="11" size-lg="11" size-md="10" size-sm="9" size-xs="9" >
              <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated placeholder="Add text to search"></IonSearchbar>
            </IonCol>
            <IonCol size-xl="1"  size-lg="1" size-md="2"  size-sm="3" size-xs="3" className="ion-align-self-center" style={{height: 'fit-content'}}>
            <IonButton size="default" onClick={onClick}>  
              Submit
            </IonButton>
            </IonCol>
          
          
            </IonRow>
            {showHelp&&(<IonRow className="ion-text-center ion-justify-content-center ion-margin-top">
                <IonCol size="10">
                    <IonLabel>
                        <h2>Search for a word </h2>
                        <p>This app will last 10 days count and last 100 messages.</p>
                    </IonLabel>
                </IonCol>
            </IonRow>)} 
            </IonGrid>
            {width>576 && !showHelp?(
            <IonGrid fixed style={{height: '100vh'}}>
              <IonRow>
               
                <IonCol size-xl="4" size-lg="5" size-md="6" size-sm="6" size-xs="12">
                  {showDoughnut&& (
                    <IonCard>
                        <Doughnut data={doughnutData} />
                    </IonCard>
                  )}
                  {
                    showBar&&
                    (
                    <IonCard>
                      <Chart type='bar' data={chartData} />
                    </IonCard> 
                    )
                  }
                  <IonRow>
                    <IonCol size="6">
                      <IonButton color="primary" expand="block" onClick={ (e)=>setShowDoughnut(!showDoughnut) }>
                        Toggle Chart 1&nbsp;<IonIcon icon={ chevronForward } />
                      </IonButton>
                    </IonCol>
                    <IonCol size="6">
                      <IonButton color="primary" expand="block" onClick={ (e)=>setShowBar(!showBar) }>
                        Toggle Chart 2&nbsp;<IonIcon icon={ chevronForward } />
                      </IonButton>
                    </IonCol>
                  </IonRow> 
                </IonCol>
                <IonCol size-xl="8" size-lg="7" size-md="6" size-sm="6" size-xs="12">
                  <IonContent>
                    
                  
                    {messages.map(m => <MessageListItem key={m.id} message={m} />)}
                  </IonContent>
                </IonCol>
                
              </IonRow>
            </IonGrid>)
            :!showHelp &&(
              <IonGrid>
              <IonRow>
               
                <IonCol >
                {showDoughnut&& (
                    <IonCard>
                        <Doughnut data={doughnutData} />
                    </IonCard>
                  )}
                  {
                    showBar&&(
                    <IonCard>
                      <Chart type='bar' data={chartData} />
                    </IonCard> 
                    )
                  }
                  <IonRow>
                    <IonCol size="6">
                      <IonButton color="primary" expand="block" onClick={ (e)=>setShowDoughnut(!showDoughnut) }>
                        Toggle Chart 1&nbsp;<IonIcon icon={ chevronForward } />
                      </IonButton>
                    </IonCol>
                    <IonCol size="6">
                      <IonButton color="primary" expand="block" onClick={ (e)=>setShowBar(!showBar) }>
                        Toggle Chart 2&nbsp;<IonIcon icon={ chevronForward } />
                      </IonButton>
                    </IonCol>
                  </IonRow>  
                </IonCol>
                </IonRow>
                <IonRow>
                <IonCol >

                <IonCard>

                <IonCardHeader>
                  <IonCardSubtitle>Total Count</IonCardSubtitle>
                  <IonCardTitle>{total}</IonCardTitle>
                </IonCardHeader>
                  </IonCard>

                    {messages.map(m => <MessageListItem key={m.id} message={m} />)}
                  
                </IonCol>
                
              </IonRow>
            </IonGrid>
            )}     
      </IonContent>
    </IonPage>
  );
};

export default Home;
