import React, { useState } from 'react';
import {
  MapPin,
  Coffee,
  Car,
  Camera,
  CheckCircle2,
  Bed,
  Bath,
  Gift,
  AlertTriangle,
  ChevronRight,
  Moon,
  Sun,
  Wind,
  Map,
  ExternalLink,
} from 'lucide-react';

const TripPage = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getGoogleMapsUrl = (query) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };

  const itinerary = [
    {
      day: 1,
      date: '2026.03.20 (Fri/Holiday)',
      title: '神秘の地底とカルストの風',
      location: '長門湯本温泉 泊',
      events: [
        { time: '06:28', activity: '仲町台 出発', detail: '新幹線で新山口へ', mapQuery: '新山口駅' },
        { time: '10:45', activity: '新山口駅 到着', detail: '山口旅のスタート', mapQuery: '新山口駅' },
        {
          time: '11:30',
          activity: 'レンタカー受取',
          detail: 'トヨタレンタカー新山口駅前店',
          type: 'transport',
          mapQuery: 'トヨタレンタカー新山口駅前店',
        },
        {
          time: '12:00',
          activity: 'ランチタイム',
          detail: '秋芳洞周辺（瓦そばやごぼう麺がおすすめ）',
          type: 'food',
          mapQuery: '秋芳洞 飲食店',
        },
        {
          time: '13:00',
          activity: '秋吉台・秋芳洞',
          detail: '日本最大級の鍾乳洞とカルスト台地（観光4時間）',
          type: 'spot',
          mapQuery: '秋芳洞',
        },
        {
          time: '18:00',
          activity: '長門湯本温泉 チェックイン',
          detail: '温泉街のそぞろ歩きもおすすめ',
          type: 'hotel',
          mapQuery: '長門湯本温泉',
        },
      ],
      hotel: {
        area: '長門湯本温泉',
        bath: '夜 23:00迄 / 朝 06:00〜09:00',
        checkout: '10:00',
        amenities: [
          'ハンドタオル',
          '歯ブラシ・歯磨き粉',
          'バスタオル',
          'シャンプー',
          'リンス',
          'ボディーソープ',
          '石鹸',
          '浴衣',
          'ドライヤー',
          '羽毛布団',
          '髭剃り',
          'シャワートイレ',
          'シャワーキャップ',
          '綿棒',
          'くし・ブラシ',
        ],
      },
    },
    {
      day: 2,
      date: '2026.03.21 (Sat/Holiday)',
      title: '絶景ブリッジと歴史の街',
      location: '萩温泉 泊',
      events: [
        { time: '09:00', activity: 'チェックアウト', detail: '下関エリアへ南下', mapQuery: '下関市' },
        {
          time: '10:00',
          activity: '唐戸市場（昼食）',
          detail: '祝日の「活きいき馬関街」を満喫',
          type: 'food',
          mapQuery: '唐戸市場',
        },
        {
          time: '14:00',
          activity: '角島大橋',
          detail: 'エメラルドグリーンの海を渡る絶景ドライブ',
          type: 'spot',
          mapQuery: '角島大橋',
        },
        {
          time: '16:00',
          activity: '元乃隅神社',
          detail: '123基の鳥居と断崖。夕日の名所',
          type: 'spot',
          mapQuery: '元乃隅神社',
        },
        {
          time: '18:00',
          activity: '萩温泉 チェックイン',
          detail: '歴史ある城下町の温泉郷',
          type: 'hotel',
          mapQuery: '萩温泉',
        },
      ],
      hotel: {
        area: '萩温泉',
        bath: '夜 13:00〜23:30 / 朝 05:30〜09:30',
        checkout: '10:00',
        amenities: [
          '浴衣',
          '室内用足袋',
          '歯ブラシ',
          'タオル',
          'バスタオル',
          'ボディソープ',
          'シャンプー',
          'コンディショナー',
          'クレンジング',
          '洗顔料',
          '化粧水',
          '乳液',
          'ミネラルウォーター',
        ],
      },
    },
    {
      day: 3,
      date: '2026.03.22 (Sun)',
      title: '自然の造形美と帰路の旅',
      location: '新山口へ',
      events: [
        { time: '10:00', activity: 'チェックアウト', detail: '北上して須佐エリアへ', mapQuery: '萩市 須佐' },
        {
          time: '11:00',
          activity: '須佐ホルンフェルス',
          detail: '白黒の縞模様が美しい地層の断崖',
          type: 'spot',
          mapQuery: '須佐ホルンフェルス',
        },
        {
          time: '13:00',
          activity: '青海島周辺観光',
          detail: 'クルーズ3時間 ＋ センザキッチンで昼食1時間',
          type: 'spot',
          mapQuery: '道の駅 センザキッチン',
        },
        {
          time: '18:00',
          activity: 'レンタカー返却',
          detail: 'トヨタレンタカー新山口駅前店',
          type: 'transport',
          mapQuery: 'トヨタレンタカー新山口駅前店',
        },
        {
          time: '18:11',
          activity: '新山口駅 出発',
          detail: '新幹線にて帰路へ',
          mapQuery: '新山口駅',
        },
        {
          time: '22:33',
          activity: '仲町台 到着',
          detail: 'お疲れ様でした！',
          mapQuery: '仲町台駅',
        },
      ],
      hotel: null,
    },
  ];

  const packingList = [
    '運転免許証',
    '保険証',
    'スマホ充電器',
    '歩きやすい靴',
    '日焼け止め',
    '羽織もの（洞窟用）',
  ];

  const precautions = [
    {
      title: '足元の装備について',
      content:
        '秋芳洞や須佐ホルンフェルスは濡れた岩場や急な階段があります。安全のためサンダルは避け、履き慣れたスニーカーを着用してください。',
      icon: <Wind className="w-5 h-5 text-blue-500" />,
    },
    {
      title: '秋芳洞の気温と服装',
      content:
        '洞内は年間を通して約17度です。3月は外気との差があるため、1時間程度の観光で体が冷えないよう薄手の上着が必須です。',
      icon: <Wind className="w-5 h-5 text-teal-500" />,
    },
    {
      title: '祝日の唐戸市場について',
      content:
        '2026年3月21日は祝日(春分の日)です。唐戸市場の「馬関街」は非常に混雑が予想されます。遅くとも10時半までには到着することをお勧めします。',
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    },
    {
      title: '給油と移動の注意',
      content:
        '角島〜元乃隅〜萩、須佐〜青海島の区間はガソリンスタンドが限られます。山間部や海岸沿いを走るため、早めの給油を推奨します。',
      icon: <Car className="w-5 h-5 text-slate-500" />,
    },
    {
      title: '長門湯本の夜散策',
      content:
        '1泊目の長門湯本温泉は、川沿いの竹林ライトアップが非常に美しいです。3月の夜風はまだ冷たいので、暖かい格好で散策を楽しんでください。',
      icon: <Moon className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-slate-900 pb-20">
      {/* Dynamic Hero Header */}
      <header className="relative h-72 bg-slate-900 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493246507139-91e8bef99c17?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-6 bg-amber-400"></div>
            <span className="text-amber-400 text-[10px] font-black tracking-[0.3em] uppercase">Birthday Trip in 2026</span>
            <div className="h-[1px] w-6 bg-amber-400"></div>
          </div>
          <h1 className="text-4xl font-black text-white mb-2 tracking-tighter">山口・絶景と美食の旅</h1>
          <p className="text-white/60 text-xs font-bold tracking-widest uppercase">2026.03.20 - 03.22</p>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 -mt-12 relative z-20">
        {/* Day Navigator */}
        <nav className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-2xl p-2 flex mb-8 border border-white/20">
          {[1, 2, 3].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`flex-1 py-4 text-xs font-black rounded-2xl transition-all duration-500 ${
                activeDay === day
                  ? 'bg-slate-900 text-white shadow-xl translate-y-[-2px]'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              DAY 0{day}
            </button>
          ))}
        </nav>

        {/* Day Subheader */}
        <div className="mb-6 px-4 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-black text-sky-600 tracking-[0.2em] mb-1 block uppercase">
              {itinerary[activeDay - 1].date}
            </span>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">{itinerary[activeDay - 1].title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <MapPin className="w-3 h-3 text-sky-600" />
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">
                {itinerary[activeDay - 1].location}
              </span>
            </div>
          </div>
        </div>

        {/* Itinerary Cards */}
        <section className="space-y-4 mb-10">
          {itinerary[activeDay - 1].events.map((event, index) => (
            <a
              key={index}
              href={getGoogleMapsUrl(event.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex gap-5 transition-all hover:border-sky-100 hover:shadow-md active:scale-95 block"
            >
              <div className="flex flex-col items-center w-12 pt-1">
                <span className="text-[10px] font-black text-slate-300 mb-2 uppercase">{event.time}</span>
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                    event.type === 'spot'
                      ? 'bg-sky-50 text-sky-600'
                      : event.type === 'food'
                      ? 'bg-amber-50 text-amber-600'
                      : event.type === 'hotel'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'bg-slate-50 text-slate-400'
                  }`}
                >
                  {event.type === 'spot' ? (
                    <Camera className="w-5 h-5" />
                  ) : event.type === 'food' ? (
                    <Coffee className="w-5 h-5" />
                  ) : event.type === 'hotel' ? (
                    <Bed className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-slate-800 text-lg tracking-tight group-hover:text-sky-700 transition-colors">
                    {event.activity}
                  </h3>
                  <ExternalLink className="w-3 h-3 text-slate-300 mt-1" />
                </div>
                <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{event.detail}</p>
              </div>
            </a>
          ))}
        </section>

        {/* Hotel Info & Amenities */}
        {itinerary[activeDay - 1].hotel && (
          <section className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden mb-10">
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-8 text-white">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Bed className="w-5 h-5 text-indigo-300" />
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-indigo-200">
                      Accommodation
                    </span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter">{itinerary[activeDay - 1].hotel.area}</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <span className="text-[10px] font-bold">OUT 10:00</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Moon className="w-4 h-4 text-indigo-300" />
                    <span className="text-[10px] font-black uppercase opacity-60">Night Bath</span>
                  </div>
                  <p className="text-sm font-bold">
                    {itinerary[activeDay - 1].hotel.bath.split(' / ')[0].replace('夜 ', '')}
                  </p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="w-4 h-4 text-amber-300" />
                    <span className="text-[10px] font-black uppercase opacity-60">Morning Bath</span>
                  </div>
                  <p className="text-sm font-bold">
                    {itinerary[activeDay - 1].hotel.bath.split(' / ')[1]?.replace('朝 ', '') || '記載なし'}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-black text-slate-800 flex items-center gap-2">
                  <Bath className="w-4 h-4 text-indigo-600" />
                  AMENITIES
                </h4>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md uppercase tracking-widest">
                  Full List
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {itinerary[activeDay - 1].hotel.amenities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-1 group border-b border-slate-50 last:border-0"
                  >
                    <div className="w-1 h-1 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"></div>
                    <span className="text-xs text-slate-600 font-bold tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Packing List */}
        <section className="bg-amber-50 rounded-[2.5rem] p-8 border border-amber-100 mb-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Gift className="w-24 h-24" />
          </div>
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-2.5 bg-amber-400 rounded-2xl shadow-lg shadow-amber-200 text-white">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-black text-amber-900 text-xl tracking-tight">Packing List</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
            {packingList.map((item, i) => (
              <label
                key={i}
                className="flex items-center gap-3 bg-white/70 p-4 rounded-2xl cursor-pointer hover:bg-white transition-all shadow-sm group"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-lg border-amber-200 text-amber-600 focus:ring-amber-500 transition-all"
                  onChange={() => toggleCheck(`pack-${i}`)}
                  checked={!!checkedItems[`pack-${i}`]}
                />
                <span
                  className={`text-sm font-bold transition-all ${
                    checkedItems[`pack-${i}`] ? 'line-through text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {item}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Precautions (Bottom) */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6 px-4">
            <div className="p-2 bg-slate-800 rounded-xl text-white">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-black text-slate-800 text-xl tracking-tight">Travel Notes</h3>
          </div>
          <div className="space-y-4">
            {precautions.map((note, i) => (
              <div
                key={i}
                className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1.5 bg-slate-50 rounded-lg">{note.icon}</div>
                  <h4 className="font-black text-slate-800 tracking-tight">{note.title}</h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-bold">{note.content}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center px-6">
          <div className="h-[1px] w-12 bg-slate-200 mx-auto mb-6"></div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            Wish you the best birthday trip!
          </p>
          <div className="flex justify-center gap-2 text-slate-300">
            <Map className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Yamaguchi Prefecture</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default TripPage;
