Rails.application.routes.draw do
  get '/jessica-rudder' => 'personal_site#jessica_rudder'
  get '/resume' => 'personal_site#resume'
end
