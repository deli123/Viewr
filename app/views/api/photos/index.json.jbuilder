@photos.each do |photo|
    json.set! photo.id do 
        json.extract! photo, :id, :title, :description, :user_id, :album_id, :created_at
        if photo.photo.attached?
            json.photo_url photo.photo.url
        end
        json.extract! photo.user, :fname, :lname
        json.likes photo.likes.count
        json.liked Like.where("user_id = ? AND photo_id = ?", @user, photo.id).count != 0 ? true : false
        json.like_id Like.where("user_id = ? AND photo_id = ?", @user, photo.id).pluck(:id)[0]
    end
end
