class ExampleController < ApplicationController

  def pin
  end

  def text_fade
    @projects = Project.all
  end
end
