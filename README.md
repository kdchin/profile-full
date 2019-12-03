# Profile Code: Final React & Rails
Integrated React frontend (from [here](https://github.com/kdchin/profile-frontend)) into Rails project

### Running the Project
```
bundle update
bundle install

rails webpacker:install
rails webpacker:install:react
rails generate react:install

rails db:migrate
rails db:seed
rails server
```

### Important files
```
app/javascript/components/Profile.js
app/javascript/api.js
app/views/profile/view.html.erb
app/controllers/profile_controller.rb
app/serializers/profile_serializer.rb
config/routes.rb
```