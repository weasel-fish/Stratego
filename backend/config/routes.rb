Rails.application.routes.draw do
  resources :testgames
  resources :users
  resources :tests

  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
