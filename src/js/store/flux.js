const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      charactersLiked: [],
      planets: [],
      planetsLiked: [],
      vehicles: [],
      vehiclesLiked: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      products: [
        {
          name: "Pedro",
          phone: "8486851515",
          email: "ppp@asdasd.com",
          address: "calle 123",
          id: 1,
        },
      ],

      titulo: [],
      agendaname: [],
      agendas: [],
      editedproduct: [],
    },

    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					  fetch().then().then(data => setStore({ "foo": data.bar }))
				  */
        const store = getStore();

        fetch("https://swapi.info/api/people")
        .then((response) => response.json())
        .then((data) => {
          setStore((prevState) => ({ ...prevState, characters: data.results }));
          console.log(store.characters);
        })
        .catch((error) => console.error(error));
      
      fetch("https://swapi.info/api/planets")
        .then((response) => response.json())
        .then((data) => {
          setStore((prevState) => ({ ...prevState, planets: data.results }));
          console.log(store.planets);
        })
        .catch((error) => console.error(error));
      
      fetch("https://swapi.info/api/vehicles")
        .then((response) => response.json())
        .then((data) => {
          setStore((prevState) => ({ ...prevState, vehicles: data.results }));
          console.log(store.vehicles);
        })
        .catch((error) => console.error(error)); // Log the API error (if any) to your console
      },
      ////////////////////////////  ADD FAVORITES  ////////////////////////////

      favoriteLiked: (characterName) => {
        const store = getStore();

        if (store.charactersLiked.includes(characterName)) {
          setStore({
            charactersLiked: store.charactersLiked.filter(
              (elemento) => elemento != characterName
            ),
          });
        } else
          setStore({
            charactersLiked: [...store.charactersLiked, characterName],
          });
      },

      ////////////////////////////  DELETE FAVORITES  ////////////////////////////

      deleteFavorite: (characterName) => {
        const store = getStore();

        setStore({
          charactersLiked: store.charactersLiked.filter(
            (elemento) => elemento != characterName
          ),
        });
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      ////////////////////////////  CREACION DE OBJETOS NUEVOS  ////////////////////////////

      printText: () => {},
      eliminar: (editedproduct) => {
        const store = getStore();
        const requestOptions = {
          method: "DELETE",
          redirect: "follow",
        };

        fetch(
          `https://playground.4geeks.com/contact/agendas/${store.titulo}/contacts/${editedproduct.id}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            getActions().getProducts();
          })
          .catch((error) => console.error(error));
      },
      putedit: (editedproduct) => {
        const store = getStore();
        console.log("editando");
        setStore({ editedproduct: store.products });
        console.log("data:", editedproduct);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          name: editedproduct.name,
          phone: editedproduct.phone,
          email: editedproduct.email,
          address: editedproduct.address,
          id: 33,
        });

        const requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          `https://playground.4geeks.com/contact/agendas/${store.titulo}/contacts/${editedproduct.id}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            getActions().getProducts();
          })
          .catch((error) => console.error(error));
      },
      createAgenda: (newuser) => {
        console.log("Agenda creada");
        const requestOptions = {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify({}),
        };

        fetch(
          `https://playground.4geeks.com/contact/agendas/${newuser}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            setStore({ titulo: newuser });
          })
          .catch((error) => console.error(error));
      },
      deleteAgenda: (user) => {
        console.log("borrando agenda");
        const requestOptions = {
          method: "DELETE",
          redirect: "follow",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify({}),
        };

        fetch(
          `https://playground.4geeks.com/contact/agendas/${user}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            console.log(`se borro ${user}`);
          })
          .catch((error) => console.error(error));
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
        console.log("cargando !");
      },
      getProducts: () => {
        const store = getStore();
        console.log("cargando contactos");
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(
          `https://playground.4geeks.com/contact/agendas/${store.titulo}/contacts`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ products: result.contacts });
          })
          .catch((error) => console.error(error));
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getAgendas: () => {
        console.log("getAgendas");
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch("https://playground.4geeks.com/contact/agendas", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.agendas);
            setStore({ agendas: data.agendas });
          })
          .catch((error) => console.error(error));
      },
      postProduct: (titulo, data) => {
        console.log("agenda name:", titulo);
        console.log("data", data);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(data);

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          `https://playground.4geeks.com/contact/agendas/${titulo}/contacts`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
      },
    },
  };
};

export default getState;
