defmodule LearntList.Api.LearntItem do
  @moduledoc """
  Learnt Item model
  """
  use Ecto.Schema
  import Ecto.Changeset

  schema "learnt_items" do
    field :description, :string
    field :title, :string
    field :url, :string
    field :wikidata_id, :string

    timestamps()
  end

  @doc false
  def changeset(learnt_item, attrs) do
    learnt_item
    |> cast(attrs, [:title, :description, :url, :wikidata_id])
    |> validate_required([:title, :url])
    |> unique_constraint([:url, :wikidata_id])
  end
end
