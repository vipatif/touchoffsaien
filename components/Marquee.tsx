'use client';
import {Pause, Play} from 'lucide-react';
import {useState} from 'react';

const words = ['HAIR', 'BEAUTY', 'GROOMING', 'MAKEUP', 'NAILS', 'CONFIDENCE', 'STYLE', 'TOUCH OF SAIEN'];

export default function Marquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div className={`marquee ${paused ? 'paused' : ''}`} aria-label="Hair, beauty, grooming, makeup, nails, confidence and style">
      <button className="marquee-toggle" type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused}>
        {paused ? <Play size={13} /> : <Pause size={13} />}
        <span>{paused ? 'Play' : 'Pause'}</span>
      </button>
      <div aria-hidden="true">
        {[0, 1, 2, 3].map(x => (
          <span key={x}>{words.map(word => <FragmentLike key={word} word={word} />)}</span>
        ))}
      </div>
    </div>
  );
}

function FragmentLike({word}: {word: string}) {
  return <>{word} <i>*</i> </>;
}
