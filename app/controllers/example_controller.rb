class ExampleController < ApplicationController

  def pin
  end

  def text_fade
    @projects = Project.all.order(:sort_order)
  end
end
