class Replacer
  constructor: ->
    @promiseWaitTime = 5000

    ignore = '\'":;@&#~{}<>\\r\\n\\[\\]\\!\\$\\+\\?\\%\\*\\/\\\\'
    @regexpCode = RegExp ":([^\\s#{ignore}][^#{ignore}]*[^\\s#{ignore}]):|:([^\\s#{ignore}]):", 'g'

    @targets = []
    @complete_num = 0

  setTargets: (node) ->
    child = node.firstChild
    while child
      switch child.nodeType
        when 1
          if $(child).is @plugin.options.ignore
            break
          if child.isContentEditable
            break
          @setTargets child
          break
        when 3
          @targets.push child if child.textContent.match(/\S/)
          break
      child = child.nextSibling

  getEmojiTag: (emoji_code) ->
    "<img class='emojidex-emoji' src='#{@plugin.EC.cdn_url}#{@plugin.EC.size_code}/#{emoji_code}.png' title='#{@replaceUnderToSpace emoji_code}'></img>"

  getLoadingTag: (emoji_data, type) ->
    "<span class='emojidex-loading-icon' data-emoji='#{emoji_data}' data-type='#{type}'></span>"

  getLoadingElement: (element) ->
    $ element.find '.emojidex-loading-icon'

  setLoadingTag: ->
    return new Promise (resolve, reject) =>
      timeout = setTimeout ->
        reject new Error('emojidex: setLoadingTag - Timeout')
      , @promiseWaitTime

      @targets = []
      @setTargets @plugin.element[0]
      console.log 'targets node length:', @targets.length, @targets

      if @targets.length
        checker = new CountChecker @targets.length, ->
          resolve()
        for target in @targets
          $(target).replaceWith "<span class='emojidex-ignore-element'>#{@getAddedLoadingTagText(target)}</span>"
          checker.check()
      else
        resolve()

  getAddedLoadingTagText: (target_element) ->
    replaced_text = target_element.data
    replaced_text = replaced_text.replace @plugin.options.regexpUtf, (matched_string) =>
      @getLoadingTag matched_string, 'utf'
    replaced_text = replaced_text.replace @regexpCode, (matched_string) =>
      @getLoadingTag matched_string.replace(/:/g, ''), 'code'
    return replaced_text

  fadeOutLoadingTag_fadeInEmojiTag: (element, emoji_code, match = true) ->
    emoji_tag = undefined
    if match
      emoji_tag = $(@getEmojiTag emoji_code).hide()
    else
      emoji_tag = ":#{emoji_code}:"

    return new Promise (resolve, reject) =>
      timeout = setTimeout ->
        reject new Error('emojidex: fadeOutLoadingTag_fadeInEmojiTag - Timeout')
      , @promiseWaitTime

      element.fadeOut
        duration: 'normal'
        done: =>
          element.after emoji_tag
          element.remove()
          if match
            emoji_tag.fadeIn
              duration: "fast"
              done: =>
                resolve()
          else
            resolve()

  replaceSpaceToUnder: (string) ->
    string.replace /\s/g, '_'

  replaceUnderToSpace: (string) ->
    string.replace /_/g, ' '
