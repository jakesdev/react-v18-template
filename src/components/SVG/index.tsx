import './Player.scss'


interface SVG {
  data: string;
  width: string;
  height: string;
}
function SVG(props: SVG) {

  return (
    <div className="svg">
      { props.data }
    </div>
  )
}

export default SVG
