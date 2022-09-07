class Photo < ApplicationRecord
  validates :user_id, presence: true
  validates :id, uniqueness: { scope: :album_id }

  has_one_attached :photo

  belongs_to :user
end
