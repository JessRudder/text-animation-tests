class PersonalSiteController < ApplicationController
  def jessica_rudder
    @projects = Project.all.order(:sort_order)
  end

  def resume
    pdf_filename = File.join(Rails.root, "/resume.pdf")
    send_file(pdf_filename, :filename => "/resume.pdf", :disposition => 'inline', :type => "application/pdf")
  end
end
