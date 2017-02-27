Rails.application.routes.draw do
  get '/cover-letter' => 'personal_site#jessica_rudder'
  get '/resume' => 'personal_site#resume'
end
