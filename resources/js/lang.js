console.log(i18next);
i18next
  .use(i18nextXHRBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['special', 'common'],
    defaultNS: 'special',
    resources: {
      en: {
        special: {
          title: '{{what}} in english',
          header:{
              dialogue_header: 'Your child, it\'s our responsibility <br>to develop his/her intellect.',
              school_name: 'Mother Teresa Catholic School',
              button_1: 'I\'m interested',
              button_2: 'Show me more'
          },
          sectionFeature:{
              feature_h2_1: 'Children must be taught how to think, not what to think<cite> &mdash; Margaret Mead</cite>',
              feature_p_1: 'Hello, we beleive in quality education for your child to develop his/her thought process. We know you\'re always thoughtful                 about your child education . So let us take care of that, we\'re really good at it, we promise!',
              feature_h3_1: 'Play ground and auditorium',
              feature_p_2: 'We have nice playground and auditorium in side. We beleive your child like to play than reading all time. We encourage them                 to play and perform.',
              feature_h3_2: 'Text book classes are 5 days/week',
              feature_p_3: 'Our text book education is 5 days per week. We don\'t beleive in pressure but like to give your child a space so that student               can enjoy the vacation with co-education.',
              feature_h3_3: 'Focus on moral education',
              feature_p_4: 'We provide value based education is needed for developing moral qualities such as humility, truthfulness, honesty, courtesy,               tolerance, sacrifice etc among the youth.',
              feature_h3_4: 'Co education on every Saturday',
              feature_p_5: 'We offer co-education for student which includes drawing, dancing and singing as well.'
              
          }    
        },
        common: {
          button: {
             save: 'save {{count}} change',
             save_plural: 'save {{count}} changes'
          },
          menu: {
              feature: 'Our Feature',
              gallery: 'Gallery',
              location:'Our location',
              admission:'Admission Information'
          }
        }
      },
      bn: {
        special: {
          title: '{{what}} in বাংলা',
          header:{
              dialogue_header: 'সন্তান আপনার, তার মেধা\'র সুষ্ঠ <br>বিকাশের দায়িত্ব আমাদের।',
              school_name:'মাদার তেরেজা ক্যাথলিক স্কুল',
              button_1: 'আমি আগ্রহী',
              button_2: 'বিস্তারিত দেখুন'
          },
          sectionFeature:{
              feature_h2_1: 'বাচ্চাদের অবশ্যই কীভাবে ভাবতে হবে তা শেখানো উচিত, কী ভাবতে হবে তা নয়<cite> &mdash; Margaret Mead</cite>',
              feature_p_1: 'আমরা আপনার সন্তানের  মেধা\'র সুষম  বিকাশের জন্য মানসম্মত শিক্ষার প্রতি আগ্রহী। আমরা জানি আপনি সর্বদা আপনার শিশু শিক্ষার বিষয়ে চিন্তাশীল। সুতরাং                     এতদ্ববিষয়ে আমরা শিক্ষার্থীদের বিশেষ যত্ন নিয়ে থাকি  এবং আমরা  প্রতিশ্রুতিবদ্ধ!',
              feature_h3_1: 'খেলার মাঠ এবং মিলনায়তন',
              feature_p_2: 'আমাদের স্কুল চত্বরে সুন্দর খেলার মাঠ এবং মিলনায়তন রয়েছে। আমরা বিশ্বাস করি আপনার শিশুটি  পড়ার চেয়ে খেলতে বেশী পছন্দ করে। আমরা তাদের  শিক্ষার পাশাপাশি                খেলাধুলা এবং ছবি আঁকা, নাচ ও গান করতে উত্সাহিত করি ।',
              feature_h3_2: 'পাঠ্য পুস্তক ক্লাস  সপ্তাহে  ৫  দিন ',
              feature_p_3: 'আমাদের পাঠ্য বইয়ের শিক্ষা প্রতি সপ্তাহে ৫ দিন। আমরা অতিরিক্ত পড়ালেখা\'র চাপে বিশ্বাস করি না, যাতে করে শিক্ষার্থীগণ সহশিক্ষা কার্য্যক্রমে অংশ নিয়ে ছুটি                   উপভোগ  করতে পারে।',
              feature_h3_3: 'নৈতিক শিক্ষা',
              feature_p_4: 'শিক্ষার্থীদের মধ্যে নম্রতা, সত্যবাদিতা, সততা, সৌজন্যতা, সহনশীলতা, ত্যাগ ইত্যাদির মতো নৈতিক গুণাবলির বিকাশের জন্য আমরা সময়োপযোগী নৈতিক শিক্ষা প্রদানে                 সর্বদা সচেষ্ট।',
              feature_h3_4: 'প্রতি শনিবার সহশিক্ষা কার্য্যক্রম',
              feature_p_5: 'আমরা শিক্ষার্থীর জন্য সহশিক্ষা (অঙ্কন, নাচ এবং গান) কার্য্যক্রম প্রদান করি যা গ্রন্থগত বিদ্যার পাশাপাশি একজন শিক্ষার্থী\'র শিল্পী সত্তাকে জাগ্রত করতে                   সহায়ক ভূমিকা পালন করে।'
              
          }  
        },
        common: {
          button: {
             save: 'সেভ {{count}} পরিবর্তন',
             save_plural: 'সেভ {{count}} পরিবর্তনগুলো'
          },
          menu: {
              feature: 'আমাদের বৈশিষ্ট্য',
              gallery: 'ছবি ঘর',
              location:'আমাদের ঠিকানা',
              admission:'ভর্তি তথ্য'
          }
        }  
      }
    }
  }, function(err, t) {
    // init set content
    updateContent();
  });



// just set some content and react to language changes
// could be optimized using vue-i18next, jquery-i18next, react-i18next, ...
function updateContent() {
  /*
  document.getElementById('title').innerHTML = i18next.t('title', { what: 'i18next' });
  document.getElementById('saveBtn').innerHTML = i18next.t('common:button.save', { count: Math.floor(Math.random()*2+1)  });
  
  document.getElementById('info').innerHTML = `detected user language: "${i18next.language}"  --> loaded languages: "${i18next.languages.join(', ')}"`;
  */
    /* ----  Menu Top ----*/
  document.getElementById('featureMenuItem').innerHTML = i18next.t('common:menu.feature');
  document.getElementById('galleryMenuItem').innerHTML = i18next.t('common:menu.gallery');
  document.getElementById('locationMenuItem').innerHTML = i18next.t('common:menu.location');
  document.getElementById('admissionInfoMenuItem').innerHTML = i18next.t('common:menu.admission');
  
    /* ----  hero-text-box ----*/
  document.getElementById('dialogue-header').innerHTML = i18next.t('special:header.dialogue_header'); 
  document.getElementById('school-name').innerHTML = i18next.t('special:header.school_name');       
  document.getElementById('header-button-1').innerHTML = i18next.t('special:header.button_1');     
  document.getElementById('header-button-2').innerHTML = i18next.t('special:header.button_2');  
    
      /* ----  section-feature ----*/    
    document.getElementById('feature_h2_1').innerHTML = i18next.t('special:sectionFeature.feature_h2_1');
    document.getElementById('feature_p_1').innerHTML = i18next.t('special:sectionFeature.feature_p_1');
    document.getElementById('feature_h3_1').innerHTML = i18next.t('special:sectionFeature.feature_h3_1');
    document.getElementById('feature_p_2').innerHTML = i18next.t('special:sectionFeature.feature_p_2');
    document.getElementById('feature_h3_2').innerHTML = i18next.t('special:sectionFeature.feature_h3_2');
    document.getElementById('feature_p_3').innerHTML = i18next.t('special:sectionFeature.feature_p_3');
     document.getElementById('feature_h3_3').innerHTML = i18next.t('special:sectionFeature.feature_h3_3');
    document.getElementById('feature_p_4').innerHTML = i18next.t('special:sectionFeature.feature_p_4');
     document.getElementById('feature_h3_4').innerHTML = i18next.t('special:sectionFeature.feature_h3_4');
    document.getElementById('feature_p_5').innerHTML = i18next.t('special:sectionFeature.feature_p_5');
  
  console.log(`detected user language: "${i18next.language}"  --> loaded languages: "${i18next.languages.join(', ')}"`);
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});