const GET_LANDING_PAGE = /* GraphQL */ `
fragment logo on LandingPage {
  logo {
    alternativeText
    url
  }
}

fragment header on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    image {
      alternativeText
      url
    }
  }
}

fragment sectionAboutProject on LandingPage {
  sectionAboutProject {
    title
    description
    image {
      alternativeText
      url
    }
  }
}

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      title
      icon {
        name
        alternativeText
        url
      }
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      title
    }
  }
}

fragment sectionModules on LandingPage {
  sectionModules {
    title
    modules {
      title
      subtitle
      description
    }
  }
}

fragment pricingBox on LandingPage {
  pricingBox {
    totalPrice
    numberInstallments
    priceInstallments
    benefits
    button {
      label
      url
    }
  }
}

fragment sectionAboutUs on LandingPage {
  sectionAboutUs {
    title
    authors {
      photo {
        url
      }
      name
      role
      socialLinks {
        title
        url
      }
      description
    }
  }
}

query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
    ...sectionAboutProject
    ...sectionTech
    ...sectionConcepts
    ...sectionModules
    ...pricingBox
    ...sectionAboutUs
  }
}

`

export default GET_LANDING_PAGE
