import React, { useState } from 'react'
import "./dashboard.scss"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import ArticleIcon from '@mui/icons-material/Article';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DraftsIcon from '@mui/icons-material/Drafts';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import TvIcon from '@mui/icons-material/Tv';
import Table from '../../components/table/Table';
import Message from '../../components/message/Message';
import History from '../../components/charts/History';
import Top from '../../components/body selection/top selection/Top';
import Sidebar from '../../components/sidebar selection/Sidebar';

export default function Dashboard() {

  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className='container'>
        <Top open={open} setOpen={setOpen} handle={handle} />
        <div className='dashboard'>

          <div className="four__box__content">
            <div className="one__box">
              <div className="left">
                <h1> $12.34 <span> +3.5% </span> </h1>
                <p> Potential growth </p>
              </div>
              <div className="right">
                <div><CallMadeIcon /></div>
              </div>
            </div>
            <div className="two__box">
              <div className="left">
                <h1> $17.34 <span> +11% </span> </h1>
                <p> Revenue current </p>
              </div>
              <div className="right">
                <div><CallMadeIcon /></div>
              </div>
            </div>
            <div className="three__box">
              <div className="left">
                <h1> $12.34 <span> -2.4% </span> </h1>
                <p> Daily Income </p>
              </div>
              <div className="right">
                <div><CallReceivedIcon /></div>
              </div>
            </div>
            <div className="four__box">
              <div className="left">
                <h1> $31.53 <span> +3.5% </span> </h1>
                <p> Expense current </p>
              </div>
              <div className="right">
                <div><CallMadeIcon /></div>
              </div>
            </div>
          </div>

          <div className='history__projects'>

            <div className='history'>
              <h3> Transaction History </h3>

              <History />

            </div>

            <div className='projects'>
              <div className='projects__content'>

                <div className="head">
                  <h3> Open Projects </h3>
                  <p> Your data status </p>
                </div>

                <div className='contents'>
                  <div className='left'>
                    <div className='icon1'> <ArticleIcon /> </div>
                    <div>
                      <h3> Admin dashboard design </h3>
                      <p> Broadcast web app mockup </p>
                    </div>
                  </div>
                  <div className='right'>
                    <p> 15 minutes ago </p>
                    <p> 30 tasks, 5 issues </p>
                  </div>
                </div>
                <hr />
                <div className='contents'>
                  <div className='left'>
                    <div className='icon2'> <CloudDownloadIcon /> </div>
                    <div>
                      <h3> Worldpress Development </h3>
                      <p> Upload new design </p>
                    </div>
                  </div>
                  <div className='right'>
                    <p> 1 hour ago </p>
                    <p> 23 tasks, 5 issues </p>
                  </div>
                </div>
                <hr />
                <div className='contents'>
                  <div className='left'>
                    <div className='icon3'> <WatchLaterIcon /> </div>
                    <div>
                      <h3> Project meeting </h3>
                      <p> New project discussion </p>
                    </div>
                  </div>
                  <div className='right'>
                    <p> 35 minutes ago </p>
                    <p> 15 tasks, 2 issues </p>
                  </div>
                </div>
                <hr />
                <div className='contents'>
                  <div className='left'>
                    <div className='icon4'> <DraftsIcon /> </div>
                    <div>
                      <h3> Broadcast Mail </h3>
                      <p> Sent release details to team </p>
                    </div>
                  </div>
                  <div className='right'>
                    <p> 55 minutes ago </p>
                    <p> 35 tasks, 7 issues </p>
                  </div>
                </div>
                <hr />
                <div className='contents'>
                  <div className='left'>
                    <div className='icon5'> <DonutSmallIcon /> </div>
                    <div>
                      <h3> UI Design </h3>
                      <p> New application planning </p>
                    </div>
                  </div>
                  <div className='right'>
                    <p> 50 minutes ago </p>
                    <p> 27 tasks, 4 issues </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className='third'>

            <div className='one__box'>
              <h3> Revenue </h3>
              <div className='one__box__content'>

                <div className="left">
                  <h1> $32123 <span> +3.5% </span> </h1>
                  <p> 11.38% Since last month </p>
                </div>

                <div className="right">
                  <div><ViewInArIcon className='icon' /></div>
                </div>

              </div>

            </div>

            <div className='two__box'>
              <h3> Sales </h3>
              <div className='two__box__content'>

                <div className="left">
                  <h1> $45850 <span> +8.3% </span> </h1>
                  <p> 9.61% Since last month </p>
                </div>

                <div className="right">
                  <div><HomeRepairServiceIcon className='icon2' /></div>
                </div>

              </div>
            </div>

            <div className='three__box'>
              <h3> Purchase </h3>
              <div className='three__box__content'>

                <div className="left">
                  <h1> $2039 <span> -2.1% </span> </h1>
                  <p> 2.27% Since last month </p>
                </div>

                <div className="right">
                  <div><TvIcon className='icon3' /></div>
                </div>

              </div>
            </div>
          </div>

          <div className='table'>
            <div className='left'> <Table /> </div>
            <div className='right'> <Message /> </div>
          </div>

        </div>
      </div>
    </>
  )
}
