import type { NextPage } from "next";
import { useEffect, useState } from "react";
interface Props {
  offsety: number;
}

const ProgressBar: NextPage<Props> = ({ offsety }) => {
  const [barLength, setBarLength] = useState('100%')

  useEffect(() => {
    //calculate % of page scrolled thru and set to barlength
    const docHeight = window.document.body.offsetHeight
    const percent = 100 - (offsety / docHeight * 122)
    console.log(percent)
    setBarLength(`${percent}%`)
  }, [offsety])

  return (
    < >
      <div className="fixed bottom-0 w-screen h-2 bg-gradient-to-r from-miami to-foam" />
      <div className="fixed bottom-0 right-0 w-screen h-2 bg-offblack" style={{width: barLength}}/>
    </>
  );
}

export default ProgressBar
