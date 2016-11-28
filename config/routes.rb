Rails.application.routes.draw do
  root 'properties#index'

  get '/properties', to: 'properties#show'
end
