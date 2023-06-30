// character image
// base stats
// description
// name

export default function Overview( { character } ) {
  return <div class="overview">
  {character.name}
  {character.iamge}
  {character.class}
  {character.level}
</div>
}