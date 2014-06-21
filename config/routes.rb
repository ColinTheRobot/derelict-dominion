Rails.application.routes.draw do
  root to: "lots#index"
  devise_for :users
  resources :users
  resources :lots
end
