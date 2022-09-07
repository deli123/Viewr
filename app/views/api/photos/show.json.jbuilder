json.extract! @photo, :id, :title, :description, :user_id, :album_id
json.photo_url @photo.photo.url if @photo.photo.attached?
