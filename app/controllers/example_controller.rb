class ExampleController < ApplicationController

  def pin
  end

  def text_fade
    @projects = Project.all.order(:sort_order)
  end

  def resume
    pdf_filename = File.join(Rails.root, "/resume.pdf")
    send_file(pdf_filename, :filename => "/resume.pdf", :disposition => 'inline', :type => "application/pdf")
  end
end
