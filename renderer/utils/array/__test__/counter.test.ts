import { Page } from '../../../../renderer/interfaces/projectType'
import { sumOfTextLength } from '../../../../renderer/utils/array/counter'

describe('loadtest', () => {
  const mock = {
    projectName: 'u-yasの大冒険',
    projectId: 'jfioeafhau',
    author: {
      writer: ['u-yas'],
      illustrator: ['pompompurin']
    },
    media: {
      character: [
        {
          name: 'u-yas',
          standingImage: [
            {
              label: '通常',
              filename: 'uyas-normal.png'
            },
            {
              label: '怒った顔',
              filename: 'uyas-anger.png'
            }
          ]
        }
      ],
      bgImage: [
        {
          label: '学校の校門',
          fileName: 'FrontSchool.png'
        },
        {
          label: '教室',
          fileName: 'class.png'
        }
      ],
      bgm: [
        {
          label: '登校中',
          fileName: 'gotoSchool.mp3'
        }
      ],
      se: [
        {
          label: '殴られる音',
          fileName: 'boko.mp3'
        }
      ]
    },
    chapter: [
      {
        label: '冒頭',
        id: '4353534',
        pages: [
          {
            id: 'hgrufeaefa',
            command: 'text',
            content: 'wefeaf'
          },

          {
            id: 'hguiraejfuaahe',
            command: 'text',
            content: 'ffesfc'
          }
        ]
      },
      {
        label: '冒頭',
        id: 'fefesz',
        pages: [
          {
            id: 'hgruefa',
            command: 'text',
            content: 'fjeohafheiuahfuiahfiuhaiuefh'
          },

          {
            id: 'hguirahe',
            command: 'text',
            content: 'feafhauef'
          }
        ]
      },
      {
        label: '冒頭',
        id: '4353534',
        pages: [
          {
            id: 'hgruefa',
            command: 'text',
            content: 'fefrgjioerjefa'
          },

          {
            id: 'hguirahe',
            command: 'text',
            content: 'feafhaufeahfuiaef'
          }
        ]
      }
    ]
  }

  test('counter', () => {
    expect(sumOfTextLength(mock.chapter[0].pages as Page[])).toBe(9)
  })
})
