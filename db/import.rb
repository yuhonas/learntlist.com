require 'uri'
require 'httparty'
require 'csv'

ARGF.readlines.each_with_index do |line, index|
  line.strip!

  begin
    uri = URI(line)
    path = uri.path.split('/').last

    result = HTTParty.get(
      "https://en.wikipedia.org/w/api.php?action=query&prop=pageprops&titles=#{path}&format=json",
      { headers: {"User-Agent" => "LearntList Crawler 1.0" } }
    )

    wiki_id = result["query"]["pages"].to_a[0][1].dig('pageprops','wikibase_item')
    puts "#{uri},#{path},#{wiki_id}"

  rescue URI::InvalidURIError
    puts "#{line},,"
  end

  STDOUT.flush
end


