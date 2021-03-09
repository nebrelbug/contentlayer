import { footer_text } from '@sourcebit/types'
import React, { FC } from 'react'
import { Link, markdownify, withPrefix } from '../utils'

const FooterText: FC<{ section: footer_text }> = ({ section }) => (
  <section className="cell widget widget-text">
    {section.image &&
      (section.image_url ? (
        <Link className="widget-image" href={withPrefix(section.image_url)}>
          <img src={withPrefix(section.image)} alt={section.image_alt} />
        </Link>
      ) : (
        <p className="widget-image">
          <img src={withPrefix(section.image)} alt={section.image_alt} />
        </p>
      ))}
    {section.title && <h2 className="widget-title">{section.title}</h2>}
    {markdownify(section.content)}
  </section>
)

export default FooterText
