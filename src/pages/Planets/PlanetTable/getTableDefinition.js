/**
 * 
    The planet's name
        The name should be a link that, when clicked, opens the planet's API URL in a new window
    The planet's climate
    How many residents the planet has
    The terrains found on the planet
    The population
    The surface area (in km2) covered by water
        Assume that all planets are perfect spheres.
        The radius of a sphere is half its diameter.
        The value of surface_water from the API is a percentage, so a value of 50 means the planet is 50% covered in water.
        Round these values to the nearest integer value.
	--
		"name": "Tatooine", 
    "rotation_period": "23", 
    "orbital_period": "304", 
    "diameter": "10465", 
    "climate": "arid", 
    "gravity": "1 standard", 
    "terrain": "desert", 
    "surface_water": "1", 
    "population": "200000", 
    "residents": [
        "http://swapi.dev/api/people/1/", 
        "http://swapi.dev/api/people/2/", 
        "http://swapi.dev/api/people/4/", 
        "http://swapi.dev/api/people/6/", 
        "http://swapi.dev/api/people/7/", 
        "http://swapi.dev/api/people/8/", 
        "http://swapi.dev/api/people/9/", 
        "http://swapi.dev/api/people/11/", 
        "http://swapi.dev/api/people/43/", 
        "http://swapi.dev/api/people/62/"
    ], 
    "films": [
        "http://swapi.dev/api/films/1/", 
        "http://swapi.dev/api/films/3/", 
        "http://swapi.dev/api/films/4/", 
        "http://swapi.dev/api/films/5/", 
        "http://swapi.dev/api/films/6/"
    ], 
    "created": "2014-12-09T13:50:49.641000Z", 
    "edited": "2014-12-20T20:58:18.411000Z", 
    "url": "http://swapi.dev/api/planets/1/"
 */

const tryParseFloat = (value) => {
  if (value === null || value === undefined) {
    return null;
  }
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}

const tryParseInteger = (value) => {
  if (value === null || value === undefined) {
    return null;
  }
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}

const getTableDefinition = () => {
  return {
    getRowKey: (planet) => {
      return planet.created;
    },
    columns: {
      name: {
        title: "Name",
        formatData: (planet) => {
          return planet.name || "?";
        },
      },
      climate: {
        title: "Climate",
        formatData: (planet) => {
          return planet.climate || "?"
        }
      },
      numResidents: {
        title: "Number of Residents",
        formatData: (planet) => {
          if (
            !planet.residents ||
            !Array.isArray(planet.residents)
          ) {
            return "?";
          }
          return planet.residents.length;
        }
      },
      terrains: {
        title: "Terrain(s)",
        formatData: (planet) => {
          return planet.terrain || "?";
        }
      },
      population: {
        title: "Population",
        formatData: (planet) => {
          const populationInteger = tryParseInteger(
            planet.population
          );
          return typeof populationInteger === "number"
            ? populationInteger
            : "?";
        }
      },
      surfaceWater: {
        title: "Surface Water (km2)",
        formatData: (planet) => {
          const { diameter, surface_water } = planet;
          const diameterFloat = tryParseFloat(diameter);
          const surfaceWaterFloat = tryParseFloat(surface_water);
          if (
            typeof diameterFloat !== "number" || 
            typeof surfaceWaterFloat !== "number"
          ) {
            return "?"
          }
          const totalSurfaceArea =
            Math.PI * diameterFloat * diameterFloat;
          return Math.round(
            totalSurfaceArea * (surfaceWaterFloat / 100)
          );
        }
      }
    }
  };
}

export default getTableDefinition;