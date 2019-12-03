Rails.application.routes.draw do
  get 'api/profile/:id', to: 'profile#show'
  put 'api/profile/:id', to: 'profile#update_bio'

  get 'profile/:id', to: 'profile#view'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
