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
          title: '{{what}} in english'
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
          title: '{{what}} in বাংলা'
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
    
  document.getElementById('featureMenuItem').innerHTML = i18next.t('common:menu.feature');
  document.getElementById('galleryMenuItem').innerHTML = i18next.t('common:menu.gallery');
  document.getElementById('locationMenuItem').innerHTML = i18next.t('common:menu.location');
  document.getElementById('admissionInfoMenuItem').innerHTML = i18next.t('common:menu.admission');
  
  
  console.log(`detected user language: "${i18next.language}"  --> loaded languages: "${i18next.languages.join(', ')}"`);
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});