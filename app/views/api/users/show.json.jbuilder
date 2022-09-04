json.user do
  json.extract! @user, :id, :fname, :lname, :about, :username, :email, :created_at, :updated_at
end