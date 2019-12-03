Rails.application.routes.draw do
  get 'profile/:id', to: 'profile#show'
  put 'profile/:id', to: 'profile#update_bio'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
