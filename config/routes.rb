Rails.application.routes.draw do
  get 'session/show'

  root 'properties#index'

  resources :users

  get '/properties', to: 'properties#show'
  get '/analyze/:id', to: 'properties#analyze'
  get '/videochat', to: 'sessions#show'
  # get '/signup', to: 'users#new'
end
