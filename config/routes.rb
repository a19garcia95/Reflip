Rails.application.routes.draw do

  get 'periods/new'

  root 'properties#index' #this is the real root!!!


  resources :researches
  # root 'researches#index' #this root is just for testing Stripe payments
  get 'research', to: 'researches#index', as: 'extensive'
  resources :charges, only: [:create]




  match '/contacts',     to: 'contacts#new',             via: 'get'
  resources "contacts", only: [:new, :create]

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
  get '/analyze/:id', to: 'properties#analyze', as: 'analyze'
  get '/videochat', to: 'sessions#show'
  # get '/signup', to: 'users#new'

  get '/googlemap', to: 'properties#google_satellite_view'
end
