/**
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
 */

import { Link } from "@material-ui/core";

const UNKNOWN_VALUE = "unknown";

const tryParseFloat = (value) => {
  if (
    value === null ||
    value === undefined ||
    value === UNKNOWN_VALUE
  ) {
    return null;
  }
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}

const tryParseInteger = (value) => {
  if (
    value === null ||
    value === undefined ||
    value === UNKNOWN_VALUE
  ) {
    return null;
  }
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}

const formatString = (value) => {
  if (
    value === null ||
    value === undefined ||
    value === UNKNOWN_VALUE
  ) {
    return "?"
  }
  return value;
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
          const { url, name } = planet;
          if (
            url === null ||
            url === undefined
          ) {
            return name || "?";
          }
          return (
            <Link
              target="_blank"
              href={url}
            >
              {name}
            </Link>
          )
        },
      },
      climate: {
        title: "Climate",
        formatData: (planet) => {
          return formatString(planet.climate)
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
          return formatString(planet.terrain);
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