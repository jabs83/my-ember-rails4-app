EmberRails4App::Application.routes.draw do
  resources :posts, except: :new
  root :to => 'assets#index'
  # get "assets/index"
end
