import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Popover, Divider } from 'antd';
import styles from './Home.less';
import { NavLink } from 'umi';

export default (): React.ReactNode => {
  document.title = "Home - Metal Gear Online";

  return (
    <PageContainer>
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Alert
              message={'Faster and stronger heavy-duty components have been released.'}
              type="success"
              showIcon
              banner
              style={{
                margin: -12,
                marginBottom: 24,
              }}
            />
            <p>We provide a service which allows you to play the multiplayer mode of Metal Gear Solid 4: Guns of the Patriots on PC using the <a href="https://rpcs3.net/" target="_blank">RPCS3</a> emulator.</p>
            <p>If you are looking to get started then head over to our <NavLink to="/guides">guides</NavLink> and <NavLink to="/faq">frequently asked questions</NavLink> sections.</p>
            <p>Feel free to stop by the <a href="https://discord.gg/mgo2pc" target="_blank">discord</a> if you have any questions.</p>
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <div className="container-video">
              <iframe className="video" width="10000" height="10000" src="https://www.youtube.com/embed/6W7PWfPVi74" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </Card>
        </div>
      </div>

    </PageContainer>
  );
};
