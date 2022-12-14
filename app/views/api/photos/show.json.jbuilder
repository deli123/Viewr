json.photo do
  json.extract! @photo,
                :id,
                :title,
                :description,
                :user_id,
                :album_id,
                :created_at
  json.photo_url @photo.photo.url if @photo.photo.attached?
end

json.user { json.extract! @photo.user, :id, :fname, :lname, :username, :created_at }

json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :author_id, :photo_id, :updated_at
      json.extract! comment.author, :fname, :lname
    end
  end
end

json.likes { json.extract! @likes, :count, :liked, :id, :photo_id }

json.tags do
  @photo.tags.each do |tag|
    json.set! tag.id do
      json.extract! tag, :id, :body, :photo_id
    end
  end
end
