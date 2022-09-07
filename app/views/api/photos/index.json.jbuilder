json.array! @photos do |photo|
    json.extract! photo, :id, :title, :description, :user_id, :album_id
    if photo.photo.attached?
        json.photo_url photo.photo.url
    end
end