var notices = [
  {
    id: 1,
    date: "02-APR-2020",
    text:
      "এতদ্বারা  অত্র বিদ্যালয়ের সকল ছাত্র-শিক্ষক ও কর্মচারীদের অবগতির জন্য জানানো যাচ্ছে যে, আগামী রবিবার  ১৪ ই এপ্রিল-২০২০ তারিখ বাঙলা নববর্ষ ১লা বৈশাখ উপলক্ষে বিদ্যালয়ের সমগ্র কার্যক্রম বন্ধ থাকবে। সোমবার ১৫ ই এপ্রিল-২০২০ থেকে বিদ্যালয় যথারীতি চলবে ।"
  },
  {
    id: 2,
    date: "23-FEB-2020",
    text:
      "আগামী ২৬/০২/২০২০ খ্রিঃ তারিখ ৮ম শ্রেণির মডেল টেষ্টের ফলাফল প্রকাশ করা হবে।"
  },
  {
    id: 3,
    date: "02-FEB-2020",
    text:
      "অত্র বিদ্যালয়ের শিক্ষার্থী এবং সন্মানিত অভিভাবক মন্ডলীদের বিশেষ অবগতির জন্য জানান যাচ্ছে যে নির্বাচনী পরীক্ষায় উত্তীর্ণ না হলে ২০২১ সালে অনুষ্ঠিত জে এস সি পরীক্ষায় অংশগ্রহণের লক্ষে ফরম পূরণ করা যাবে না। "
  },
  {
    id: 4,
    date: "02-APR-2020",
    text:
      "আগামী ১০/০২/২০২০ খ্রিঃ তারিখ আশুরা উপলক্ষে অত্র বিদ্যালয়ের পাঠদান কার্যক্রম বন্ধ থাকবে।"
  },
  {
    id: 4,
    date: "02-APR-2020",
    text:
      "যারা চলতি মাসের বেতন প্রদান করেন নাই তারা অনুগ্রহ করে বেতন পরিশোধ করবেন, ধন্যবাদ ।"
  }
];

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
];

$(document).ready(function() {
  createContent();

  /*  Notice Board */

  $(".footer_a_3").magnificPopup({
    items: [
      {
        src: "#notice-popup", // CSS selector of an element on page that should be used as a popup
        type: "inline"
      }
    ],
    callbacks: {
      beforeOpen: function() {
        $("body").addClass("mfp-active");
      },
      beforeClose: function() {
        $("body").removeClass("mfp-active");
      }
    },
    midClick: true
  });

  $("#addNewNotice_a_1").magnificPopup({
    items: [
      {
        src: "#addNotice-popup", // CSS selector of an element on page that should be used as a popup
        type: "inline"
      }
    ],
    callbacks: {
      beforeOpen: function() {
        $("body").addClass("mfp-active");
      },
      beforeClose: function() {
        $("body").removeClass("mfp-active");
      }
    }
  });

  let editor;

  ClassicEditor.defaultConfig = {
    toolbar: {
      items: [
        "bold",
        "italic",
        "|",
        "bulletedList",
        "numberedList",
        "|",
        "insertTable",
        "|",
        "undo",
        "redo"
      ]
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
    },
    language: "en"
  };

  ClassicEditor.create(document.querySelector("#editor"))
    .then(newEditor => {
      editor = newEditor;
    })
    .catch(error => {
      console.error(error);
    });

  $.magnificPopup.instance._onFocusIn = function(e) {
    // Do nothing if target element is input
    if ($(e.target).hasClass("ck-input")) {
      return true;
    }
    // Else call parent method
    $.magnificPopup.proto._onFocusIn.call(this, e);
  };

  $("#saveNotice_a_1").on("click", function(event) {
    //console.log('Save clicked' + editor.getData().replace('<p>', '').replace('</p>', '') +'  date- '+ $('#dateInput').val());
    console.log(
      "Save clicked" + editor.getData() + "  date- " + $("#dateInput").val()
    );
    const d = new Date($("#dateInput").val());
    const obj = {
      id: notices.length,
      date: d.getDate() + "-" + months[d.getMonth()] + "-" + d.getFullYear(),
      text: editor
        .getData()
        .replace("<p>", "")
        .replace("</p>", "")
    };
    //const obj = {id:notices.length , date:d.getDate()+"-"+months[d.getMonth()]+"-"+d.getFullYear(),text:editor.getData()}  ;
    console.log(obj);
    notices.unshift(obj);
    createContent();
  });
});

function createContent() {
  const grouping = _.groupBy(notices, element => element.date.substring(0, 11));
  const groupeByDateNotices = _.map(grouping, (items, date) => ({
    date: date,
    notices: items
  }));

  console.log(groupeByDateNotices);

  var rootElement = $(".popup-scroll");
  rootElement.empty();

  groupeByDateNotices.forEach(item => {
    var noticeDiv = $('<div class= "notice">');
    var divDate = $('<div class="search-center" />').append(
      $("<h3>").append(item.date)
    );
    noticeDiv.append(divDate);
    var message;

    item.notices.forEach(data => {
      message = $("<p>").append(
        $('<i class="icon ion-checkmark-circled icon-small">'),
        $("<span>").append(data.text)
      );
      //message =  data.text;
      noticeDiv.append(message, $("<br>"));
    });
    rootElement.append($('<div class="row">').append(noticeDiv));
  });

  // console.log(rootElement);
}
