// import React, { FC } from 'react';

import { useObjectUrl, useRotatingCache } from '../../../hooks';
import Backdrop from '../../../views/shared/Backdrop';
import { getImage } from './api';
import Loading from './Loading';

interface IState {
  url: string;
}

// class GoogleDrive extends React.Component<any, IState> {
//   state: IState = {
//     url: '',
//   };
//   componentWillMount() {
//     getImage().then((u) => {
//       this.setState({ url: u });
//     });
//   }

//   render() {
//     let url = this.state.url;

//     console.log(url);

//     return (
//       <div className="Unsplash fullscreen">
//         <Backdrop
//           className="image fullscreen"
//           ready={Boolean(url)}
//           style={{ backgroundImage: url && `url(${url})` }}
//         />
//       </div>
//     );
//   }
// }

// export default GoogleDrive;

import React, { FC, useState, useEffect } from 'react';

import { Props, defaultData } from './types';

const GoogleDrive: FC<Props> = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    async function asyncGetImage() {
      let url = await getImage();
      setUrl(url);
    }
    asyncGetImage();
  }, []);

  return (
    <div className="Unsplash fullscreen">
      {!Boolean(url) ? (
        <Loading />
      ) : (
        <Backdrop
          className="image fullscreen"
          ready={Boolean(url)}
          style={{ backgroundImage: url && `url(${url})` }}
        />
      )}
    </div>
  );
};

export default GoogleDrive;
