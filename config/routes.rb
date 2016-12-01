Rails.application.routes.draw do
  root 'properties#index'

  resources :users

  get '/properties', to: 'properties#show'
  get '/analyze/:id', to: 'properties#analyze'
  # get '/signup', to: 'users#new'
end
