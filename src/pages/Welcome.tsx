import React from 'react';
import { Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { RCMap, Config, TileLayer } from 'rc-leaflet';

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <RCMap crs={Config.CRS.BMap}>
        <TileLayer.BMap />
      </RCMap>
    </Card>
  </PageHeaderWrapper>
);
