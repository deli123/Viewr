Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:show, :create, :destroy]
    resources :photos, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:create, :update, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :tags, only: [:create, :destroy]
  end


  get '*path', to: "static_pages#frontend_index"
end
