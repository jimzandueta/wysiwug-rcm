const actions = {
  font: {
    icon: 'format-font',
    title: 'Font Family',
    action: e => {
      document.querySelector('.font-modal').style.display = 'block'
    }
  },
  bold: {
    icon: 'format-bold',
    title: 'Bold',
    action: e => e.exec('bold')
  },
  italic: {
    icon: 'format-italic',
    title: 'Italic',
    action: e => e.exec('italic')
  },
  underline: {
    icon: 'format-underline',
    title: 'Underline',
    action: e => e.exec('underline')
  },
  strikethrough: {
    icon: 'format-strikethrough',
    title: 'Strikethrough',
    action: e => e.exec('strikeThrough')
  },
  olist: {
    icon: 'format-list-numbered',
    title: 'Ordered List',
    action: e => e.exec('insertOrderedList')
  },
  ulist: {
    icon: 'format-list-bulleted',
    title: 'Unordered List',
    action: e => e.exec('insertUnorderedList')
  },
  quote: {
    icon: 'format-quote-close',
    title: 'Quote',
    action: e => e.exec('formatBlock', '<BLOCKQUOTE>')
  },
  link: {
    icon: 'link',
    title: 'Link',
    action: e => {
      const url = window.prompt('Enter the link URL')
      url && e.exec('createLink', url)
    }
  },
  center: {
    icon: 'format-align-center',
    title: 'Text Align Center',
    action: e => e.exec('justifyCenter')
  },
  left: {
    icon: 'format-align-left',
    title: 'Text Align Left',
    action: e => e.exec('justifyLeft')
  },
  right: {
    icon: 'format-align-right',
    title: 'Text Align Right',
    action: e => e.exec('justifyRight')
  },
  indent: {
    icon: 'format-indent-increase',
    title: 'Indent',
    action: e => e.exec('indent')
  },
  outdent: {
    icon: 'format-indent-decrease',
    title: 'Outdent',
    action: e => e.exec('outdent')
  }
}

export default actions
export {
  actions
}
