import useInterval from 'app/hooks/useInterval';
import React, { ReactElement, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { randomTimer } from 'utils/time';

interface Props {
  timerArray: number[];
}

const timerArray = randomTimer(20, 5);
function ExamPage({}: Props): ReactElement {
  const [count, setCount] = useState<number>(0);
  const [imageArr, setImageArr] = useState<any>([]);
  // ON/OFF
  const webcamRef = useRef<any>(null);
  useInterval(
    () => {
      console.log('Array image >>>>>>', { imageArr, timerArray });
      if (timerArray.includes(count)) {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageArr([...imageArr, imageSrc]);
      }
      setCount(count + 1);
    },
    // Delay in milliseconds or null to stop it
    count <= 20 ? 1000 : null,
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{ visibility: 'hidden', position: 'absolute' }}
        />
      </div>
      <div style={{ flex: 1 }}>
        {imageArr.map((img, index) => (
          <img key={index} src={img} alt="none" />
        ))}
      </div>
    </div>
  );
}

export default ExamPage;
