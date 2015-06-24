(($) ->

  $.fn.sgroll = (options) ->
    
    defaults =
      class: "is-sgrolled"

    setting = $.extend(defaults, options)

    $el = $ @
    arr = []
    arr2 = []
    wh = 0
    
    setOffset = ->
      
      wh = window.innerHeight or document.documentElement.clientHeight or 0
      
      for i in [0...$el.length]
        $el1 = $el.eq(i)
        arr.push $el1.offset().top
        if !$el1.data("sgroll")? or $el1.data("sgroll") is ""
          p = 0
        else
          p = $el1.data("sgroll")
        arr2.push p

    checkScroll = ->
      
      s = $(window).scrollTop()
      
      for i in [0...arr.length]
        $el1 = $el.eq(i)
        if s > arr[i] - wh + ( wh * arr2[i] / 100)
          unless $el1.hasClass setting.class
            $el1.addClass setting.class
        else
          if $el1.hasClass setting.class
            $el1.removeClass setting.class
    
    $(window).scroll ->
      checkScroll()
    
    $(window).resize ->
      setOffset()
      checkScroll()

    setOffset()
    checkScroll()

    # メソッドチェーン対応
    this
    
) jQuery
