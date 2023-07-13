(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(id: string) {
    console.log({ id });
  }

  //   recomendación en fuinciones siempre tratar de limitarse a 3 parametros como maximo.

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  // Crear una película
  function CreateMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor

  //   function checkFullName(fullName: string) {
  //     console.log({ fullName });
  //     return true;
  //   }

  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor", birthdate);
    return true;
  }

  //   continuación con nuevos ejemplos

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;

    // if (isRetired) {
    //   return 3000;
    // } else {
    //   return 4000;
    // }
  };
})();
