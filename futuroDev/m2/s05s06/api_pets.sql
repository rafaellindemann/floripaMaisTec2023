toc.dat                                                                                             0000600 0004000 0002000 00000010730 14646113011 0014435 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP   5                    |            api_pets    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    16442    api_pets    DATABASE        CREATE DATABASE api_pets WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE api_pets;
                postgres    false         �            1259    16458    pets    TABLE     �   CREATE TABLE public.pets (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    idade integer NOT NULL,
    raca character varying(30) NOT NULL,
    tipo character varying(30) NOT NULL,
    responsavel character varying(50)
);
    DROP TABLE public.pets;
       public         heap    postgres    false         �            1259    16457    pets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.pets_id_seq;
       public          postgres    false    216         �           0    0    pets_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.pets_id_seq OWNED BY public.pets.id;
          public          postgres    false    215         �            1259    16472    vacinas    TABLE     �   CREATE TABLE public.vacinas (
    id integer NOT NULL,
    nome character varying(30) NOT NULL,
    descricao character varying(200) NOT NULL,
    dose integer NOT NULL
);
    DROP TABLE public.vacinas;
       public         heap    postgres    false         �            1259    16471    vacinas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vacinas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.vacinas_id_seq;
       public          postgres    false    218         �           0    0    vacinas_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.vacinas_id_seq OWNED BY public.vacinas.id;
          public          postgres    false    217         U           2604    16461    pets id    DEFAULT     b   ALTER TABLE ONLY public.pets ALTER COLUMN id SET DEFAULT nextval('public.pets_id_seq'::regclass);
 6   ALTER TABLE public.pets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216         V           2604    16475 
   vacinas id    DEFAULT     h   ALTER TABLE ONLY public.vacinas ALTER COLUMN id SET DEFAULT nextval('public.vacinas_id_seq'::regclass);
 9   ALTER TABLE public.vacinas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218         �          0    16458    pets 
   TABLE DATA           H   COPY public.pets (id, nome, idade, raca, tipo, responsavel) FROM stdin;
    public          postgres    false    216       4843.dat �          0    16472    vacinas 
   TABLE DATA           <   COPY public.vacinas (id, nome, descricao, dose) FROM stdin;
    public          postgres    false    218       4845.dat �           0    0    pets_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.pets_id_seq', 10, true);
          public          postgres    false    215         �           0    0    vacinas_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.vacinas_id_seq', 2, true);
          public          postgres    false    217         X           2606    16463    pets pets_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.pets
    ADD CONSTRAINT pets_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.pets DROP CONSTRAINT pets_pkey;
       public            postgres    false    216         Z           2606    16477    vacinas vacinas_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.vacinas
    ADD CONSTRAINT vacinas_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.vacinas DROP CONSTRAINT vacinas_pkey;
       public            postgres    false    218                                                4843.dat                                                                                            0000600 0004000 0002000 00000000540 14646113011 0014250 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Bilu	14	Caramelo	Cachorro	Pai de pet
2	Sansa	5	Fofa	Gata	Papai
3	Barbie	3	Folgada	Gata	Princesa
4	Petiço	30	Petiço	Cavalo	Mundo
5	Petiço2	302	Petiço2	Cavalo2	Mundo2
6	kkkk	302	Petiço2	Cavalo2	Mundo2
7	gggg	302	Petiço2	Cavalo2	Mundo2
8	um	302	Petiço2	Cavalo2	Mundo2
9	dois	302	Petiço2	Cavalo2	Mundo2
10	quatro	302	Petiço2	Cavalo2	Mundo2
\.


                                                                                                                                                                4845.dat                                                                                            0000600 0004000 0002000 00000000177 14646113011 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Vacina anti-pulga	Vacina para acabar com as pulgas por meia hora	3
2	Vacina anti-sujeira	Aplicar esta vacina no banho	1
\.


                                                                                                                                                                                                                                                                                                                                                                                                 restore.sql                                                                                         0000600 0004000 0002000 00000010255 14646113011 0015364 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE api_pets;
--
-- Name: api_pets; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE api_pets WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';


ALTER DATABASE api_pets OWNER TO postgres;

\connect api_pets

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pets (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    idade integer NOT NULL,
    raca character varying(30) NOT NULL,
    tipo character varying(30) NOT NULL,
    responsavel character varying(50)
);


ALTER TABLE public.pets OWNER TO postgres;

--
-- Name: pets_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pets_id_seq OWNER TO postgres;

--
-- Name: pets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pets_id_seq OWNED BY public.pets.id;


--
-- Name: vacinas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vacinas (
    id integer NOT NULL,
    nome character varying(30) NOT NULL,
    descricao character varying(200) NOT NULL,
    dose integer NOT NULL
);


ALTER TABLE public.vacinas OWNER TO postgres;

--
-- Name: vacinas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vacinas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.vacinas_id_seq OWNER TO postgres;

--
-- Name: vacinas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vacinas_id_seq OWNED BY public.vacinas.id;


--
-- Name: pets id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pets ALTER COLUMN id SET DEFAULT nextval('public.pets_id_seq'::regclass);


--
-- Name: vacinas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vacinas ALTER COLUMN id SET DEFAULT nextval('public.vacinas_id_seq'::regclass);


--
-- Data for Name: pets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pets (id, nome, idade, raca, tipo, responsavel) FROM stdin;
\.
COPY public.pets (id, nome, idade, raca, tipo, responsavel) FROM '$$PATH$$/4843.dat';

--
-- Data for Name: vacinas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vacinas (id, nome, descricao, dose) FROM stdin;
\.
COPY public.vacinas (id, nome, descricao, dose) FROM '$$PATH$$/4845.dat';

--
-- Name: pets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pets_id_seq', 10, true);


--
-- Name: vacinas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vacinas_id_seq', 2, true);


--
-- Name: pets pets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pets
    ADD CONSTRAINT pets_pkey PRIMARY KEY (id);


--
-- Name: vacinas vacinas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vacinas
    ADD CONSTRAINT vacinas_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   