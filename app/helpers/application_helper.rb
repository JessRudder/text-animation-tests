module ApplicationHelper
    # https://gist.github.com/JosepMartins/7091420d90300870f347
  def svg_tag(id, options = {})
    klass, fill = options[:class], options[:fill]
    width, height = options[:width], options[:height]

    content_tag(:svg,
      content_tag(:use, '', {'xlink:href' => image_path('sprite.svg#' + id, host: request.host_with_port)}),
      class: (klass if klass),
      width: (width if width),
      height: (height if height),
      fill: (fill if fill)
    )
  end
end
