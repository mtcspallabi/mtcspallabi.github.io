var notices = [
  {id:1, date:'02-FEB-2020',text:'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'  },
    {id:2, date:'03-FEB-2020',text:'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'  },
    {id:3, date:'04-FEB-2020',text:'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'  },
    {id:4, date:'02-FEB-2020',text:'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'  }
    
];

const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC'
]


$(document).ready(function() {
    
    createContent();
    
     
    /*  Notice Board */
    
    $('#footer_a_3').magnificPopup({
        items: [
          {
            src: '#notice-popup', // CSS selector of an element on page that should be used as a popup
            type: 'inline'
          }
        ],callbacks: {
            beforeOpen: function() {
                $('body').addClass('mfp-active');
            },
            beforeClose: function() {
                $('body').removeClass('mfp-active');
            }
        },
         midClick: true
    });
    
    
    $('#addNewNotice_a_1').magnificPopup({
        items: [
          {
            src: '#addNotice-popup', // CSS selector of an element on page that should be used as a popup
            type: 'inline'
          }
        ],callbacks: {
            beforeOpen: function() {
                $('body').addClass('mfp-active');
            },
            beforeClose: function() {
                $('body').removeClass('mfp-active');
            }
        }
    });
    
    let editor;
    
    ClassicEditor.defaultConfig = {
      toolbar: {
        items: [
          
          'bold',
          'italic',
          '|',
          'bulletedList',
          'numberedList',
          '|',
          'insertTable',
          '|',
          'undo',
          'redo'
        ]
      },
      table: {
        contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
      },
      language: 'en'
    };
    
    ClassicEditor
      .create( document.querySelector( '#editor' ))
      .then( newEditor => {
        editor = newEditor;
    } )
    .catch( error => {
        console.error( error );
    } );

    $.magnificPopup.instance._onFocusIn = function(e) {
      // Do nothing if target element is input
      if( $(e.target).hasClass('ck-input') ) {
         return true;
      } 
    // Else call parent method
      $.magnificPopup.proto._onFocusIn.call(this,e);
    };
 
    $('#saveNotice_a_1').on('click',function(event){
       //console.log('Save clicked' + editor.getData().replace('<p>', '').replace('</p>', '') +'  date- '+ $('#dateInput').val()); 
        console.log('Save clicked' + editor.getData() +'  date- '+ $('#dateInput').val()); 
        const d = new Date($('#dateInput').val());
       const obj = {id:notices.length , date:d.getDate()+"-"+months[d.getMonth()]+"-"+d.getFullYear(),text:editor.getData().replace('<p>', '').replace('</p>', '')}  ;
        //const obj = {id:notices.length , date:d.getDate()+"-"+months[d.getMonth()]+"-"+d.getFullYear(),text:editor.getData()}  ;
        console.log(obj);
       notices.unshift(obj);   
        createContent();
    });
    
});
                  
function createContent() {
    
    const grouping = _.groupBy(notices, element => element.date.substring(0, 10))
    const groupeByDateNotices = _.map(grouping, (items, date) => ({
                          date: date,
                          notices: items
                        }));
   
    console.log(groupeByDateNotices);
    
    var rootElement = $('.popup-scroll');
    rootElement.empty();
    
    groupeByDateNotices.forEach(item => {

      var noticeDiv = $('<div class= "notice">');  
      var divDate = $('<div class="search-center" />').append($('<h3>').append(item.date));
        noticeDiv.append(divDate);
      var message ;    
       
        item.notices.forEach(data => {
            message = $('<p>').append($('<i class="icon ion-checkmark-circled icon-small">'),$('<span>').append(data.text));
            //message =  data.text;
            noticeDiv.append(message,$('<br>'));
           
        })
        rootElement.append($('<div class="row">').append(noticeDiv));
    } )
    
   // console.log(rootElement);
    
}