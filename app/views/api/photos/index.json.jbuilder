@photos.each do |photo|
    json.set! photo.id do 
        json.extract! photo, :id, :title, :description, :user_id, :album_id
        if photo.photo.attached?
            json.photo_url photo.photo.url
        end
    end
end
