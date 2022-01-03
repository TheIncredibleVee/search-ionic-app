import { IonCol, IonGrid, IonRow } from "@ionic/react";
import MessageListItem from "./MessageListItem";
import { Message } from '../data/messages';
import React from "react";
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
  

interface DisplayProps {
    chartData: any;
    height: number;
    doughnutData:any,
    messages:Message[],
}

const Display: React.FC<DisplayProps> = ({chartData, height,doughnutData,messages}) =>{
    return (
        <IonGrid  style={{height: '100vh'}}>
            <IonRow>
            
            <IonCol size="12" >
                <div className="p-8 bg-cbg">
                    <Chart type='bar' data={chartData} height={height} options={{
                        responsive: true,
                        maintainAspectRatio: true,
                    }}/>
                </div>
                </IonCol>
                <IonCol size-xl="4" size-lg="5" size-md="6" size-sm="6" >
                <div className="p-2 bg-cbg">
                        <Doughnut data={doughnutData} />
                </div>
                </IonCol>
                <IonCol size-xl="8" size-lg="7" size-md="6" size-sm="6" >

                {messages.map(m => <MessageListItem key={m.id} message={m} />)}
              </IonCol>
            </IonRow>
        </IonGrid>
    );
}
export default Display;