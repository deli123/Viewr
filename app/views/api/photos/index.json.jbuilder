json.photos do
  @photos.each do |photo|
    json.set! photo.id do
      json.extract! photo,
                    :id,
                    :title,
                    :description,
                    :user_id,
                    :album_id,
                    :created_at
      json.photo_url photo.photo.url if photo.photo.attached?
      json.extract! photo.user, :fname, :lname, :username, :created_at
      json.likes photo.likes.count
      json.liked(
        if Like.where("user_id = ? AND photo_id = ?", @user, photo.id).count !=
             0
          true
        else
          false
        end
      )
      json.like_id Like.where(
                     "user_id = ? AND photo_id = ?",
                     @user,
                     photo.id
                   ).pluck(:id)[
                     0
                   ]
    end
  end
end
