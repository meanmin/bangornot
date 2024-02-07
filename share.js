// 되었으면 좋겠는거
// 친구에게 공유하기 -> 페이스북, 트위터, 카카오톡, 링크, 사진 저장
// 테스트 다시하기

const url = 'https://bangornot.netlify.app';

// Twitter
function onClickShareTwitter() {
    const link = window.location.href;
    const twitterIntent = `https://twitter.com/intent/tweet?text=custom%20text&url=${link}`;
    window.open(twitterIntent, '_blank');
  }

function setShare() {
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = 'Bang or not';
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + 'img/image-' + resultAlt + '.jpeg';
    const shareURL = url + 'page/result-' + resultAlt + '.html';


    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: 'Bang or not?',
            description: 'Can you guess the bang sound?',
            imageUrl: window.location.href + '/asset/img/basic.jpeg',
            link: {
                mobileWebUrl: 'https://bangornot.netlify.app',
                webUrl: 'https://bangornot.netlify.app',
            },
        },
        buttons: [
            {
                title: 'Check the results',
                link: {
                    mobileWebUrl: 'https://bangornot.netlify.app',
                    webUrl: 'https://bangornot.netlify.app',
                },
            }
        ]
    });

}
