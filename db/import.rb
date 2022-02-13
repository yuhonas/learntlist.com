#
require 'aws-sdk-dynamodb'

dynamodb = Aws::DynamoDB::Client.new

if ARGV.empty?
  puts "Error: Please provide the table name you'd like to import too eg ./#{__FILE__} <table_name>"
  exit 1
end

table_name = ARGV.first.strip

STDIN.readlines.each do |line|
  line.strip!

  STDERR.puts "- Importing '#{line}' into '#{table_name}'"

  dynamodb.put_item({
    table_name: table_name,
    item: {
      'id' => line.to_s.strip
    }
  })
end


