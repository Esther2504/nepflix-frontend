import React from 'react'
import { GridContainer, Card } from './GridLayout.styled'

export default function GridLayout() {
  // Tijdelijk voor demo
let img = "https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg?resize=1088%2C612&crop_strategy=smart"
let title = "Spiderman"

  return (
    <GridContainer>
      {/* Cards tijdelijk voor demo */}
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={img} />
          <span>{title}</span>
        </Card>
    </GridContainer>
  )
}
