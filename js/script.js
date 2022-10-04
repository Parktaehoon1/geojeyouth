// jquery 를 이용(html, css, js)
$(document).ready(function () {
  // 모달창
  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");

  modalClose.click(function () {
    modalWrap.stop().fadeOut(500);
    // 추가기능 : 스크롤바 살리기
    // $('html').css('overflow', 'auto');
  });
  let modalMain = $(".modal-main");
  //내용 배경 클릭
  modalMain.click(function (event) {
    // 클릭 정보 전달 막기
    event.stopPropagation();
  });
  //전체 배경 클릭
  modalWrap.click(function () {
    modalWrap.stop().fadeOut(500);
    // 추가기능 : 스크롤바 살리기
    // $('html').css('overflow', 'auto');
  });
  $("html").keydown(function (key) {
    if (key.keyCode == 13) {
      modalWrap.stop().fadeOut(200);
      $("html").css("overflow", "auto");
    }
  });
  // 전체메뉴 보기
  // .more-wrap 저장
  let more_wrap = $(".more-wrap");
  // .member-more 저장해서 활ㅇㅇ하자
  let member_more = $(".member-more");
  member_more.click(function () {
    more_wrap.fadeIn(300);
  });
  // .more-div-close 를 활용하자.
  let more_div_close = $(".more-div-close");
  more_div_close.click(function () {
    more_wrap.fadeOut(300);
  });
  // 더보기 메뉴 배경을 클릭하면 사라지기
  more_wrap.click(function () {
    more_wrap.fadeOut(300);
  });
  $(".more-div").click(function (event) {
    event.stopPropagation();
  });

  // 모바일 메뉴 기능
  // .mb-bt 를 저장해서 활용하자.
  $(".mb-bt").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("mb-bt-open");
    $(".mb-dim").toggleClass("mb-dim-open");
    $(".mb-wrap").toggleClass("mb-wrap-open");
  });

  // 화면 사이즈 체크
  $(window).resize(function () {
    // 화면 너비를 계산한다.
    let temp = $(window).width();
    // 1000 px 보다 크면
    if (temp > 1000) {
      // 모바일 버튼 기능 초기화
      $(".mb-bt").removeClass("mb-bt-open");
      $(".mb-dim").removeClass("mb-dim-open");
      $(".mb-wrap").removeClass("mb-wrap-open");
      $(".mb-menu > li").height(60);
      $(".mb-mainmenu").removeClass("mb-mainmenu-open");
    }
  });

  // 모바일 메뉴 펼치기 기능
  // 1. 모바일 메뉴 저장
  let mb_mainmenu = $(".mb-mainmenu");
  // 2. 모바일 서브메뉴 저장
  let mb_submenu = $(".mb-submenu");
  // 3. 펼쳐질 서브메뉴의 높이값
  let mb_submenu_high = [];
  // 높이값 계산을 실행
  $.each(mb_submenu, function (index) {
    // 각각의 .mb-submenu 로 가서
    // li 의 개수를 파악한다.
    let count = $(this).find("li").length;
    // 최종 결과를 저장(56*count)
    mb_submenu_high[index] = 56 * count;
  });

  // 최종 결과
  let mb_li = $(".mb-menu > li");
  $.each(mb_mainmenu, function (index) {
    $(this).click(function (e) {
      //  웹브라우저 갱신 막기
      e.preventDefault();

      // mb-mainmenu를 toggleClass 한다.
      $(this).toggleClass("mb-mainmenu-open");
      // 만약에 mb-mainmenu-open 이 있으면 펼치고 없으면 닫고
      let active = $(this).hasClass("mb-mainmenu-open");
      if (active) {
        let temp = mb_submenu_high[index];
        mb_li.eq(index).height(temp + 60);
      } else {
        mb_li.eq(index).height(60);
      }
    });

    // 모바일 메뉴 배경클릭시 사라짐.
    let mb_dim = $(".mb-dim");
    mb_dim.click(function () {
      $(".mb-bt").removeClass("mb-bt-open");
      $(".mb-dim").removeClass("mb-dim-open");
      $(".mb-wrap").removeClass("mb-wrap-open");
      $(".mb-menu > li").height(60);
      $(".mb-mainmenu").removeClass("mb-mainmenu-open");
    });
  });

  // 청년정책 새소식  : 객체  {} 구현
  let headerData = [
    {
      link: "#",
      title: "청년센터",
      subArr: [
        {
          sublink: "#",
          subtitle: "청년센터소개",
        },
        {
          sublink: "#",
          subtitle: "프로그램안내",
        },
        {
          sublink: "#",
          subtitle: "보유도서목록",
        },
        {
          sublink: "#",
          subtitle: "공간안내",
        },
        {
          sublink: "#",
          subtitle: "오시는길",
        },
      ],
    },
    {
      link: "#",
      title: "청년정책",
      subArr: [
        {
          sublink: "#",
          subtitle: "정책소식",
        },
        {
          sublink: "#",
          subtitle: "분야별 청년정책",
        },
        {
          sublink: "#",
          subtitle: "청년네트워크 소개",
        },
        {
          sublink: "#",
          subtitle: "청년주요활동",
        },
        {
          sublink: "#",
          subtitle: "청년정책 검색",
        },
        {
          sublink: "#",
          subtitle: "아카이브",
        },
        {
          sublink: "#",
          subtitle: "청춘다락",
        },
      ],
    },
    {
      link: "#",
      title: "청년일자리",
      subArr: [
        {
          sublink: "#",
          subtitle: "일자리정책",
        },
        {
          sublink: "#",
          subtitle: "구인 및 구직 등록",
        },
        {
          sublink: "#",
          subtitle: "채용정보",
        },
        {
          sublink: "#",
          subtitle: "교육훈련",
        },
        {
          sublink: "#",
          subtitle: "창업정보",
        },
      ],
    },
    {
      link: "#",
      title: "사업소개",
      subArr: [
        {
          sublink: "#",
          subtitle: "사업안내",
        },
        {
          sublink: "#",
          subtitle: "사업일정표",
        },
      ],
    },
    {
      link: "#",
      title: "공간예약",
      subArr: [
        {
          sublink: "#",
          subtitle: "공간신청",
        },
        {
          sublink: "#",
          subtitle: "공간신청 현황",
        },
      ],
    },
    {
      link: "#",
      title: "커뮤니티",
      subArr: [
        {
          sublink: "#",
          subtitle: "이룸소식",
        },
        {
          sublink: "#",
          subtitle: "자유게시판",
        },
        {
          sublink: "#",
          subtitle: "활동갤러리",
        },
        {
          sublink: "#",
          subtitle: "청년뉴스",
        },
        {
          sublink: "#",
          subtitle: "동영상자료",
        },
      ],
    },
    {
      link: "#",
      title:
        "청년창업공간(<span style='color: #ff8000;'>내</span><span style='color: #0365ad;'>꿈</span><span style='color: #93be49;'>공</span><span style='color: #f35c8a;'>간</span>)",
      subArr: [
        {
          sublink: "#",
          subtitle:
            "<span style='color:#ff8000'>내</span><span style='color:#0365ad'>꿈</span><span style='color:#93be49'>공</span><span  style='color:#f35c8a'>간</span> 소개",
        },
        {
          sublink: "#",
          subtitle:
            "<span style='color:#ff8000'>내</span><span style='color:#0365ad'>꿈</span><span style='color:#93be49'>공</span><span  style='color:#f35c8a'>간</span> 대관신청",
        },
        {
          sublink: "#",
          subtitle:
            "<span style='color:#ff8000'>내</span><span style='color:#0365ad'>꿈</span><span style='color:#93be49'>공</span><span  style='color:#f35c8a'>간</span> 대관현황",
        },
      ],
    },
  ];
  let headerList = $(".header-data");
  let headerOutput = "";
  for (let i = 0; i < headerData.length; i++) {
    let data = headerData[i]; //
    console.log("🚀 ~ file: script.js ~ line 290 ~ data", data);

    let subData = data.subArr; //
    console.log("🚀 ~ file: script.js ~ line 293 ~ subData", subData);
    let temp = `
            <li>
              <a href="${data.link}" class="mainmenu">${data.title}</a>
                <ul class="submenu">
                  <li><a href="${subData.sublink}">${subData.subtitle}</a></li>
                  <li><a href="${subData.sublink}">${subData.subtitle}</a></li>
                  <li><a href="${subData.sublink}">${subData.subtitle}</a></li>
                  <li><a href="${subData.sublink}">${subData.subtitle}</a></li>
                  <li><a href="${subData.sublink}">${subData.subtitle}</a></li>
                </ul>
              </li>
              `;
    headerOutput += temp;
  }
  headerList.html(headerOutput);

  // 커뮤니티 영역 데이터 연동
  // 이룸 소식       : Array [] 구현
  let infoLinkArr = ["#1", "#2", "#3", "#4"];
  let infoTitleArr = [
    "7월 취창업 특강 지원자 모집 ♡",
    "6월 문화특강 [모스큐브&멘톨비누 만들기]",
    "6월 인문학특강 [4차 산업혁명과 청년]",
    "< 내꿈공간(내 일을 꿈꾸는 청년창업공간) 대관 안내 >",
  ];
  let infoDateArr = ["2022.06.27", "2022.06.13", "2022.06.08", "2022.06.02"];

  let communityList = $(".data-info");
  let communityOutput = "";

  for (let i = 0; i < infoLinkArr.length; i++) {
    let temp = `
        <li>
          <a href="${infoLinkArr[i]}">${infoTitleArr[i]}</a>
          <span>${infoDateArr[i]}</span>  
        </li>
      `;
    communityOutput += temp;
  }

  communityList.html(communityOutput);

  // 청년정책 새소식  : 객체  {} 구현
  let newsData = [
    {
      link: "#1",
      title: "2022 경남 청년 라이브커머스 아카데미 참가자 모집 공고",
      date: "2022.06.27",
    },
    {
      link: "#2",
      title: "청춘다락, 7월 프로그램 참여자 선정 결과(예비명단 포함)",
      date: "2022.06.23",
    },
    {
      link: "#3",
      title: "「2022년 청년, 거제에서 한 달 살아보기」 참여 청년 모집!!",
      date: "2022.06.15",
    },
    {
      link: "#4",
      title: "2022년 거제시 청년 월세 지원사업 선정 결과",
      date: "2022.06.08",
    },
  ];

  let dataNewsDiv = $(".data-news");
  let dataNewsOutput = "";
  for (let i = 0; i < newsData.length; i++) {
    // 데이터를 한개씩 가져와서 뜯는다.
    let data = newsData[i];
    let temp = `
      <li>
        <a href="${data.link}">${data.title}</a>
        <span>${data.date}</span>
      </li>
    `;

    dataNewsOutput += temp;
  }

  dataNewsDiv.html(dataNewsOutput);

  let galleryData = [
    {
      link: "#",
      title: "3월 인문학 특강 [우리 삶에 철학이 필요한 이유]",
      date: "2021-12-04",
      pick: "/images/gallery_1.jpg",
      image: "gallery-1",
    },
    {
      link: "#",
      title: "12월 문화특강 주간 ♡ 크리스마스 입욕제 만들기",
      date: "2021-12-14",
      pick: "/images/gallery_2.jpg",
      image: "gallery-2",
    },
    {
      link: "#",
      title: "12월 문화특강 주간 ♡ 플레이팅 도마 만들기",
      date: "2021-12-14",
      pick: "/images/gallery_3.jpg",
      image: "gallery-3",
    },
  ];

  let galleryDiv = $(".gallery-div");
  let galleryDivOutput = "";
  for (let i = 0; i < galleryData.length; i++) {
    let data = galleryData[i];
    let temp = `
          <li>
              <a href="${data.link}">
                <span class="gallery-img ${data.image}"></span>
                <p class="gallery-cont">
                  <span class="gallery-title">
                    ${data.title}
                  </span>
                  <span class="gallery-date">
                    ${data.date}
                  </span>
                </p>
              </a>
            </li>
    `;
    galleryDivOutput += temp;
  }
  galleryDiv.html(galleryDivOutput);
});

// js 를 이용(html, css, js,멀티미디어 요소)
window.onload = function () {
  $("#datepicker").datepicker({
    changeMonth: false,
    autoSize: true,
    firstDay: 0,
    showMonthAfterYear: true,
    yearSuffix: ".",
    dayNames: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    monthNamesShort: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ],
    monthNames: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    onSelect: function () {
      // 날짜 선택 이벤트
      // setTimeout(function () {
      //   let datepickerA = $("#datepicker td a");
      //   $.each(datepickerA, function (index, item) {
      //     let now = $(this).attr("data-date");
      //     now = parseInt(now);
      //     if (now < 10) {
      //       $(this).text("0" + now);
      //       $(this).attr("data-date", "0" + now);
      //       console.log("gogo");
      //     }
      //   });
      // }, 50);
    },
    onChangeMonthYear: function () {
      // 월, 년 변경 이벤트
      // setTimeout(function () {
      //   let datepickerA = $("#datepicker td a");
      //   $.each(datepickerA, function (index, item) {
      //     let now = $(this).attr("data-date");
      //     now = parseInt(now);
      //     if (now < 10) {
      //       $(this).text("0" + now);
      //       $(this).attr("data-date", "0" + now);
      //       console.log("gogo");
      //     }
      //   });
      // }, 50);
    },
  });

  // 날짜 변경해서 밀어넣기
  // let datepickerA = $("#datepicker td a");
  // $.each(datepickerA, function (index, item) {
  //   let now = $(this).attr("data-date");
  //   now = parseInt(now);
  //   if (now < 10) {
  //     $(this).text("0" + now);
  //   }
  // });
  // 비주얼 슬라이드
  let sw_visual = new Swiper(".sw-visual", {
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-visual-pg",
      clickable: true,
    },
  });
  // 일시멈춤 버튼
  // 현재 상태 저장
  let slide_now = "ing";

  $(".sw-visual-bt").click(function () {
    if (slide_now == "ing") {
      // 현재 슬라이드 진행 중이라면
      // 슬라이드를 멈춘다.
      slide_now = "stop";
      sw_visual.autoplay.stop();
      $(this).find("span").text("play_arrow");
    } else {
      // 현재 슬라이드가 멈췄다.
      // 다시 슬라이드를 진행한다.
      slide_now = "ing";
      sw_visual.autoplay.start();
      $(this).find("span").text("pause");
    }
  });

  // 배너 슬라이드
  let sw_banner = new Swiper(".sw-banner", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      prevEl: ".sw-banner-prev",
      nextEl: ".sw-banner-next",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1400: {
        slidesPerView: 6,
      },
      1260: {
        slidesPerView: 5,
      },
      1000: {
        slidesPerView: 4,
      },
      860: {
        slidesPerView: 3,
      },
    },
  });

  // 배너 슬라이드 일시멈춤 버튼
  $(".sw-banner-pause").click(function () {
    // 현재 span 태그 안쪽의 글자를 읽는다.
    let temp = $(this).find("span").text();
    if (temp == "play_arrow") {
      $(this).find("span").text("pause");
      sw_banner.autoplay.stop();
    } else {
      $(this).find("span").text("play_arrow");
      sw_banner.autoplay.start();
    }
  });

  // 화면 위로 이동
  $(".gotop").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
};
