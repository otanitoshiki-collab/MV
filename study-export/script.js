// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "MV　Experiment",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "この実験は、慶應義塾大学メディア・コミュニケーション研究所が行う研究プロジェクトの一環として、\nMV視聴前後における感情の変化を調べるためのものです。",
              "title": "実験にご参加いただき、ありがとうございます。"
            },
            {
              "required": true,
              "type": "text",
              "content": "この後、MVをご視聴いただいた後、簡単なアンケートを行います。"
            },
            {
              "required": true,
              "type": "text",
              "content": "実験を始める前に、次のページでは、まず、実験参加への同意をいただきます。"
            },
            {
              "required": true,
              "type": "text",
              "content": "準備ができましたら「次へ」をクリックしてください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Page1"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "【目的】この実験は、MV視聴前後における感情の変化を調べるためのものです。",
              "title": "実験参加への同意確認"
            },
            {
              "required": true,
              "type": "text",
              "content": "【所要時間】この実験はおおよそ5分かかります。"
            },
            {
              "required": true,
              "type": "text",
              "content": "【リスク】緊張したり、疲労を感じる可能性があります。"
            },
            {
              "required": true,
              "type": "text",
              "content": "【リスクへの対策】体調がわるくなった場合には、参加を取りやめてください。"
            },
            {
              "required": true,
              "type": "text",
              "content": "【謝礼】この実験への参加に対する謝金は100円です。"
            },
            {
              "required": true,
              "type": "text",
              "content": "【個人情報】この実験では、個人を特定できる情報は一切収集しません。"
            },
            {
              "required": true,
              "type": "text",
              "content": "【データの利用】この実験で得られたデータは、学術的な目的にのみ利用します。"
            },
            {
              "required": true,
              "type": "text",
              "content": "【データの廃棄】この実験で得られたデータは、10年後に廃棄します。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "上記のすべてをご了解の上、実験参加にご同意いただけますか。",
              "options": [
                {
                  "label": "はい",
                  "coding": "1"
                },
                {
                  "label": "いいえ",
                  "coding": "2"
                }
              ],
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "「はい」を選択した方は「次へ」をクリックしてください。"
            },
            {
              "required": true,
              "type": "text",
              "content": "「いいえ」を選択した方はページを閉じていただいて構いません。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "concent"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "次のページから40秒程度のMVが提示されます。",
              "title": "それでは実験を始めます。"
            },
            {
              "required": true,
              "type": "text",
              "content": "イヤホンが必要な方は装着してください。"
            },
            {
              "required": true,
              "type": "text",
              "content": "MVをご視聴いただいた後、MVに関する簡単なアンケートに答えていただきます。"
            },
            {
              "required": true,
              "type": "text",
              "content": "深く考えずに、正直にお答えください。"
            },
            {
              "required": true,
              "type": "text",
              "content": "※MVが流れた後は、自動的に次のページに遷移します。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Page2"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "videoURL": "http:\u002F\u002Fezemi.synology.me\u002Ftrailers\u002Fs_u.mp4",
              "": ""
            },
            {
              "videoURL": "http:\u002F\u002Fezemi.synology.me\u002Ftrailers\u002Fs_s.mp4",
              "": ""
            },
            {
              "videoURL": "http:\u002F\u002Fezemi.synology.me\u002Ftrailers\u002Fp_u.mp4",
              "": ""
            },
            {
              "videoURL": "http:\u002F\u002Fezemi.synology.me\u002Ftrailers\u002Fp_s.mp4",
              "": ""
            },
            {
              "videoURL": "http:\u002F\u002Fezemi.synology.me\u002Ftrailers\u002Fe_u.mp4",
              "": ""
            },
            {
              "videoURL": "http:\u002F\u002Fezemi.synology.me\u002Ftrailers\u002Fe_s.mp4",
              "": ""
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "1"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Loop",
          "shuffleGroups": [],
          "template": {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
const video = document.querySelector('video');

if (video) {
  video.addEventListener('ended', () => {
    this.end();
  });
}
}
            },
            "title": "Screen",
            "content": "\u003Cvideo\r\n\r\n  width=\"100%\"\r\n\r\n  style=\"max-width:800px; height:auto; aspect-ratio:16\u002F9; display:block; margin:auto;\"\r\n\r\n  controls\u003E\r\n\r\n  \u003Csource src=\"${ parameters.videoURL }\" type=\"video\u002Fmp4\"\u003E\r\n\r\n\u003C\u002Fvideo\u003E"
          }
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "slider",
          "attributes": {
            "min": "0",
            "max": "100",
            "step": "1"
          },
          "label": "このMVはどれくらい印象に残りましたか？",
          "name": "mv_impression",
          "help": "0＝全く印象に残らなかった\n100＝非常に印象に残った\n\nスライダー自由に動かして回答してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Question1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "radio",
          "label": "このMVは面白かったですか？",
          "options": [
            {
              "label": "まったく面白くなかった",
              "coding": "1"
            },
            {
              "label": "あまり面白くなかった",
              "coding": "２"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや面白かった",
              "coding": "４"
            },
            {
              "label": "非常に面白かった",
              "coding": "５"
            }
          ],
          "name": "mv_intersesting"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Question2"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "radio",
          "label": "このMVは好きですか？",
          "options": [
            {
              "label": "まったく好きではない",
              "coding": "1"
            },
            {
              "label": "あまり好きではない",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや好きである",
              "coding": "4"
            },
            {
              "label": "非常に好きである",
              "coding": "5"
            }
          ],
          "name": "mv_liking"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Question3"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "radio",
          "label": "このMVは流行ると思いますか？(急上昇に乗るなど)",
          "options": [
            {
              "label": "まったく流行らないと思う",
              "coding": "1"
            },
            {
              "label": "あまり流行らないと思う",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや流行ると思う",
              "coding": "4"
            },
            {
              "label": "かなり流行ると思う",
              "coding": "5"
            }
          ],
          "name": "mv_popular"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Question4"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "textarea",
          "label": "このMVで印象に残った演出や表現を具体的に教えてください。",
          "name": "impressive_element"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Question5"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "slider",
          "label": "このMVの「音楽」はどれくらい印象に残りましたか？",
          "attributes": {
            "min": "0",
            "max": "100",
            "step": "1"
          },
          "help": "0＝まったく印象に残らなかった\n100＝非常に印象に残った\n\nスライダーを自由に動かして回答してください。",
          "name": "music_impression"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Question6"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "radio",
          "label": "このMVの「音楽」は好きですか？",
          "options": [
            {
              "label": "まったく好きではない",
              "coding": "1"
            },
            {
              "label": "あまり好きではない",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "やや好きである",
              "coding": "4"
            },
            {
              "label": "非常に好きである",
              "coding": "5"
            }
          ],
          "name": "music_liking"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Question7"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "radio",
          "label": "このMVと音楽はマッチしていると思いましたか？",
          "options": [
            {
              "label": "まったくマッチしていないと思う",
              "coding": "1"
            },
            {
              "label": "あまりマッチしていないと思う",
              "coding": "2"
            },
            {
              "label": "どちらともいえない",
              "coding": "3"
            },
            {
              "label": "ややマッチしていると思う",
              "coding": "4"
            },
            {
              "label": "非常にマッチしていると思う",
              "coding": "5"
            }
          ],
          "name": "mv_music_match"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Question8"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "slider",
          "label": "このMVをもう一度見たいとどれくらい思いましたか？",
          "attributes": {
            "min": "0",
            "max": "100",
            "step": "1"
          },
          "help": "0＝全く見たいと思わない\n100＝非常に見たいと思う\n\nスライダー自由に動かして回答してください。",
          "name": "mv_rewatch"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Quetion9"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "radio",
          "label": "このMVがYouTubeにあがっていたらいいねをつけますか？",
          "options": [
            {
              "label": "付ける",
              "coding": "１"
            },
            {
              "label": "付けない",
              "coding": "２"
            }
          ],
          "name": "mv_youtube"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Question10"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "textarea",
          "name": "impressive_element",
          "label": "好きなMVの曲名、アーティスト名、どういった点で好きなのかの3点をそれぞれ具体的に教えてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Question11"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "この実験は、ミュージックビデオ（MV）における「どの表現要素」が視聴者に強い影響を与え、ヒットにつながるのかを調べるためのものです。",
          "title": "本実験の「本当の目的」について説明します。"
        },
        {
          "required": true,
          "type": "text",
          "content": "実は、本実験で使用された6本の自主制作MVは、それぞれ「映像演出」「音楽のテンポ」「ストーリー性」など、特定の要素を意図的に強調して制作されています。"
        },
        {
          "required": true,
          "type": "text",
          "content": "皆さんには、この6種類のうちランダムに選ばれた1本のMVを視聴し、感想や評価を回答していただいています。"
        },
        {
          "required": true,
          "type": "text",
          "content": "これから、異なる要素に重点を置いたMVを視聴した参加者の間で、作品に対する印象（楽曲や映像の受け止め方）や、ヒットに関連する意識・行動意向（「SNSで共有したい」「繰り返し聴きたい」など）にどのような違いが生じるのかを分析します。"
        },
        {
          "required": true,
          "type": "text",
          "content": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page3"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "label": "謝礼をお支払いするために、メールアドレスをご記入ください。（謝礼を希望しない場合は、「希望しない」とご記入ください。）",
          "name": "Email"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "本調査にご協力いただき、誠にありがとうございました。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "終わる →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    }
  ]
})

// Let's go!
study.run()