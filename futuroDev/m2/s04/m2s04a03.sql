--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

-- Started on 2024-07-15 17:37:00

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
-- TOC entry 216 (class 1259 OID 16421)
-- Name: clientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clientes (
    cliente_id integer NOT NULL,
    nome character varying(50),
    cidade character varying(50),
    idade integer
);


ALTER TABLE public.clientes OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16420)
-- Name: clientes_cliente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clientes_cliente_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.clientes_cliente_id_seq OWNER TO postgres;

--
-- TOC entry 4833 (class 0 OID 0)
-- Dependencies: 215
-- Name: clientes_cliente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clientes_cliente_id_seq OWNED BY public.clientes.cliente_id;


--
-- TOC entry 224 (class 1259 OID 16475)
-- Name: itens_pedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.itens_pedidos (
    item_id integer NOT NULL,
    pedido_id integer,
    produto_id integer,
    quantidade integer
);


ALTER TABLE public.itens_pedidos OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16474)
-- Name: itens_pedidos_item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.itens_pedidos_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.itens_pedidos_item_id_seq OWNER TO postgres;

--
-- TOC entry 4834 (class 0 OID 0)
-- Dependencies: 223
-- Name: itens_pedidos_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.itens_pedidos_item_id_seq OWNED BY public.itens_pedidos.item_id;


--
-- TOC entry 218 (class 1259 OID 16428)
-- Name: pedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pedidos (
    pedido_id integer NOT NULL,
    cliente_id integer,
    data_pedido date,
    valor numeric(10,2)
);


ALTER TABLE public.pedidos OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16427)
-- Name: pedidos_pedido_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pedidos_pedido_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pedidos_pedido_id_seq OWNER TO postgres;

--
-- TOC entry 4835 (class 0 OID 0)
-- Dependencies: 217
-- Name: pedidos_pedido_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pedidos_pedido_id_seq OWNED BY public.pedidos.pedido_id;


--
-- TOC entry 220 (class 1259 OID 16440)
-- Name: perfis_clientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.perfis_clientes (
    perfil_id integer NOT NULL,
    cliente_id integer,
    biografia text
);


ALTER TABLE public.perfis_clientes OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16439)
-- Name: perfis_clientes_perfil_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.perfis_clientes_perfil_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.perfis_clientes_perfil_id_seq OWNER TO postgres;

--
-- TOC entry 4836 (class 0 OID 0)
-- Dependencies: 219
-- Name: perfis_clientes_perfil_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.perfis_clientes_perfil_id_seq OWNED BY public.perfis_clientes.perfil_id;


--
-- TOC entry 222 (class 1259 OID 16468)
-- Name: produtos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produtos (
    produto_id integer NOT NULL,
    nome_produto character varying(100),
    preco numeric(10,2)
);


ALTER TABLE public.produtos OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16467)
-- Name: produtos_produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.produtos_produto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.produtos_produto_id_seq OWNER TO postgres;

--
-- TOC entry 4837 (class 0 OID 0)
-- Dependencies: 221
-- Name: produtos_produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.produtos_produto_id_seq OWNED BY public.produtos.produto_id;


--
-- TOC entry 4654 (class 2604 OID 16424)
-- Name: clientes cliente_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clientes ALTER COLUMN cliente_id SET DEFAULT nextval('public.clientes_cliente_id_seq'::regclass);


--
-- TOC entry 4658 (class 2604 OID 16478)
-- Name: itens_pedidos item_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.itens_pedidos ALTER COLUMN item_id SET DEFAULT nextval('public.itens_pedidos_item_id_seq'::regclass);


--
-- TOC entry 4655 (class 2604 OID 16431)
-- Name: pedidos pedido_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos ALTER COLUMN pedido_id SET DEFAULT nextval('public.pedidos_pedido_id_seq'::regclass);


--
-- TOC entry 4656 (class 2604 OID 16443)
-- Name: perfis_clientes perfil_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.perfis_clientes ALTER COLUMN perfil_id SET DEFAULT nextval('public.perfis_clientes_perfil_id_seq'::regclass);


--
-- TOC entry 4657 (class 2604 OID 16471)
-- Name: produtos produto_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos ALTER COLUMN produto_id SET DEFAULT nextval('public.produtos_produto_id_seq'::regclass);


--
-- TOC entry 4819 (class 0 OID 16421)
-- Dependencies: 216
-- Data for Name: clientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clientes (cliente_id, nome, cidade, idade) FROM stdin;
1	Alice	São Paulo	30
2	Bob	Rio de Janeiro	25
3	Carlos	Belo Horizonte	35
4	Diana	Curitiba	28
\.


--
-- TOC entry 4827 (class 0 OID 16475)
-- Dependencies: 224
-- Data for Name: itens_pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.itens_pedidos (item_id, pedido_id, produto_id, quantidade) FROM stdin;
1	1	1	1
2	1	2	2
3	2	2	1
4	3	3	3
\.


--
-- TOC entry 4821 (class 0 OID 16428)
-- Dependencies: 218
-- Data for Name: pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pedidos (pedido_id, cliente_id, data_pedido, valor) FROM stdin;
1	1	2023-06-01	150.50
2	2	2023-06-02	200.00
3	\N	2023-06-04	50.00
4	1	2023-06-01	50.50
5	1	2023-06-02	220.00
\.


--
-- TOC entry 4823 (class 0 OID 16440)
-- Dependencies: 220
-- Data for Name: perfis_clientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.perfis_clientes (perfil_id, cliente_id, biografia) FROM stdin;
1	1	Alice é uma entusiasta de tecnologia.
2	2	Bob gosta de viajar e conhecer novas culturas.
3	3	Carlos é um amante de esportes e fitness.
\.


--
-- TOC entry 4825 (class 0 OID 16468)
-- Dependencies: 222
-- Data for Name: produtos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produtos (produto_id, nome_produto, preco) FROM stdin;
1	Notebook	1500.00
2	Smartphone	800.00
3	Tablet	600.00
\.


--
-- TOC entry 4838 (class 0 OID 0)
-- Dependencies: 215
-- Name: clientes_cliente_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clientes_cliente_id_seq', 4, true);


--
-- TOC entry 4839 (class 0 OID 0)
-- Dependencies: 223
-- Name: itens_pedidos_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.itens_pedidos_item_id_seq', 4, true);


--
-- TOC entry 4840 (class 0 OID 0)
-- Dependencies: 217
-- Name: pedidos_pedido_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pedidos_pedido_id_seq', 5, true);


--
-- TOC entry 4841 (class 0 OID 0)
-- Dependencies: 219
-- Name: perfis_clientes_perfil_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.perfis_clientes_perfil_id_seq', 3, true);


--
-- TOC entry 4842 (class 0 OID 0)
-- Dependencies: 221
-- Name: produtos_produto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produtos_produto_id_seq', 3, true);


--
-- TOC entry 4660 (class 2606 OID 16426)
-- Name: clientes clientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (cliente_id);


--
-- TOC entry 4670 (class 2606 OID 16480)
-- Name: itens_pedidos itens_pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.itens_pedidos
    ADD CONSTRAINT itens_pedidos_pkey PRIMARY KEY (item_id);


--
-- TOC entry 4662 (class 2606 OID 16433)
-- Name: pedidos pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (pedido_id);


--
-- TOC entry 4664 (class 2606 OID 16449)
-- Name: perfis_clientes perfis_clientes_cliente_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.perfis_clientes
    ADD CONSTRAINT perfis_clientes_cliente_id_key UNIQUE (cliente_id);


--
-- TOC entry 4666 (class 2606 OID 16447)
-- Name: perfis_clientes perfis_clientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.perfis_clientes
    ADD CONSTRAINT perfis_clientes_pkey PRIMARY KEY (perfil_id);


--
-- TOC entry 4668 (class 2606 OID 16473)
-- Name: produtos produtos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_pkey PRIMARY KEY (produto_id);


--
-- TOC entry 4673 (class 2606 OID 16481)
-- Name: itens_pedidos itens_pedidos_pedido_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.itens_pedidos
    ADD CONSTRAINT itens_pedidos_pedido_id_fkey FOREIGN KEY (pedido_id) REFERENCES public.pedidos(pedido_id);


--
-- TOC entry 4674 (class 2606 OID 16486)
-- Name: itens_pedidos itens_pedidos_produto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.itens_pedidos
    ADD CONSTRAINT itens_pedidos_produto_id_fkey FOREIGN KEY (produto_id) REFERENCES public.produtos(produto_id);


--
-- TOC entry 4671 (class 2606 OID 16434)
-- Name: pedidos pedidos_cliente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(cliente_id);


--
-- TOC entry 4672 (class 2606 OID 16450)
-- Name: perfis_clientes perfis_clientes_cliente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.perfis_clientes
    ADD CONSTRAINT perfis_clientes_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(cliente_id);


-- Completed on 2024-07-15 17:37:00

--
-- PostgreSQL database dump complete
--

