import * as yup from "yup";

/**
  name string -- The name of this planet.
  diameter string -- The diameter of this planet in kilometers.
  rotation_period string -- The number of standard hours it takes for this planet to complete a single rotation on its axis.
  orbital_period string -- The number of standard days it takes for this planet to complete a single orbit of its local star.
  gravity string -- A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
  population string -- The average population of sentient beings inhabiting this planet.
  climate string -- The climate of this planet. Comma separated if diverse.
  terrain string -- The terrain of this planet. Comma separated if diverse.
  surface_water string -- The percentage of the planet surface that is naturally occurring water or bodies of water.
  residents array -- An array of People URL Resources that live on this planet.
  films array -- An array of Film URL Resources that this planet has appeared in.
  url string -- the hypermedia URL of this resource.
  created string -- the ISO 8601 date format of the time that this resource was created.
  edited string -- the ISO 8601 date format of the time that this resource was edited.
*/

const responseSchema = yup.object().shape({
  results: yup.array().of(
    yup.object().shape({
      created: yup.string().required(),
      name: yup.string().required(),
      diameter: yup.string().required(),
      climate: yup.string().required(),
      terrain: yup.string().required(),
      population: yup.string().required(),
      residents: yup.array().of(
        yup.string()
      ).required(),
      surface_water: yup.string().required(),
      url: yup.string().required()
    })
  ).required()
});

const validateResponse = (response) => {
  return responseSchema.isValidSync(
    response
  );
}

export default validateResponse;