json.photo do 
    json.extract! @photo, :id, :title, :description, :user_id, :album_id
    json.photo_url @photo.photo.url if @photo.photo.attached?
end

json.user do 
    json.extract! @photo.user, :id, :fname, :lname
end