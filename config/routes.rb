Rails.application.routes.draw do
  root "guide#index"

  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :guide
  resources :review

  namespace :api do
    namespace :v1 do
      resources :guides do
        collection do
          get 'search'
        end
      end
    end
  end
end
