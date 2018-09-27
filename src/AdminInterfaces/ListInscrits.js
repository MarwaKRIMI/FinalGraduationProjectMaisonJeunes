import React from 'react';
import { MDBDataTable } from 'mdbreact';
import './Listinscrits.css'
import Example from '../Example'
const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Nom',
        field: 'nom',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Prénom',
        field: 'prenom',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Téléphone',
        field: 'tel',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Club',
        field: 'club',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Capacité',
        field: 'capacite',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Nombre actuel',
        field: 'actuel',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Supprimer',
        field: 'supprimer',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      },
      {
        nom: 'Marwa',
        prenom: 'KRIMI',
        tel: '2059',
        email:'marwa@gmail.com',
        age: '5',
        club: 'peinture',
        capacite:50,
        actuel:45,
        supprimer:<button>Supprimer</button>
      }
    ]
  };

  return (
    <div>
      <Example/>
    <MDBDataTable  style={{backgroundColor:'#f5fdb6',marginLeft:'1%',marginRight:'2%'}}
      striped
      bordered
      hover
      data={data}
    />
    </div>
  );
}

export default DatatablePage;