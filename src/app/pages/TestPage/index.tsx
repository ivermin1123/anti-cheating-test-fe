import useInterval from 'app/hooks/useInterval';
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props {}
const container = {
  count: 0,
};

function ExamPage({}: Props): ReactElement {
  const [count, setCount] = useState<number>(0);
  const [obj, setObj] = useState({ count });

  const hide = () => {
    console.log('Now Time', count);
  };
  const saveCallBack = useRef<any>(hide);

  useEffect(() => {
    saveCallBack.current = hide;
  }, [hide]);

  useInterval(
    () => {
      setCount(v => v + 1);
      console.log(count);
      setObj({ count });
      container.count = count;
    },
    // Delay in milliseconds or null to stop it
    count <= 9999 ? 1000 : null,
  );

  const logCount = function () {
    console.log(count);
  };

  const handleClick = () => {
    console.log(obj);
    setTimeout(function () {
      const log = object => {
        console.log(object.count);
      };
      return log(container);
    }, 3000);
    console.log('Click');
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ExamPage;
