export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export const LEGAL = {
  en: {
    terms: {
      title: "Terms & Conditions",
      intro:
        "These terms apply to your access to and use of the AIN General Trading LLC website. Please read them before using the website or requesting a quotation.",
      lastUpdated: "Last updated: 21 October 2026",
      sections: [
        {
          title: "1. About AIN and these terms",
          paragraphs: [
            'This website is operated by AIN General Trading LLC ("AIN", "we", "us" or "our"), a UAE business whose contact details are listed below. The website provides information about trade supplies and lets visitors prepare a request for quotation (RFQ). It is not an online checkout or a catalogue of binding offers.',
            "By using the website, you agree to these terms. If you do not agree, do not use the website. Any sale is also governed by the specific written quotation, order confirmation and sale terms agreed between AIN and the customer.",
          ],
        },
        {
          title: "2. Website information and quotations",
          paragraphs: [
            "Product descriptions, images, specifications, brands, prices and availability on this website are indicative only and may change. They do not constitute an offer to sell. A request submitted through the site is an enquiry only; it does not place an order or create a contract.",
            "A sale contract is formed only when AIN issues and the customer accepts a quotation or order confirmation, and any required deposit, purchase order or other acceptance step stated in it is completed. The quotation will identify applicable product details, pricing, validity, payment, delivery and other sale conditions. If documents conflict, the later written agreement signed or expressly accepted by both parties takes precedence.",
            "Prices, delivery arrangements, lead times and stock are confirmed individually. Any VAT or other charge will be treated as stated in the applicable quotation or invoice and under UAE law. Do not rely on website estimates as a final price or delivery commitment.",
          ],
        },
        {
          title: "3. Orders, delivery and consumer rights",
          paragraphs: [
            "Order acceptance, payment, delivery, inspection, cancellation, returns, replacement and warranty arrangements are those stated in the applicable sale documents and mandatory UAE law. Contact AIN before relying on a return or cancellation entitlement; no general return period is promised on this website.",
            "Nothing in these terms excludes or restricts a right or remedy that cannot lawfully be excluded, including any mandatory protection available to a consumer under applicable UAE consumer-protection legislation. Where a customer purchases for business or professional purposes, the specific business sale terms apply to the extent permitted by law.",
          ],
        },
        {
          title: "4. Your use of the website",
          paragraphs: [
            "You may use the site for lawful enquiries and business purposes. You must not misuse the site, disrupt its operation, attempt unauthorised access, introduce malicious code, misrepresent your identity or submit information that you are not authorised to share.",
            "You are responsible for ensuring that contact details and RFQ information you provide are accurate and that you have permission to provide any personal information or documents relating to another person or organisation.",
          ],
        },
        {
          title: "5. Content and intellectual property",
          paragraphs: [
            "Unless stated otherwise, the website's text, design, graphics and other content belong to AIN or are used with permission. You may view and print pages for personal or internal business reference. You must not reproduce, adapt, distribute or commercially exploit website content without prior written permission, except where the law permits.",
            "Product names, logos and trademarks may belong to their respective owners. Their appearance on the site does not imply endorsement or an authorised distributorship unless AIN expressly confirms this in writing.",
          ],
        },
        {
          title: "6. Third-party services and links",
          paragraphs: [
            "The website may link to or display services operated by others, including Google Maps, WhatsApp and your email provider. Those services are governed by their own terms and privacy notices. AIN does not control their availability or content. Opening a map or choosing to contact AIN through another service may share information with that service.",
          ],
        },
        {
          title: "7. Availability and liability",
          paragraphs: [
            "We aim to keep the website accurate and available but do not guarantee uninterrupted access or that every page is free of errors. Website content is provided for general information and is not technical, safety, engineering or professional advice. Confirm product suitability and applicable instructions with AIN and the manufacturer before use.",
            "To the extent permitted by applicable law, AIN is not liable for indirect or consequential loss arising solely from use of, or inability to use, this informational website. This does not limit liability that cannot legally be limited, any rights under an accepted sale contract, or mandatory consumer rights.",
          ],
        },
        {
          title: "8. Privacy, changes and governing law",
          paragraphs: [
            "Our handling of personal information is described in the Privacy Policy. We may update these website terms by publishing a revised version here; the updated terms apply from publication. Sale terms already agreed with a customer are not changed by an update to this page.",
            "These terms are governed by the laws of the United Arab Emirates as applicable in the Emirate of Sharjah, without affecting mandatory laws or consumer protections that apply to a particular customer. The competent UAE courts have jurisdiction, subject to any mandatory rules.",
          ],
        },
        {
          title: "9. Contact",
          paragraphs: [
            "AIN General Trading LLC\nSharjah Media City, Sharjah, United Arab Emirates\nEmail: sales@aingeneraltrading.com\nPhone: +971 56 489 1899",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      intro:
        "This policy explains how AIN General Trading LLC handles personal information when you visit this website or contact us about a quotation or our products.",
      lastUpdated: "Last updated: 21 October 2026",
      sections: [
        {
          title: "1. Who is responsible",
          paragraphs: [
            'AIN General Trading LLC ("AIN", "we", "us" or "our"), Sharjah Media City, Sharjah, UAE, is responsible for personal information handled through this website and our trade enquiries, to the extent applicable law treats AIN as the controller. Contact us at sales@aingeneraltrading.com or +971 56 489 1899 with privacy questions.',
            "We handle personal information in accordance with applicable UAE data-protection requirements, which may include Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data and any applicable free-zone data-protection rules. Which rules apply depends on the establishment and processing involved.",
          ],
        },
        {
          title: "2. Information we handle",
          paragraphs: [
            "If you prepare a quotation request, you may enter your name, company, telephone number, email address, project or delivery location, product categories, requirements and an optional BOQ or other file. We also handle information you choose to include when you contact us by email, telephone or WhatsApp.",
            "This website does not upload the quote form or selected file to an AIN server. The form prepares an enquiry in your browser; you choose whether to open WhatsApp or your email application to send the prepared text. The selected file itself is not attached by the website. Those external services will handle information according to their own settings and privacy notices.",
            'When you visit, your browser and service providers may process basic technical information needed to deliver and secure the site, such as IP address, device/browser details and request logs. The site stores your language choice (English or Arabic) in your browser\'s local storage under "ain-lang". We do not use advertising cookies or analytics trackers on this website.',
          ],
        },
        {
          title: "3. Why we use information",
          paragraphs: [
            "We use information to respond to enquiries, prepare and follow up quotations, communicate about potential or completed supply, arrange customer service, protect the website and our business, and meet legal obligations. We rely on the applicable lawful basis for the particular purpose, such as steps requested before a contract, performance of a contract, a legal obligation, consent or another basis recognised by applicable law.",
            "We do not use enquiry details for unrelated direct marketing without the consent or other permission required by applicable UAE law. You can ask us to stop optional marketing at any time.",
          ],
        },
        {
          title: "4. Who may receive information",
          paragraphs: [
            "We may share only relevant information with AIN staff and service providers who support our communications, website hosting, security or business operations, and with authorities where required by law. If you choose WhatsApp, email or Google Maps, the relevant provider may process information under its own terms. The site embeds Google Maps on the contact page.",
            "Some providers may process information outside the UAE. Where applicable, we use transfer safeguards required by the relevant data-protection law. We do not sell personal information.",
          ],
        },
        {
          title: "5. How long we keep information",
          paragraphs: [
            "We keep enquiry and business correspondence for as long as reasonably necessary to respond, manage a commercial relationship, resolve disputes and meet applicable record-keeping obligations. Retention depends on the nature of the enquiry and legal requirements. The language setting remains in your browser until you clear local storage.",
          ],
        },
        {
          title: "6. Your choices and rights",
          paragraphs: [
            "Depending on the law that applies, you may have rights to request access to, correction or deletion of personal information, object to or restrict certain processing, withdraw consent where processing relies on consent, or raise a complaint with the competent regulator. These rights are subject to legal conditions and exceptions.",
            'To make a request, email sales@aingeneraltrading.com with "Privacy request" in the subject. We may need to verify your identity and will respond as required by applicable law. You can also clear the "ain-lang" item in your browser\'s local storage to remove the saved language preference.',
          ],
        },
        {
          title: "7. Security and links to other services",
          paragraphs: [
            "We use reasonable measures appropriate to the information and how it is handled. No website or electronic communication can be guaranteed completely secure. Please avoid sending passwords, payment-card details, sensitive personal data or documents you are not authorised to disclose in an RFQ.",
            "Links and embedded tools, including Google Maps and WhatsApp, are not operated by AIN. Their privacy practices are set by their providers; please review those notices before using the services.",
          ],
        },
        {
          title: "8. Updates and contact",
          paragraphs: [
            "We may revise this policy when our practices or legal requirements change. The current version and its update date will be published on this page.",
            "AIN General Trading LLC\nSharjah Media City, Sharjah, United Arab Emirates\nEmail: sales@aingeneraltrading.com\nPhone: +971 56 489 1899",
          ],
        },
      ],
    },
  },
  ar: {
    terms: {
      title: "الشروط والأحكام",
      intro:
        "تنطبق هذه الشروط على دخولك إلى موقع AIN General Trading LLC واستخدامه. يرجى قراءتها قبل استخدام الموقع أو طلب عرض سعر.",
      lastUpdated: "آخر تحديث: 21 أكتوبر 2026",
      sections: [
        {
          title: "١. عن AIN وهذه الشروط",
          paragraphs: [
            "يُدار هذا الموقع من قبل AIN General Trading LLC («AIN» أو «نحن»)، وهي منشأة في دولة الإمارات وبيانات التواصل الخاصة بها موضحة أدناه. يقدم الموقع معلومات عن مستلزمات التجارة ويتيح للزوار إعداد طلب عرض سعر. ولا يمثل متجراً إلكترونياً لإتمام الشراء أو قائمة عروض بيع ملزمة.",
            "باستخدام الموقع، فإنك توافق على هذه الشروط. إذا لم توافق عليها، يرجى عدم استخدام الموقع. كما يخضع أي بيع لعرض السعر المكتوب وتأكيد الطلب وشروط البيع المحددة التي توافق عليها AIN والعميل.",
          ],
        },
        {
          title: "٢. معلومات الموقع وطلبات عروض الأسعار",
          paragraphs: [
            "تُعرض أوصاف المنتجات وصورها ومواصفاتها وعلاماتها التجارية وأسعارها ومدى توفرها لأغراض إرشادية فقط وقد تتغير. ولا تشكل عرضاً للبيع. ويُعد الطلب المرسل عبر الموقع استفساراً فقط، ولا ينشئ طلب شراء أو عقداً.",
            "لا يُبرم عقد البيع إلا عندما تصدر AIN عرض سعر أو تأكيد طلب ويقبله العميل، مع استكمال أي دفعة مقدمة أو أمر شراء أو خطوة قبول أخرى منصوص عليها فيه. ويحدد عرض السعر تفاصيل المنتج والسعر ومدة الصلاحية والدفع والتسليم وشروط البيع الأخرى. وعند التعارض، تسود الاتفاقية المكتوبة الأحدث التي وقعها الطرفان أو قبلاها صراحةً.",
            "يتم تأكيد الأسعار وترتيبات التسليم ومواعيده والمخزون لكل طلب على حدة. وتُطبق ضريبة القيمة المضافة أو أي رسوم أخرى وفق ما يرد في عرض السعر أو الفاتورة والقانون الإماراتي. لا تعتمد على تقديرات الموقع كسعر نهائي أو التزام بالتسليم.",
          ],
        },
        {
          title: "٣. الطلبات والتسليم وحقوق المستهلك",
          paragraphs: [
            "تخضع موافقة الطلب والدفع والتسليم والفحص والإلغاء والإرجاع والاستبدال والضمان لما يرد في مستندات البيع والقانون الإماراتي الإلزامي. يرجى التواصل مع AIN قبل الاعتماد على حق في الإرجاع أو الإلغاء؛ لا يعد الموقع بفترة إرجاع عامة.",
            "لا يستبعد أي حكم في هذه الشروط حقاً أو تعويضاً لا يجوز استبعاده قانوناً، بما في ذلك أي حماية إلزامية للمستهلك بموجب تشريعات حماية المستهلك الإماراتية السارية. وعندما يكون الشراء لأغراض تجارية أو مهنية، تطبق شروط البيع التجارية المحددة بالقدر الذي يسمح به القانون.",
          ],
        },
        {
          title: "٤. استخدامك للموقع",
          paragraphs: [
            "يجوز لك استخدام الموقع للاستفسارات المشروعة والأغراض التجارية. ويُحظر إساءة استخدام الموقع أو تعطيل تشغيله أو محاولة الدخول غير المصرح به أو إدخال شيفرات ضارة أو انتحال الهوية أو إرسال معلومات لا تملك صلاحية مشاركتها.",
            "أنت مسؤول عن دقة بيانات التواصل ومعلومات طلب السعر التي تقدمها، وعن امتلاكك الإذن بتقديم أي بيانات شخصية أو مستندات تخص شخصاً أو جهة أخرى.",
          ],
        },
        {
          title: "٥. المحتوى والملكية الفكرية",
          paragraphs: [
            "ما لم يُذكر خلاف ذلك، تعود حقوق النصوص والتصميم والرسومات وسائر محتوى الموقع إلى AIN أو تُستخدم بإذن. ويجوز لك الاطلاع على الصفحات وطباعتها للمرجعية الشخصية أو الداخلية للأعمال. ولا يجوز نسخ محتوى الموقع أو تعديله أو توزيعه أو استغلاله تجارياً دون إذن كتابي مسبق، إلا في الحدود التي يسمح بها القانون.",
            "قد تعود أسماء المنتجات والشعارات والعلامات التجارية إلى مالكيها. ولا يعني ظهورها على الموقع وجود تأييد أو توزيع معتمد ما لم تؤكد AIN ذلك صراحةً كتابةً.",
          ],
        },
        {
          title: "٦. خدمات وروابط الجهات الأخرى",
          paragraphs: [
            "قد يتضمن الموقع روابط أو خدمات تعرضها جهات أخرى، ومنها خرائط Google وWhatsApp ومزود البريد الإلكتروني. وتخضع تلك الخدمات لشروطها وإشعارات الخصوصية الخاصة بها، ولا تتحكم AIN في توفرها أو محتواها. وقد تؤدي مشاهدة الخريطة أو التواصل معنا عبر خدمة أخرى إلى مشاركة معلومات مع مزود الخدمة.",
          ],
        },
        {
          title: "٧. توفر الموقع والمسؤولية",
          paragraphs: [
            "نسعى إلى إبقاء الموقع دقيقاً ومتاحاً، لكننا لا نضمن استمرارية الوصول أو خلو كل صفحة من الأخطاء. ويُقدم محتوى الموقع للمعلومات العامة فقط ولا يُعدّ مشورة فنية أو متعلقة بالسلامة أو الهندسة أو مهنة متخصصة. تحقق من ملاءمة المنتج وتعليمات استخدامه مع AIN والمُصنّع قبل الاستخدام.",
            "بالقدر الذي يسمح به القانون الساري، لا تتحمل AIN مسؤولية الخسائر غير المباشرة أو التبعية الناشئة حصراً عن استخدام هذا الموقع المعلوماتي أو تعذر استخدامه. ولا يحد ذلك من مسؤولية لا يجوز تقييدها قانوناً أو من الحقوق بموجب عقد بيع مقبول أو حقوق المستهلك الإلزامية.",
          ],
        },
        {
          title: "٨. الخصوصية والتعديلات والقانون الواجب التطبيق",
          paragraphs: [
            "توضح سياسة الخصوصية كيفية تعاملنا مع المعلومات الشخصية. ويجوز لنا تحديث شروط الموقع بنشر نسخة معدلة هنا، وتسري النسخة المعدلة من تاريخ نشرها. ولا يغير تحديث هذه الصفحة شروط البيع التي سبق الاتفاق عليها مع العميل.",
            "تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة السارية في إمارة الشارقة، دون المساس بالقوانين الإلزامية أو حماية المستهلك المطبقة على عميل معين. وتختص محاكم دولة الإمارات المختصة بالنظر في النزاعات، مع مراعاة القواعد الإلزامية.",
          ],
        },
        {
          title: "٩. التواصل",
          paragraphs: [
            "AIN General Trading LLC\nمدينة الشارقة للإعلام، الشارقة، الإمارات العربية المتحدة\nالبريد الإلكتروني: sales@aingeneraltrading.com\nالهاتف: +971 56 489 1899",
          ],
        },
      ],
    },
    privacy: {
      title: "سياسة الخصوصية",
      intro:
        "توضح هذه السياسة كيفية تعامل AIN General Trading LLC مع المعلومات الشخصية عند زيارة هذا الموقع أو التواصل معنا بشأن عرض سعر أو منتجاتنا.",
      lastUpdated: "آخر تحديث: 21 أكتوبر 2026",
      sections: [
        {
          title: "١. الجهة المسؤولة",
          paragraphs: [
            "تتحمل AIN General Trading LLC («AIN» أو «نحن»)، مدينة الشارقة للإعلام، الشارقة، الإمارات العربية المتحدة، مسؤولية المعلومات الشخصية التي يتم التعامل معها عبر هذا الموقع واستفسارات التجارة، بالقدر الذي يعدّها فيه القانون المطبق جهة تحكم. للاستفسارات المتعلقة بالخصوصية، تواصل معنا عبر sales@aingeneraltrading.com أو +971 56 489 1899.",
            "نتعامل مع المعلومات الشخصية وفق متطلبات حماية البيانات السارية في الإمارات، والتي قد تشمل المرسوم بقانون اتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية وأي قواعد لحماية البيانات في المناطق الحرة تنطبق. ويتوقف تحديد القواعد السارية على المنشأة والمعالجة المعنية.",
          ],
        },
        {
          title: "٢. المعلومات التي نتعامل معها",
          paragraphs: [
            "إذا أعددت طلب عرض سعر، فقد تدخل اسمك واسم الشركة ورقم الهاتف والبريد الإلكتروني وموقع المشروع أو التسليم وفئات المنتجات والمتطلبات، ويمكنك اختيار إرفاق جدول كميات أو ملف آخر. كما نتعامل مع المعلومات التي تختار تضمينها عند التواصل معنا بالبريد الإلكتروني أو الهاتف أو WhatsApp.",
            "لا يرفع هذا الموقع نموذج طلب السعر أو الملف المحدد إلى خادم تابع لـ AIN. بل يُعدّ النموذج الاستفسار في متصفحك، وتختار أنت ما إذا كنت ستفتح WhatsApp أو تطبيق البريد لإرسال النص المُعد. ولا يرفق الموقع الملف المحدد نفسه. وتتعامل تلك الخدمات الخارجية مع المعلومات وفق إعداداتها وإشعارات الخصوصية الخاصة بها.",
            "قد يعالج متصفحك ومزودو الخدمات عند زيارة الموقع معلومات تقنية أساسية لازمة لتشغيل الموقع وحمايته، مثل عنوان IP ومعلومات الجهاز والمتصفح وسجلات الطلبات. ويحفظ الموقع اختيارك للغة (العربية أو الإنجليزية) في التخزين المحلي للمتصفح تحت الاسم «ain-lang». ولا نستخدم ملفات تعريف ارتباط إعلانية أو أدوات تتبع تحليلية على هذا الموقع.",
          ],
        },
        {
          title: "٣. أغراض استخدام المعلومات",
          paragraphs: [
            "نستخدم المعلومات للرد على الاستفسارات وإعداد عروض الأسعار ومتابعتها والتواصل بشأن التوريد المحتمل أو المكتمل وتقديم خدمة العملاء وحماية الموقع وأعمالنا والوفاء بالالتزامات القانونية. ونعتمد على الأساس القانوني المناسب لكل غرض، مثل اتخاذ خطوات بناءً على طلبك قبل إبرام عقد أو تنفيذ عقد أو التزام قانوني أو موافقة أو أساس آخر يقره القانون المطبق.",
            "لا نستخدم بيانات الاستفسارات لأغراض تسويق مباشر غير ذي صلة دون الموافقة أو الإذن الذي يتطلبه القانون الإماراتي الساري. ويمكنك طلب إيقاف الرسائل التسويقية الاختيارية في أي وقت.",
          ],
        },
        {
          title: "٤. الجهات التي قد تتلقى المعلومات",
          paragraphs: [
            "قد نشارك المعلومات ذات الصلة مع موظفي AIN ومزودي الخدمات الذين يدعمون الاتصالات أو استضافة الموقع أو أمنه أو عملياتنا، ومع السلطات عندما يفرض القانون ذلك. وإذا اخترت استخدام WhatsApp أو البريد الإلكتروني أو خرائط Google، فقد يعالج المزود المعني المعلومات وفق شروطه الخاصة. ويعرض الموقع خرائط Google في صفحة التواصل.",
            "قد يعالج بعض المزودين المعلومات خارج الإمارات. وحيثما ينطبق ذلك، نستخدم ضمانات النقل المطلوبة بموجب قانون حماية البيانات ذي الصلة. ولا نبيع المعلومات الشخصية.",
          ],
        },
        {
          title: "٥. مدة الاحتفاظ بالمعلومات",
          paragraphs: [
            "نحتفظ بالاستفسارات ومراسلات الأعمال للمدة اللازمة بصورة معقولة للرد عليها وإدارة العلاقة التجارية وحل النزاعات والوفاء بالتزامات حفظ السجلات المطبقة. وتعتمد مدة الاحتفاظ على طبيعة الاستفسار والمتطلبات القانونية. وتظل اللغة المحفوظة في المتصفح موجودة حتى تمسح التخزين المحلي.",
          ],
        },
        {
          title: "٦. خياراتك وحقوقك",
          paragraphs: [
            "وفقاً للقانون المطبق، قد يحق لك طلب الوصول إلى المعلومات الشخصية أو تصحيحها أو حذفها، أو الاعتراض على معالجة معينة أو تقييدها، أو سحب الموافقة عندما تستند المعالجة إليها، أو تقديم شكوى إلى الجهة الرقابية المختصة. وتخضع هذه الحقوق للشروط والاستثناءات القانونية.",
            "لتقديم طلب، أرسل رسالة إلى sales@aingeneraltrading.com واجعل عنوانها «طلب خصوصية». وقد نحتاج إلى التحقق من هويتك وسنرد وفق القانون المطبق. ويمكنك أيضاً حذف عنصر «ain-lang» من التخزين المحلي في متصفحك لإزالة تفضيل اللغة المحفوظ.",
          ],
        },
        {
          title: "٧. الأمان والروابط إلى الخدمات الأخرى",
          paragraphs: [
            "نتخذ تدابير معقولة تتناسب مع المعلومات وطريقة التعامل معها. ولا يمكن ضمان الأمان الكامل لأي موقع أو مراسلة إلكترونية. يرجى عدم إرسال كلمات المرور أو بيانات بطاقات الدفع أو البيانات الشخصية الحساسة أو المستندات التي لا تملك صلاحية الإفصاح عنها ضمن طلب عرض السعر.",
            "لا تدير AIN الروابط والأدوات المضمنة، ومنها خرائط Google وWhatsApp. ويحدد مزودوها ممارسات الخصوصية الخاصة بها؛ يرجى مراجعة إشعاراتهم قبل استخدام تلك الخدمات.",
          ],
        },
        {
          title: "٨. التعديلات والتواصل",
          paragraphs: [
            "قد نراجع هذه السياسة عند تغير ممارساتنا أو المتطلبات القانونية. وستُنشر النسخة الحالية وتاريخ تحديثها على هذه الصفحة.",
            "AIN General Trading LLC\nمدينة الشارقة للإعلام، الشارقة، الإمارات العربية المتحدة\nالبريد الإلكتروني: sales@aingeneraltrading.com\nالهاتف: +971 56 489 1899",
          ],
        },
      ],
    },
  },
} satisfies Record<"en" | "ar", Record<"terms" | "privacy", LegalDocument>>;
