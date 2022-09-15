json.user do
  json.extract! @user, :id, :fname, :lname, :about, :username, :email, :created_at, :updated_at
end

json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :title, :user_id
      json.extract! photo.user, :fname, :lname, :username, :created_at
      json.photo_url photo.photo.url if photo.photo.attached?
    end
  end
end