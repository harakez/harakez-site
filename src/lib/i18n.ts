/* ============================================================
   HARAKEZ — весь текст сайта на двух языках.

   Правьте здесь: код трогать не нужно. Структура ru и en
   одинаковая, поэтому TypeScript сам поймает, если где-то
   забыли перевод.

   Модель дропа: один дизайн → одна вещь → один тираж → один дроп.
   Тираж у каждого свой, назначается по вещи.

   Бренд на стадии сборки: физических вещей нет, дропов не было.
   Сайт нигде не притворяется магазином.
   ============================================================ */

export const LANGS = ['ru', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const langNames: Record<Lang, string> = { ru: 'RU', en: 'EN' };

/* Профили бренда. Отсюда их берут и подвал, и структурированные
   данные: список sameAs говорит поиску, что сайт и эти аккаунты —
   один и тот же бренд, а не разные сущности. */
export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/harakez' },
  { label: 'Telegram', href: 'https://t.me/harakez' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@harakez_official' },
];

export const formEndpoints = {
  waitlist: 'https://formspree.io/f/mwpboeoa',
  submit: 'https://formspree.io/f/meokgjgz',
  ask: 'https://formspree.io/f/meokgjgz',
};

const ru = {
  meta: {
    title: 'HARAKEZ (Харакез) — одежда по дизайнам сообщества',
    description:
      'HARAKEZ (Харакез) — бренд одежды, который будет шить вещи по дизайнам ' +
      'сообщества и выпускать их ограниченными пронумерованными тиражами.',
  },

  common: {
    menu: 'Меню',
    close: 'Закрыть',
    language: 'Язык',
    skipToContent: 'К содержимому',
    toHome: 'На главную',
  },

  nav: [
    { label: 'Дропы', href: '/#drops' },
    { label: 'Как это работает', href: '/#process' },
    { label: 'Подлинность', href: '/#authenticity' },
    { label: 'Манифест', href: '/manifesto' },
  ],

  loader: { tagline: 'Одежда по дизайнам сообщества' },

  hero: {
    eyebrow: 'Бренд собирается прямо сейчас',
    title: 'Одежда, которую придумали не мы',
    lead:
      'Один дизайн от сообщества — одна вещь, один тираж, один дроп. ' +
      'Закрылся и не повторится.',
    primary: { label: 'Предложить дизайн', href: '/submit' },
    secondary: { label: 'Как это работает', href: '/#process' },
  },

  marquee: [
    'Community-made',
    'One design · one drop',
    'Numbered',
    'No restock',
    'Made in Uzbekistan',
  ],

  /* Дропы: честный статус вместо выдуманного архива */
  drops: {
    eyebrow: 'Дропы',
    title: 'Дропы в разработке',
    lead:
      'Ни один дроп ещё не вышел. Собираем идеи и готовим производство. ' +
      'Когда первый тираж откроется, он появится здесь — и останется ' +
      'здесь навсегда, даже когда закончится.',
    statusLabel: 'Текущий статус',
    statusValue: 'Приём идей открыт',
    checksTitle: 'Что дизайн проходит до дропа',
    checksLead:
      'Идея не превращается в вещь автоматически. Прежде чем открыть тираж, ' +
      'она проходит четыре проверки — и на любой может остановиться.',
    checks: [
      {
        n: '01',
        title: 'Проверка на реализуемость',
        body:
          'Смотрим, можно ли это сшить и за какие деньги. Если конструкция ' +
          'нереальна для малого тиража, говорим сразу и объясняем почему.',
      },
      {
        n: '02',
        title: 'Голосование сообщества',
        body:
          'Отобранные идеи выносим открыто. Решает не отдел маркетинга, ' +
          'а те, кто это будет носить.',
      },
      {
        n: '03',
        title: 'Образец и ткань',
        body:
          'Шьём первый экземпляр, проверяем посадку, усадку после стирки ' +
          'и стойкость цвета. Без образца тираж не открывается.',
      },
      {
        n: '04',
        title: 'Назначение тиража',
        body:
          'Цифру ставим по вещи: сложнее исполнение — меньше тираж. ' +
          'После назначения она не меняется, допечаток не бывает.',
      },
    ],
    ctaTitle: 'Первый дроп соберётся из того, что придёт сейчас',
    ctaBody: 'Кто пришёл раньше, тот попадёт в первый выпуск, а не в двадцатый.',
    ctaLabel: 'Предложить дизайн',
  },

  process: {
    eyebrow: 'Как это работает',
    title: 'От вашего сообщения до вещи с вашим именем',
    lead: 'Четыре шага. Без агентств, без фокус-групп.',
    steps: [
      {
        n: '01',
        title: 'Идея',
        body: 'Вы описываете вещь, которой не существует: крой, ткань, силуэт, деталь.',
        result: 'Заявка принята',
      },
      {
        n: '02',
        title: 'Разбор',
        body: 'Отвечаем лично. Говорим прямо, что реально сшить, а что нет и почему.',
        result: 'Честный ответ',
      },
      {
        n: '03',
        title: 'Отбор',
        body: 'Сильные идеи выносим на открытое голосование. Тираж назначаем по вещи.',
        result: 'Дроп получает номер',
      },
      {
        n: '04',
        title: 'Дроп',
        body: 'Шьём тираж. Имя автора на бирке, номер на вещи, доля с продаж.',
        result: 'Тираж закрыт навсегда',
      },
    ],
  },

  authenticity: {
    eyebrow: 'Подлинность',
    title: 'У каждой вещи будет номер и имя автора',
    lead:
      'Бирка — не украшение, а документ. На ней дроп, серийный номер, состав ' +
      'и ссылка для проверки. Подделывать малый тираж бессмысленно: номер ' +
      'либо есть в реестре, либо его нет.',
    sampleSerial: '047',
    sampleDrop: 'Ghost Run',
    sampleEdition: 150,
    points: [
      { k: 'Serial', v: 'Сквозная нумерация внутри дропа, от 001 до последнего.' },
      { k: 'Автор', v: 'Имя человека, чей дизайн пошёл в производство, — на бирке.' },
      { k: 'Verify', v: 'Проверка номера по ссылке на обороте бирки.' },
      { k: 'Реестр', v: 'Закрытый дроп больше не допечатывается. Никогда.' },
    ],
    tagSpec: ['100% heavyweight cotton', 'Made in Uzbekistan', 'Cold wash · low heat'],
    tagVerify: 'Scan to verify',
  },

  manifesto: {
    eyebrow: 'Манифест',
    teaser: 'Одежда не должна диктовать. Она должна помогать вам рассказать вашу историю.',
    readMore: 'Читать целиком',
    pageTitle: 'Ваша идея — главный эскиз',
    lines: [
      'Мода привыкла говорить сверху вниз.',
      'Кто-то в студии решает, что вы наденете через год, и вы это надеваете.',
      'Мы делаем наоборот.',
      'Вещь начинается с человека, который её хочет, а не с плана продаж.',
      'Поэтому у каждой нашей вещи будет автор, номер и конец тиража.',
      'Она не будет висеть в каждом магазине.',
      'Её не будет через сезон.',
      'Но она будет ваша — в самом прямом смысле слова.',
    ],
    closing: 'Ваша идея — главный эскиз.',
    outro:
      'Если дочитали до этого места — скорее всего, у вас уже есть вещь, ' +
      'которой не существует. Расскажите про неё.',
    outroCta: 'Предложить дизайн',
  },

  waitlist: {
    eyebrow: 'Список ожидания',
    title: 'Узнать о первом дропе',
    lead:
      'Напишем, когда первый тираж уйдёт в производство. Одно письмо по делу, ' +
      'без рассылок и напоминаний о себе.',
    placeholder: 'you@example.com',
    button: 'В список',
    sending: 'Отправляем',
    success: 'Готово. Напишем, когда будет что показать.',
    note: 'Без спама. Только запуск дропа.',
  },

  submit: {
    eyebrow: 'Предложить дизайн',
    title: 'Опишите вещь, которой не существует',
    lead:
      'Рисовать профессионально не нужно, но подробности нужны обязательно. ' +
      'По фразе «клёвая худи» сшить нельзя — по описанию кроя, ткани и посадки можно.',
    warning:
      'Заявки без конкретики не рассматриваются. Если из описания непонятно, ' +
      'что за вещь и чем она отличается от тысячи других, запрос отклоняется без ответа.',
    success: 'Получили. Прочитаем всё до последней строчки и ответим лично.',
    successNote: 'Если идея пойдёт в производство, ваше имя встанет на бирку тиража.',
    kinds: [
      'Свитшот или худи',
      'Футболка или лонгслив',
      'Рубашка',
      'Брюки или шорты',
      'Куртка или верхняя одежда',
      'Головной убор',
      'Сумка или аксессуар',
      'Своя категория — напишу ниже',
    ],
    otherKind: 'Своя категория — напишу ниже',
    fields: {
      name: 'Как вас зовут',
      namePlaceholder: 'Имя или ник',
      contact: 'Куда ответить',
      contactPlaceholder: 'Почта или @telegram',
      kind: 'Что за вещь',
      kindPlaceholder: 'Выберите категорию',
      ownKind: 'Своя категория',
      ownKindPlaceholder: 'Напишите, что это за вещь',
      description: 'Что это за вещь и зачем она',
      descriptionPlaceholder:
        'Опишите вещь так, чтобы её можно было представить. Чем она отличается ' +
        'от того, что уже есть в магазинах.',
      fit: 'Крой и посадка',
      fitPlaceholder: 'Оверсайз, длина, объём в плечах',
      fabric: 'Ткань и ощущение',
      fabricPlaceholder: 'Плотная, мягкая, тяжёлая',
      detail: 'Главная деталь, ради которой всё затевается',
      detailPlaceholder: 'Шов, карман, застёжка, фактура, цвет',
      reference: 'Ссылка на эскиз или референс — необязательно',
    },
    counterShort: (n: number) => `Ещё ${n} ${pluralRu(n, 'символ', 'символа', 'символов')} — коротких описаний не хватает для работы`,
    counterOk: 'Достаточно для разбора',
    manualNote: 'Читаем всё вручную',
    button: 'Отправить идею',
    sending: 'Отправляем',
    hintsTitle: 'Что нужно указать',
    nextTitle: 'Что будет дальше',
    hints: [
      {
        k: 'Что за вещь',
        v: 'Тип, назначение, в чём её смысл. Чем она отличается от того, что уже продаётся.',
      },
      {
        k: 'Посадка и крой',
        v: 'Оверсайз или по фигуре, длина, объём в плечах и рукаве, где садится, где свободно.',
      },
      {
        k: 'Ткань и ощущение',
        v: 'Плотная, мягкая, шуршащая, тяжёлая. С чем сравнить на ощупь.',
      },
      {
        k: 'Деталь',
        v: 'То, ради чего всё затевается: шов, карман, застёжка, фактура, цвет.',
      },
      {
        k: 'Эскиз или референс',
        v: 'Набросок от руки, фото похожей вещи, ссылка. Точность не важна — важна ясность.',
      },
    ],
    sketchNote:
      'Эскиз не обязателен, но резко повышает шансы. Подойдёт фотография ' +
      'рисунка на бумаге — достаточно, чтобы стало понятно.',
  },

  faq: {
    eyebrow: 'Вопросы',
    title: 'Что обычно спрашивают',
    items: [
      {
        q: 'У вас вообще есть одежда?',
        a:
          'Пока нет. Ни одной вещи не сшито, дропов не было, магазина нет. ' +
          'Сейчас есть система, фирменный стиль и приём идей.',
      },
      {
        q: 'Что такое дроп?',
        a:
          'Один дизайн, одна вещь, один тираж. Дроп открывается, распродаётся ' +
          'и закрывается навсегда. Следующий дроп — уже другая вещь и другой автор.',
      },
      {
        q: 'От чего зависит размер тиража?',
        a:
          'От самой вещи. Чем сильнее дизайн и сложнее исполнение, тем меньше ' +
          'тираж. Идея проще в производстве — тираж больше. Цифру назначаем ' +
          'на этапе отбора и после этого не меняем.',
      },
      {
        q: 'Что я получу, если мой дизайн возьмут в работу?',
        a:
          'Имя на бирке тиража, первый номер вещи и долю с продаж. ' +
          'Конкретные условия обсуждаем лично, до запуска производства.',
      },
      {
        q: 'Нужно ли уметь рисовать?',
        a:
          'Нет, но описывать нужно подробно. Мы читаем текст, референсы и наброски ' +
          'от руки. Задача — понять идею, а не оценить графику.',
      },
      {
        q: 'Когда будет первый дроп?',
        a:
          'Честно: точной даты нет. Нужны собранные идеи и производство. ' +
          'Как только появится — список ожидания узнает первым.',
      },
    ],
    askTitle: 'Не нашли свой вопрос?',
    askLead: 'Спросите напрямую — ответим лично, а частые вопросы добавим сюда.',
    askContact: 'Почта или @telegram',
    askQuestion: 'Ваш вопрос',
    askButton: 'Спросить',
    askSending: 'Шлём',
    askSuccess: 'Вопрос получен. Ответим на указанный контакт.',
  },

  footer: {
    about: 'Одежда по дизайнам сообщества. Тираж конечен, номер один раз, повтора не будет.',
    sections: 'Разделы',
    contact: 'Связь',
    status: 'Статус',
    statusValue: 'Приём идей открыт',
    statusNote: 'Дропов пока не было',
    rights: 'все права защищены',
    origin: 'Made in Uzbekistan · Limited · Community-made',
    submitLink: 'Предложить дизайн',
  },

  notFound: {
    code: 'Error 404',
    title: 'Этого номера нет в реестре',
    body: 'Страница не найдена. Возможно, тираж закрыт, а ссылка осталась.',
  },

  errors: {
    generic: 'Не получилось отправить. Попробуйте ещё раз через минуту.',
    offline: 'Нет связи с сервером. Проверьте интернет и повторите.',
  },
};

/** Склонение русских существительных для счётчиков. */
function pluralRu(n: number, one: string, few: string, many: string): string {
  const d = n % 10;
  const h = n % 100;
  if (d === 1 && h !== 11) return one;
  if (d >= 2 && d <= 4 && (h < 12 || h > 14)) return few;
  return many;
}

const en: typeof ru = {
  meta: {
    title: 'HARAKEZ — clothing designed by the community',
    description:
      'HARAKEZ is a clothing brand that will make garments from community ' +
      'designs and release them in limited, numbered runs.',
  },

  common: {
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    skipToContent: 'Skip to content',
    toHome: 'Back home',
  },

  nav: [
    { label: 'Drops', href: '/#drops' },
    { label: 'How it works', href: '/#process' },
    { label: 'Authenticity', href: '/#authenticity' },
    { label: 'Manifesto', href: '/manifesto' },
  ],

  loader: { tagline: 'Clothing designed by the community' },

  hero: {
    eyebrow: 'The brand is being built right now',
    title: 'Clothing we did not design',
    lead:
      'One community design becomes one garment, one run, one drop. ' +
      'Once it closes, it never comes back.',
    primary: { label: 'Submit a design', href: '/submit' },
    secondary: { label: 'How it works', href: '/#process' },
  },

  marquee: [
    'Community-made',
    'One design · one drop',
    'Numbered',
    'No restock',
    'Made in Uzbekistan',
  ],

  drops: {
    eyebrow: 'Drops',
    title: 'Drops in development',
    lead:
      'No drop has launched yet. We are collecting designs and preparing ' +
      'production. When the first run opens it will appear here — and stay ' +
      'here forever, even after it sells out.',
    statusLabel: 'Current status',
    statusValue: 'Open for submissions',
    checksTitle: 'What a design goes through before a drop',
    checksLead:
      'An idea does not become a garment automatically. Before a run opens it ' +
      'passes four checks — and it can stop at any of them.',
    checks: [
      {
        n: '01',
        title: 'Feasibility check',
        body:
          'We work out whether it can be sewn and at what cost. If the ' +
          'construction is unrealistic for a small run, we say so and explain why.',
      },
      {
        n: '02',
        title: 'Community vote',
        body:
          'Shortlisted ideas go to an open vote. The people who will wear it ' +
          'decide, not a marketing department.',
      },
      {
        n: '03',
        title: 'Sample and fabric',
        body:
          'We sew the first piece and test the fit, shrinkage after washing and ' +
          'colour fastness. No sample, no drop.',
      },
      {
        n: '04',
        title: 'Setting the run',
        body:
          'The number follows the garment: harder to make means a smaller run. ' +
          'Once set it never changes, and nothing is ever reprinted.',
      },
    ],
    ctaTitle: 'The first drop will come from what arrives now',
    ctaBody: 'Come early and you land in the first release, not the twentieth.',
    ctaLabel: 'Submit a design',
  },

  process: {
    eyebrow: 'How it works',
    title: 'From your message to a garment with your name on it',
    lead: 'Four steps. No agencies, no focus groups.',
    steps: [
      {
        n: '01',
        title: 'Idea',
        body: 'You describe a garment that does not exist: cut, fabric, silhouette, detail.',
        result: 'Submission received',
      },
      {
        n: '02',
        title: 'Review',
        body: 'We reply personally and say plainly what can be made and what cannot.',
        result: 'An honest answer',
      },
      {
        n: '03',
        title: 'Selection',
        body: 'Strong ideas go to an open vote. The run size is set by the garment.',
        result: 'The drop gets a number',
      },
      {
        n: '04',
        title: 'Drop',
        body: 'We produce the run. Author on the tag, number on the garment, a share of sales.',
        result: 'Closed forever',
      },
    ],
  },

  authenticity: {
    eyebrow: 'Authenticity',
    title: 'Every garment will carry a number and its author',
    lead:
      'The tag is a document, not decoration. It carries the drop, the serial ' +
      'number, the composition and a link to verify. Faking a small run is ' +
      'pointless: the number is either in the registry or it is not.',
    sampleSerial: '047',
    sampleDrop: 'Ghost Run',
    sampleEdition: 150,
    points: [
      { k: 'Serial', v: 'Continuous numbering inside a drop, from 001 to the last piece.' },
      { k: 'Author', v: 'The name of the person whose design went into production.' },
      { k: 'Verify', v: 'Check the number through the link on the back of the tag.' },
      { k: 'Registry', v: 'A closed drop is never reprinted. Ever.' },
    ],
    tagSpec: ['100% heavyweight cotton', 'Made in Uzbekistan', 'Cold wash · low heat'],
    tagVerify: 'Scan to verify',
  },

  manifesto: {
    eyebrow: 'Manifesto',
    teaser: 'Clothing should not dictate. It should help you tell your own story.',
    readMore: 'Read in full',
    pageTitle: 'Your idea is the master sketch',
    lines: [
      'Fashion is used to speaking from the top down.',
      'Someone in a studio decides what you will wear next year, and you wear it.',
      'We do the opposite.',
      'A garment starts with the person who wants it, not with a sales plan.',
      'That is why every piece will carry an author, a number and an end to its run.',
      'It will not hang in every store.',
      'It will not be here next season.',
      'But it will be yours, in the most literal sense.',
    ],
    closing: 'Your idea is the master sketch.',
    outro:
      'If you have read this far, you probably already have a garment in mind ' +
      'that does not exist. Tell us about it.',
    outroCta: 'Submit a design',
  },

  waitlist: {
    eyebrow: 'Waiting list',
    title: 'Hear about the first drop',
    lead:
      'We will write when the first run goes into production. One useful email, ' +
      'no newsletters, no reminders that we exist.',
    placeholder: 'you@example.com',
    button: 'Join',
    sending: 'Sending',
    success: 'Done. We will write when there is something to show.',
    note: 'No spam. Drop launch only.',
  },

  submit: {
    eyebrow: 'Submit a design',
    title: 'Describe a garment that does not exist',
    lead:
      'You do not need to draw well, but detail is essential. Nobody can sew ' +
      '“a cool hoodie” — a described cut, fabric and fit can be sewn.',
    warning:
      'Submissions without specifics are not reviewed. If the description does ' +
      'not make clear what the garment is and how it differs from a thousand ' +
      'others, the request is declined without a reply.',
    success: 'Received. We will read every line and answer personally.',
    successNote: 'If the idea goes into production, your name goes on the tag.',
    kinds: [
      'Sweatshirt or hoodie',
      'T-shirt or long sleeve',
      'Shirt',
      'Trousers or shorts',
      'Jacket or outerwear',
      'Headwear',
      'Bag or accessory',
      'Other — I will describe it below',
    ],
    otherKind: 'Other — I will describe it below',
    fields: {
      name: 'Your name',
      namePlaceholder: 'Name or handle',
      contact: 'Where to reply',
      contactPlaceholder: 'Email or @telegram',
      kind: 'What garment is it',
      kindPlaceholder: 'Choose a category',
      ownKind: 'Your category',
      ownKindPlaceholder: 'Tell us what the garment is',
      description: 'What the garment is and why it should exist',
      descriptionPlaceholder:
        'Describe it so it can be pictured. What makes it different from what ' +
        'is already in stores.',
      fit: 'Cut and fit',
      fitPlaceholder: 'Oversized, length, volume in the shoulder',
      fabric: 'Fabric and feel',
      fabricPlaceholder: 'Heavy, soft, crisp',
      detail: 'The detail the whole thing is built around',
      detailPlaceholder: 'Seam, pocket, fastening, texture, colour',
      reference: 'Link to a sketch or reference — optional',
    },
    counterShort: (n: number) =>
      `${n} more character${n === 1 ? '' : 's'} — short descriptions are not enough to work from`,
    counterOk: 'Enough to review',
    manualNote: 'Every submission read by hand',
    button: 'Send the idea',
    sending: 'Sending',
    hintsTitle: 'What to include',
    nextTitle: 'What happens next',
    hints: [
      {
        k: 'What it is',
        v: 'Type, purpose, the point of it. How it differs from what is already sold.',
      },
      {
        k: 'Cut and fit',
        v: 'Oversized or fitted, length, volume in shoulder and sleeve, where it sits close.',
      },
      {
        k: 'Fabric and feel',
        v: 'Heavy, soft, crisp, dense. What it compares to by touch.',
      },
      {
        k: 'The detail',
        v: 'What it is all built around: seam, pocket, fastening, texture, colour.',
      },
      {
        k: 'Sketch or reference',
        v: 'A hand drawing, a photo of a similar piece, a link. Clarity beats accuracy.',
      },
    ],
    sketchNote:
      'A sketch is optional but improves your chances a lot. A photo of a ' +
      'drawing on paper is enough to make it clear.',
  },

  faq: {
    eyebrow: 'Questions',
    title: 'What people usually ask',
    items: [
      {
        q: 'Do you actually have any clothing?',
        a:
          'Not yet. Nothing has been sewn, there have been no drops and there is ' +
          'no store. What exists is the system, the identity and open submissions.',
      },
      {
        q: 'What is a drop?',
        a:
          'One design, one garment, one run. A drop opens, sells out and closes ' +
          'forever. The next drop is a different garment by a different author.',
      },
      {
        q: 'What decides the size of a run?',
        a:
          'The garment itself. The stronger the design and the harder the make, ' +
          'the smaller the run. Simpler to produce means a larger run. The number ' +
          'is set at selection and never changes.',
      },
      {
        q: 'What do I get if my design is produced?',
        a:
          'Your name on the tag, the first numbered piece and a share of sales. ' +
          'Exact terms are agreed personally before production starts.',
      },
      {
        q: 'Do I need to be able to draw?',
        a:
          'No, but you do need to describe things in detail. We read text, ' +
          'references and hand sketches. The point is the idea, not the graphics.',
      },
      {
        q: 'When is the first drop?',
        a:
          'Honestly: there is no date. It needs collected designs and production ' +
          'in place. The waiting list will hear first.',
      },
    ],
    askTitle: 'Question not answered here?',
    askLead: 'Ask directly — we reply personally and add common questions to this list.',
    askContact: 'Email or @telegram',
    askQuestion: 'Your question',
    askButton: 'Ask',
    askSending: 'Sending',
    askSuccess: 'Question received. We will reply to the contact you gave.',
  },

  footer: {
    about: 'Clothing designed by the community. Runs are finite, numbers are issued once, nothing repeats.',
    sections: 'Sections',
    contact: 'Contact',
    status: 'Status',
    statusValue: 'Open for submissions',
    statusNote: 'No drops yet',
    rights: 'all rights reserved',
    origin: 'Made in Uzbekistan · Limited · Community-made',
    submitLink: 'Submit a design',
  },

  notFound: {
    code: 'Error 404',
    title: 'That number is not in the registry',
    body: 'Page not found. The run may have closed while the link stayed behind.',
  },

  errors: {
    generic: 'Could not send. Please try again in a minute.',
    offline: 'No connection to the server. Check your internet and retry.',
  },
};

export type Dict = typeof ru;

export const dictionaries: Record<Lang, Dict> = { ru, en };
