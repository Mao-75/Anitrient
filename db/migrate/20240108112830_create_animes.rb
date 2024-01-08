class CreateAnimes < ActiveRecord::Migration[7.0]
  def change
    create_table :animes do |t|
      t.string :title
      t.string :media
      t.integer :season_year
      t.string :season_name
      t.string :official_site_url
      t.integer :episodes_count
      t.string :twitter_bigger_avatar_url
      t.timestamps
    end
  end
end
