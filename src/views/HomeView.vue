<template>
  <div class="home">
    <div class="font-modal">
      <p v-for="(f, key) in fonts" :key=key :style="{ fontFamily: f }" @click="setStyle(f)">
        {{ f }}
      </p>
    </div>
    <div class="columns">
      <div class="column is-half">
        <div id="editor"></div>
      </div>
      <div class="column is-half output">
        <h1>HTML OUTPUT</h1>
        <hr>
        {{ rawHtml }}
      </div>
    </div>
  </div>
</template>

<script>
import { actions } from '../maps'

export default {
  name: 'HomeView',
  mounted () {
    this.initEditor('#editor')
  },
  data () {
    return {
      rawHtml: null,
      isImageModalActive: false,
      fonts: [
        'Bitter',
        'Caveat',
        'Libre Franklin',
        'Merriweather',
        'Raleway',
        'Roboto'
      ]
    }
  },
  methods: {
    initEditor (id) {
      const change = (e) => {
        this.rawHtml = e.target.innerHTML
      }
      const el = document.querySelector(id)
      el.className = 'editor'

      el.content = document.createElement('div')
      el.content.className = 'editor-content'
      el.content.contentEditable = true
      el.content.oninput = change.bind(el)
      el.content.onkeydown = (e) => {
        if (e.which === 9) e.preventDefault()
      }

      el.toolbar = document.createElement('div')
      el.toolbar.className = 'editor-tb'
      for (const key in actions) {
        if (Object.hasOwnProperty.call(actions, key)) {
          const e = actions[key]
          const btn = document.createElement('button')
          btn.title = e.title
          btn.innerHTML = `<span class="icon is-small"><i class="mdi mdi-${e.icon}"></i></span>`
          btn.onclick = e.action.bind(el, el)
          btn.className = 'editor-tb-btn'
          el.toolbar.appendChild(btn)
        }
      }

      el.appendChild(el.toolbar)
      el.appendChild(el.content)

      el.exec = (cmd, val) => {
        return document.execCommand(cmd, false, val)
      }
    },
    setStyle (font) {
      const el = document.querySelector('.editor-content')
      const range = document.createRange()
      const sel = window.getSelection()

      range.selectNodeContents(el)
      sel.removeAllRanges()
      sel.addRange(range)

      document.execCommand('fontName', false, font)
      document.querySelector('.font-modal').style.display = 'none'
    }
  }
}
</script>
<style lang="scss">
  .home .columns {
    display: flex;
    flex-direction: row;
    text-align: left;
    font-family: 'Roboto', sans-serif;
  }

  .font-modal {
    position: absolute;
    top: 40px;
    left: 20px;
    display: none;
    width: 180px;
    height: auto;
    text-align: left;
    background-color: #fff;
    border: 1px solid rgba(10, 10, 10, 0.1);
    border-radius: 0 10px 10px 10px;
    box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.3);
    padding: 10px 0;
    p {
      padding: 5px 20px;
    }
    p:hover {
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }

  .editor {
    display: flex;
    flex-direction: column;
    height: 100vh;
    border: 1px solid rgba(10, 10, 10, .1);

     .editor-tb {
        width: 100%;
        padding: 10px;
        user-select: none;
        background-color: #fff;
        border-bottom: 1px solid rgba(10, 10, 10, 0.1);
        .editor-tb-btn {
          width: 40px;
          height: 40px;
          border: none;
          cursor: pointer;
          background-color: transparent;
          outline: 0;
        }
        .editor-tb-btn:hover {
          background-color: #f5f5f5;
        }
      }

      .editor-content {
        outline: 0;
        width: 100%;
        height: 100%;
        padding: 25px;
        overflow-y: auto;
        box-sizing: border-box;
        background-color: #f0f0f0;
      }
  }
  .output {
    h1 {
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      text-align: center;
      margin-top: 30px;
    }
  }
</style>
