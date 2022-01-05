import Loader from '../components/Loader';
import Display from '../components/Display';
import { useState, useEffect, useContext } from 'react';
import { Message} from '../data/messages';
import {
  IonContent,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonButton,
} from '@ionic/react';
import './Home.css';
import faker from 'faker';
import { setTimeout} from 'timers';
import {MessageContext} from '../context/context';
import MobileDisplay from '../components/MobileDisplay';


const Home: React.FC = () => {
    
  const {messages, setMessages, setWord} = useContext(MessageContext);

  const [total, setTtotal] = useState(0);

  const[showHelp, setShowHelp] = useState(true);
  const [width,setWidth]= useState(window.innerWidth);
  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  function re(){
    setWidth(window.innerWidth);
  }
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [foundResults, setFoundResults] = useState(true);
  const [error, setError] = useState("");
  const generateLabels =()=>{
    let date = new Date();
    var dates = [];
    var labels =[];
    labels.push(date.toISOString().split('T')[0]);
    dates.push(date);
    for(let i = 0; i < 9; i++){
      let nextDay:Date = new Date(dates[i]);
      nextDay.setDate(dates[i].getDate()-1);
      dates.push(nextDay);
      labels.push(nextDay.toISOString().split('T')[0]);
    }
    return labels.reverse();
  }
  const dispLabels =()=>{
    let date = new Date();
    var dates = [];
    var labels =[];
    labels.push(date.toDateString().split(' ').slice(1).join(' '));
    dates.push(date);
    for(let i = 0; i < 9; i++){
      let nextDay:Date = new Date(dates[i]);
      nextDay.setDate(dates[i].getDate()-1);
      dates.push(nextDay);
      labels.push(nextDay.toDateString().split(' ').slice(1).join(' '));
    }
    return labels.reverse();
  }
  const labels=generateLabels();
  // const [messages, setMessages] = useState<Message[]>([]);

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  
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
    labels: dispLabels(),
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

  
  const smaple = {
    "word": "google.com",
    "messages": [
        "Google.com is an amazing search engine",
        "the best serach engine is google.com",
        "After typing in the commands to www.google.com LaTeX (which are the instructions preceded by the backslash character) and the text of a sample paper, save them in a file with a name ending in .tex, like paper.tex. You can then type latex paper.tex and the typesetting program will run on your file of commands, producing a file ending in .dvi, which is the file that can be sent to a laserprinter (like valkyr, in Margaret Jacks Hall). (If there are any errors in your file of commands, you will be given a message which is usually impossible to interpret. Typical errors involve forgetting the right number of closing brackets or delimiters like & in example sentences. When LaTeX gives an error message and then asks what to do, possible options are to type x to quit and try to find the error in the emacs file, or press <RETURN> to try to continue and find the error by looking at the output document.) To print the file, you type lpr -Pvalkyr paper.dvi and see what you get. The easiest way to print a file of default sized pages two-up on a sheet sideways is with the command print -2 -Pprinter paper.dvi.You can't look at the .dvi file unless you have a workstation with graphics, rather than just a terminal. Any workstation that runs X-windows can be used to preview these files. You should get access to workstations (e.g. at Sweet Hall), otherwise you will waste a lot of paper and printer time while you learn how to typeset your papers.The output of the command file above should look like this:",
        "One important thing to note about drawing trees with the tree-dvips package is that the lines are drawn by postscript commands, and so you can't see them unless you have a recent version of xdvi or make a postscript file and print that out, or preview a postscript document on a workstation with the program ghostview (look it up in the man pages). To make a postscript file, type dvips -o output.ps input.dvi where input.dvi is the .dvi file you created with LaTeX and the output file is the postscript file name. Then you can do www.google.com lpr -Pvalkyr output.ps or ghostview output.ps on a workstation.",
    ],
    "totalCount": 50,
    "ten_day_count": [
        {
            "count": 10,
            "date": "2022-01-02"
        },
        {
            "count": 50,
            "date": "2022-01-01"
        },
        {
          "count": 3,
          "date": "2021-12-28"
      },
      {
        "count": 0,
        "date": "2022-01-05"
      },
      {
          "count": 0,
          "date": "2022-01-06"
      },
      {
        "count": 0,
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
        setIsLoading(true);
        setTimeout(() => {setIsLoading(false);}, 3000);
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



        var datasetForChart = Array.from({length: 10},()=>0)
        for(let i = 0; i < smaple.ten_day_count.length; i++){
            var labels = [];
            labels= generateLabels();
            var idx= labels.findIndex((val)=> val=== smaple.ten_day_count[i].date);
            datasetForChart[idx]=smaple.ten_day_count[i].count;
        }
        setChartData({...chartData,
          labels: dispLabels(),
          datasets: [
            {
              type: 'line' as const,
              label: 'Line Chart',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 2,
              fill: false,
              data: datasetForChart,
            },
            {
              type: 'bar' as const,
              label: 'Bar Graph',
              backgroundColor: 'rgb(75, 192, 192)',
              data: datasetForChart,
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
        console.log(messages);
        setShowHelp(false);
        if(searchText!=='google.com')
          throw 'Wrong Call';
        setTimeout(() => {setFoundResults(true);}, 2000);
        let tempMsg:Message[]= [];
        smaple.messages.forEach((msg,idx)=> {
          let msgg:Message={
            message: msg,
            id: idx,
          }
          tempMsg.push(msgg);
        });
        setWord(smaple.word);
        setMessages(tempMsg);
      }catch(e){

        setError(String(e));
        setFoundResults(false);
      }
    }
  useEffect(()=>{
    console.log("INside useEffect");
    console.log(error);
  },[error]);
  useEffect(() => {
    console.log(error);
    console.log({messages});
    window.addEventListener('resize', re);
    return () => window.removeEventListener('resize', re);
  },[]);

  return (


    <IonPage id="home-page" >
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

          <div className="min-h-screen bg-gradient-to-b from-tp to-tg flex justify-center items-center p-4 pt-2">
              <div className={` ${width<=640 ? "w-full":"container"} bg-satin-3 rounded-lg pt-3 pb-6 pr-3 pl-3 max-h-screen xl:pb-3 2xl:pb-2 lg:pb-4`}>
                <form>
                  {(!foundResults || isLoading) && (<><h1 className="text-center font-bold text-white text-4xl">{isLoading?<p>Searching for <b className="text-cb">{searchText}</b></p>:'Search for a word'}</h1  >
                    <p className="mx-auto font-normal text-center text-sm my-6 max-w-lg">This app will last 10 days count and last 100 messages.</p></>)}
                    <div className="xs:flex items-center bg-cbgd rounded-lg overflow-hidden px-2 py-1 justify-between">
                      <IonSearchbar className="xs-flex text-base text-gray-400 flex-grow outline-none px-2 " type="text" value={searchText} onIonChange={e => {setSearchText(e.detail.value!)}} animated placeholder="Add text to search"/>
                      <div className="xs:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                        <IonButton className=" text-white text-base rounded-lg font-thin" onClick={onClick} animate-bounce disabled={searchText===''}>Search</IonButton>
                      </div>
                    </div>
                </form>
                {isLoading && (<div className="pt-10 flex justify-center items-center">
                  <Loader></Loader>
                </div>)}
                {!isLoading && foundResults && width>1536 && (
                  <Display chartData={chartData} doughnutData={doughnutData} position='bottom' height={60} total={total} totalCountHeight={18}></Display>
                )}
                {!isLoading && foundResults && width<=1536 && width>1280 && (
                  <Display chartData={chartData} doughnutData={doughnutData} position='bottom' height={95} total={total} totalCountHeight={22}></Display>
                )}
                {!isLoading && foundResults && width<=1280 && width>1024 && (
                  <Display chartData={chartData} doughnutData={doughnutData} position='bottom' height={120} total={total} totalCountHeight={25}></Display>
                
                )}
                {!isLoading && foundResults && width<=1024 && width>768 && (
                  <Display chartData={chartData} doughnutData={doughnutData} position='bottom' height={175} total={total} totalCountHeight={28}></Display>
                
                )}
                {!isLoading && foundResults && width<=768 && width>640 && (
                  <Display chartData={chartData} doughnutData={doughnutData} position='bottom' height={225} total={total} totalCountHeight={35}></Display>
                
                )}
                {!isLoading && foundResults && width<=640  && (
                  <MobileDisplay chartData={chartData} doughnutData={doughnutData} position='right' height={250} total={total} totalCountHeight={30}></MobileDisplay>
                )}
                {!isLoading && !foundResults && error!==''  && (
                  <div className="relative mt-6 bg-red-100 p-6 rounded-xl">
                      <p className="text-lg text-red-700 font-medium"><b>{error}</b></p>
                      <span className="absolute bg-red-500 w-8 h-8 flex items-center justify-center font-bold text-green-50 rounded-full -top-2 -left-2">!</span>
                      <div className="absolute top-0 right-0 flex space-x-2 p-4">
                      </div>
                </div>
                )}

              </div>
          </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
