Rails.application.routes.draw do
  root 'properties#index'

  devise_for :people


  resources :chat_rooms, only: [:new, :create, :show, :index] do
  resources :messages, only: [:create]
  end

  # root 'chat_rooms#index'
  mount ActionCable.server => '/cable'

  get '/chat_rooms', to: 'chat_rooms#index'

  get 'session/show'


  resources :users

  get '/properties', to: 'properties#show'
  get '/analyze/:id', to: 'properties#analyze'
  get '/videochat', to: 'sessions#show'
  # get '/signup', to: 'users#new'
end
