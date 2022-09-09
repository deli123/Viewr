class Comment < ApplicationRecord
    validates :body, :author_id, :photo_id, presence: true

    belongs_to :photo

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
