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
              feature_h2_1: 'Children must be taught how to think, not what to think<cite> &mdash; <a href="https://en.wikipedia.org/wiki/Margaret_Mead"                target="_blank">Margaret Mead</a></cite>',
              feature_p_1: 'Hello, we beleive in quality education for your child to develop his/her thought process. We know you\'re always thoughtful                 about your child education . So let us take care of that, we\'re really good at it, we promise!',
              feature_h3_1: 'Play ground and auditorium',
              feature_p_2: 'We have nice playground and auditorium in side. We beleive your child like to play than reading all time. We encourage them                 to play and perform.',
              feature_h3_2: 'Text book classes are 5 days/week',
              feature_p_3: 'Our text book education is 5 days per week. We don\'t beleive in pressure but like to give your child a space so that student               can enjoy the vacation with co-education.',
              feature_h3_3: 'Focus on moral education',
              feature_p_4: 'We provide value based education is needed for developing moral qualities such as humility, truthfulness, honesty, courtesy,               tolerance, sacrifice etc among the youth.',
              feature_h3_4: 'Co education on every Saturday',
              feature_p_5: 'We offer co-education for student which includes drawing, dancing and singing as well.'
              
          },
          gallery: {
              gallery_h2_1 : 'Gallery'
          },
          message: {
              message_h2_1: 'Principle and vice principle\'s message',
              message_figcaption_1: '<b>Principle Sister Moly D Costa</b>',
              message_p_1 : 'Today, the role of a school is not only to pursue academic excellence but also to motivate and empower its students to be                lifelong learners, critical thinkers, and productive members of an ever-changing global society. Almost a decade we are trying to provide such a quality educational environment  to our prentice. The school that is being run under the aegis of well established Management has earned its own niche not only in Pallabi but across the Mirpur. Here we provide an                   atmosphere to our students for multifaceted development, where children are encouraged to channelize their potential in                  the pursuit of excellence.',
              message_figcaption_2: '<b>Vice Principle Sister Tuly Drong</b>',
              message_p_2: 'We provide an appealing and stimulating curriculum that is flexible and tailored to the needs of each and every student as               we strive for high educational outcomes and personal bests for all of our students. Our passionate teachers ensure our                   students grow in confidence and capabilities and develop the skills for the rapidly changing, 21st century living. Engaging               learning programs that cater for individual differences and learning styles are devised and delivered by our skilled,                     talented and dedicated teachers. We use innovative techniques, rich resources, proven instructional strategies and engaging               programs to promote student learning. '
              
          },
          location: {
              location_h2_1: 'We\'re currently at Pallabi, Mirpur, Dhaka.',
              location_h3_1: '1/C & 1/D, Pallabi, Section-12, Mirpur, Dhaka-1216'
          },
            testimonial: {
                testimonial_h2_1: 'Guardian\'s opinion about us.',
                testimonial_bq_1: 'Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor',
                testimonial_span_1: 'Abdul Kuddus',
                
                testimonial_bq_2: 'Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor',
                testimonial_span_2: 'Jerin Gomez',
                
                testimonial_bq_3: 'Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor imit Lorem ipsum dolor',
                testimonial_span_3: 'Subal Das'
                    
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
              feature_h2_1: 'বাচ্চাদের অবশ্যই কীভাবে ভাবতে হবে তা শেখানো উচিত, কী ভাবতে হবে তা নয়<cite> &mdash; <a          href="https://en.wikipedia.org/wiki/Margaret_Mead" target="_blank"> মার্গারেট মিড </a></cite>',
              feature_p_1: 'আমরা আপনার সন্তানের  মেধা\'র সুষম  বিকাশের জন্য মানসম্মত শিক্ষার প্রতি আগ্রহী। আমরা জানি আপনি সর্বদা আপনার শিশু\'র সু-শিক্ষার বিষয়ে চিন্তাশীল।                      এতদ্ববিষয়ে আমরা শিক্ষার্থীদের বিশেষ যত্ন নিয়ে থাকি  এবং আমরা  প্রতিশ্রুতিবদ্ধ!',
              feature_h3_1: 'খেলার মাঠ এবং মিলনায়তন',
              feature_p_2: 'আমাদের স্কুল চত্বরে সুন্দর খেলার মাঠ এবং মিলনায়তন রয়েছে। আমরা বিশ্বাস করি আপনার শিশুটি  পড়ার চেয়ে খেলতে বেশী পছন্দ করে। আমরা তাদের  শিক্ষার পাশাপাশি                খেলাধুলা এবং ছবি আঁকা, নাচ ও গান করতে উত্সাহিত করি ।',
              feature_h3_2: 'পাঠ্য পুস্তক শিক্ষা সপ্তাহে  ৫  দিন ',
              feature_p_3: 'আমাদের পাঠ্য বইয়ের শিক্ষা কার্য্যক্রম প্রতি সপ্তাহে ৫ দিন। আমরা পুঁথিগত পড়ালেখা\'র অতিরিক্ত চাপ প্রয়োগে  বিশ্বাসী নই, আমরা চাই একজন শিক্ষার্থী যেন                   শ্রেনীকক্ষেই সহজ পাঠ-পরিকল্পনা বুঝতে আগ্রহী হয় যাতে করে তারা সহশিক্ষা কার্য্যক্রমে অংশ নিয়ে ছুটি  উপভোগ  করতে পারে।',
              feature_h3_3: 'নৈতিক শিক্ষা',
              feature_p_4: 'শিক্ষার্থীদের মধ্যে নম্রতা, সত্যবাদিতা, সততা, সৌজন্যতা, সহনশীলতা, ত্যাগ ইত্যাদির মতো নৈতিক গুণাবলির বিকাশের জন্য আমরা সময়োপযোগী নৈতিক শিক্ষা প্রদানে                 সর্বদা সচেষ্ট।',
              feature_h3_4: 'প্রতি শনিবার সহশিক্ষা কার্য্যক্রম',
              feature_p_5: 'আমরা শিক্ষার্থীর জন্য সহশিক্ষা (অঙ্কন, নাচ এবং গান) কার্য্যক্রম প্রদান করি যা গ্রন্থগত বিদ্যার পাশাপাশি একজন শিক্ষার্থী\'র শিল্পী সত্তাকে জাগ্রত করতে                   সহায়ক ভূমিকা পালন করে।'
              
          },
          gallery: {
              gallery_h2_1 : 'ছবি ঘর'
          },
             message: {
              message_h2_1: 'অধ্যক্ষ ও উপাধ্যক্ষের বার্তা',
              message_figcaption_1: '<b>প্রিন্সিপাল সিস্টার মলি ডি কস্তা</b>',
              message_p_1 : 'আজ, একটি বিদ্যালয়ের ভূমিকা কেবলমাত্র একাডেমিক শ্রেষ্টত্ব  অর্জনের জন্য নয়।  শিক্ষার্থীদের আজীবন শিক্ষানবিস, সমালোচক, চিন্তাবিদ এবং একটি পরিবর্তিত বৈশ্বিক সমাজের উত্পাদনশীল সদস্য হতে অনুপ্রেরণা ও ক্ষমতায়িত করাও মূখ্য ব্রত। ২০০৯ খৃষ্টাব্দ হতে প্রায় এক দশক সময় ধরে  আমরা শিক্ষা\'র পঠ পরিবর্তনের প্রতিশ্রুতি নিয়ে অগ্রসর হচ্ছি। সুপ্রতিষ্ঠিত ম্যানেজমেন্ট  এর নেতৃত্বে পরিচালিত এই বিদ্যালয়টি কেবল পল্লবী নয়, অত্র মিরপুর এলাকায় একটি স্বনামধন্য শিক্ষাবান্ধব পরিবেশ প্রদানে সক্ষম হবে । এখানে আমরা আমাদের শিক্ষার্থীদের বহুমুখী বিকাশের জন্য একটি পরিবেশ প্রদান করি, যেখানে বাচ্চাদের শ্রেষ্ঠত্বের সন্ধানে তাদের সম্ভাব্যতাগুলি চ্যানেলাইজ করতে উত্সাহিত করা হয়।',
              message_figcaption_2: '<b>ভাইস প্রিন্সিপাল  সিস্টার তুলি দ্রং</b>',
              message_p_2: 'আমরা আবেদনমূলক এবং উদ্দীপক পাঠ্যক্রমটি প্রদান করি যা প্রতিটি শিক্ষার্থীর প্রয়োজন অনুসারে নমনীয় এবং উপযুক্ত হয় এবং আমরা আমাদের সকল শিক্ষার্থীর জন্য  শিক্ষাগত উচ্চতর এবং ব্যক্তিগত  সর্বোত্তম  ফলাফলের জন্য প্রচেষ্টা করি। আমাদের উত্সাহী শিক্ষকরা আমাদের শিক্ষার্থীদের আত্মবিশ্বাস ও দক্ষতায় বৃদ্ধি পেতে এবং একবিংশ শতাব্দীর দ্রুত পরিবর্তনের সহিত সহজ অভিযোজনে\'র জন্য সার্বিক সহায়তা নিশ্চিত করে থাকে। আমরা শিক্ষার্থীদের শিক্ষার প্রচারের জন্য উদ্ভাবনী কৌশল, সমৃদ্ধ সংস্থান, প্রমাণিত শিক্ষামূলক কৌশল এবং আকর্ষক প্রোগ্রাম ব্যবহার করি। '
              
          },
          location: {
              location_h2_1: 'আমরা বর্তমানে ঢাকার মিরপুরের পল্লবীতে আছি।',
              location_h3_1: '১ / সি ও ১ / ডি, পল্লবী, সেকশন-১২, মিরপুর, ঢাকা -১২১৬'
              
          },
            testimonial: {
                testimonial_h2_1: 'আমাদের সম্পর্কে অভিভাবকগণের মতামত।',
                testimonial_bq_1: 'যে-বই জুড়ে সূর্য ওঠে পাতায় পাতায় গোলাপ ফোটে সে-বই তুমি পড়বে। যে-বই জ্বালে ভিন্ন  আলো তোমায় শেখায় বাসতে ভালো সে-বই তুমি পড়বে। যে-বই তোমায় দেখায় ভয় সেগুলো কোন বই-ই নয় সে-বই তুমি পড়বে না। যে-বই তোমায় অন্ধ করে যে-বই তোমায় বন্দী করে সে-বই তুমি ছুঁবেই না। - \'হুমায়ুন আজাদ\'',
                testimonial_span_1: 'আবদুল কুদ্দুস',
                
                testimonial_bq_2: 'যে-বই জুড়ে সূর্য ওঠে পাতায় পাতায় গোলাপ ফোটে সে-বই তুমি পড়বে। যে-বই জ্বালে ভিন্ন  আলো তোমায় শেখায় বাসতে ভালো সে-বই তুমি পড়বে। যে-বই তোমায় দেখায় ভয় সেগুলো কোন বই-ই নয় সে-বই তুমি পড়বে না। যে-বই তোমায় অন্ধ করে যে-বই তোমায় বন্দী করে সে-বই তুমি ছুঁবেই না। - \'হুমায়ুন আজাদ\'',
                testimonial_span_2: 'জেরিন গোমেজ',
                
                testimonial_bq_3: 'যে-বই জুড়ে সূর্য ওঠে পাতায় পাতায় গোলাপ ফোটে সে-বই তুমি পড়বে। যে-বই জ্বালে ভিন্ন  আলো তোমায় শেখায় বাসতে ভালো সে-বই তুমি পড়বে। যে-বই তোমায় দেখায় ভয় সেগুলো কোন বই-ই নয় সে-বই তুমি পড়বে না। যে-বই তোমায় অন্ধ করে যে-বই তোমায় বন্দী করে সে-বই তুমি ছুঁবেই না। - \'হুমায়ুন আজাদ\'',
                testimonial_span_3: 'সুবল দাশ'
                    
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
    
    /* ---- Gallery ----  */
    
    document.getElementById('gallery_h2_1').innerHTML = i18next.t('special:gallery.gallery_h2_1');
    
    /* ---- Message ----*/
    
     document.getElementById('message_h2_1').innerHTML = i18next.t('special:message.message_h2_1');
    document.getElementById('message_figcaption_1').innerHTML = i18next.t('special:message.message_figcaption_1');
    document.getElementById('message_p_1').innerHTML = i18next.t('special:message.message_p_1');
    document.getElementById('message_figcaption_2').innerHTML = i18next.t('special:message.message_figcaption_2');
    document.getElementById('message_p_2').innerHTML = i18next.t('special:message.message_p_2');
    
    /* ----  Location ----- */
    
    document.getElementById('location_h2_1').innerHTML = i18next.t('special:location.location_h2_1');
    document.getElementById('location_h3_1').innerHTML = i18next.t('special:location.location_h3_1');
    
    /* ----  Testimonial ----- */
    
    document.getElementById('testimonial_h2_1').innerHTML = i18next.t('special:testimonial.testimonial_h2_1');
    document.getElementById('testimonial_bq_1').innerHTML = i18next.t('special:testimonial.testimonial_bq_1');
    document.getElementById('testimonial_span_1').innerHTML = i18next.t('special:testimonial.testimonial_span_1');
    
    document.getElementById('testimonial_bq_2').innerHTML = i18next.t('special:testimonial.testimonial_bq_2');
    document.getElementById('testimonial_span_2').innerHTML = i18next.t('special:testimonial.testimonial_span_2');
    
    document.getElementById('testimonial_bq_3').innerHTML = i18next.t('special:testimonial.testimonial_bq_3');
    document.getElementById('testimonial_span_3').innerHTML = i18next.t('special:testimonial.testimonial_span_3');
  
  console.log(`detected user language: "${i18next.language}"  --> loaded languages: "${i18next.languages.join(', ')}"`);
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});