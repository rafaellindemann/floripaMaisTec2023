PGDMP                      |         	   m02s04a03    16.3    16.3 ,    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16419 	   m02s04a03    DATABASE     �   CREATE DATABASE m02s04a03 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE m02s04a03;
                postgres    false            �            1259    16421    clientes    TABLE     �   CREATE TABLE public.clientes (
    cliente_id integer NOT NULL,
    nome character varying(50),
    cidade character varying(50),
    idade integer
);
    DROP TABLE public.clientes;
       public         heap    postgres    false            �            1259    16420    clientes_cliente_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clientes_cliente_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.clientes_cliente_id_seq;
       public          postgres    false    216            �           0    0    clientes_cliente_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.clientes_cliente_id_seq OWNED BY public.clientes.cliente_id;
          public          postgres    false    215            �            1259    16475    itens_pedidos    TABLE     �   CREATE TABLE public.itens_pedidos (
    item_id integer NOT NULL,
    pedido_id integer,
    produto_id integer,
    quantidade integer
);
 !   DROP TABLE public.itens_pedidos;
       public         heap    postgres    false            �            1259    16474    itens_pedidos_item_id_seq    SEQUENCE     �   CREATE SEQUENCE public.itens_pedidos_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.itens_pedidos_item_id_seq;
       public          postgres    false    224            �           0    0    itens_pedidos_item_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.itens_pedidos_item_id_seq OWNED BY public.itens_pedidos.item_id;
          public          postgres    false    223            �            1259    16428    pedidos    TABLE     �   CREATE TABLE public.pedidos (
    pedido_id integer NOT NULL,
    cliente_id integer,
    data_pedido date,
    valor numeric(10,2)
);
    DROP TABLE public.pedidos;
       public         heap    postgres    false            �            1259    16427    pedidos_pedido_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pedidos_pedido_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.pedidos_pedido_id_seq;
       public          postgres    false    218            �           0    0    pedidos_pedido_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.pedidos_pedido_id_seq OWNED BY public.pedidos.pedido_id;
          public          postgres    false    217            �            1259    16440    perfis_clientes    TABLE     t   CREATE TABLE public.perfis_clientes (
    perfil_id integer NOT NULL,
    cliente_id integer,
    biografia text
);
 #   DROP TABLE public.perfis_clientes;
       public         heap    postgres    false            �            1259    16439    perfis_clientes_perfil_id_seq    SEQUENCE     �   CREATE SEQUENCE public.perfis_clientes_perfil_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.perfis_clientes_perfil_id_seq;
       public          postgres    false    220            �           0    0    perfis_clientes_perfil_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.perfis_clientes_perfil_id_seq OWNED BY public.perfis_clientes.perfil_id;
          public          postgres    false    219            �            1259    16468    produtos    TABLE     �   CREATE TABLE public.produtos (
    produto_id integer NOT NULL,
    nome_produto character varying(100),
    preco numeric(10,2)
);
    DROP TABLE public.produtos;
       public         heap    postgres    false            �            1259    16467    produtos_produto_id_seq    SEQUENCE     �   CREATE SEQUENCE public.produtos_produto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.produtos_produto_id_seq;
       public          postgres    false    222            �           0    0    produtos_produto_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.produtos_produto_id_seq OWNED BY public.produtos.produto_id;
          public          postgres    false    221            .           2604    16424    clientes cliente_id    DEFAULT     z   ALTER TABLE ONLY public.clientes ALTER COLUMN cliente_id SET DEFAULT nextval('public.clientes_cliente_id_seq'::regclass);
 B   ALTER TABLE public.clientes ALTER COLUMN cliente_id DROP DEFAULT;
       public          postgres    false    216    215    216            2           2604    16478    itens_pedidos item_id    DEFAULT     ~   ALTER TABLE ONLY public.itens_pedidos ALTER COLUMN item_id SET DEFAULT nextval('public.itens_pedidos_item_id_seq'::regclass);
 D   ALTER TABLE public.itens_pedidos ALTER COLUMN item_id DROP DEFAULT;
       public          postgres    false    224    223    224            /           2604    16431    pedidos pedido_id    DEFAULT     v   ALTER TABLE ONLY public.pedidos ALTER COLUMN pedido_id SET DEFAULT nextval('public.pedidos_pedido_id_seq'::regclass);
 @   ALTER TABLE public.pedidos ALTER COLUMN pedido_id DROP DEFAULT;
       public          postgres    false    218    217    218            0           2604    16443    perfis_clientes perfil_id    DEFAULT     �   ALTER TABLE ONLY public.perfis_clientes ALTER COLUMN perfil_id SET DEFAULT nextval('public.perfis_clientes_perfil_id_seq'::regclass);
 H   ALTER TABLE public.perfis_clientes ALTER COLUMN perfil_id DROP DEFAULT;
       public          postgres    false    219    220    220            1           2604    16471    produtos produto_id    DEFAULT     z   ALTER TABLE ONLY public.produtos ALTER COLUMN produto_id SET DEFAULT nextval('public.produtos_produto_id_seq'::regclass);
 B   ALTER TABLE public.produtos ALTER COLUMN produto_id DROP DEFAULT;
       public          postgres    false    221    222    222            �          0    16421    clientes 
   TABLE DATA           C   COPY public.clientes (cliente_id, nome, cidade, idade) FROM stdin;
    public          postgres    false    216   �2       �          0    16475    itens_pedidos 
   TABLE DATA           S   COPY public.itens_pedidos (item_id, pedido_id, produto_id, quantidade) FROM stdin;
    public          postgres    false    224   W3       �          0    16428    pedidos 
   TABLE DATA           L   COPY public.pedidos (pedido_id, cliente_id, data_pedido, valor) FROM stdin;
    public          postgres    false    218   �3       �          0    16440    perfis_clientes 
   TABLE DATA           K   COPY public.perfis_clientes (perfil_id, cliente_id, biografia) FROM stdin;
    public          postgres    false    220   �3       �          0    16468    produtos 
   TABLE DATA           C   COPY public.produtos (produto_id, nome_produto, preco) FROM stdin;
    public          postgres    false    222   j4       �           0    0    clientes_cliente_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.clientes_cliente_id_seq', 4, true);
          public          postgres    false    215            �           0    0    itens_pedidos_item_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.itens_pedidos_item_id_seq', 4, true);
          public          postgres    false    223            �           0    0    pedidos_pedido_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.pedidos_pedido_id_seq', 5, true);
          public          postgres    false    217            �           0    0    perfis_clientes_perfil_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.perfis_clientes_perfil_id_seq', 3, true);
          public          postgres    false    219            �           0    0    produtos_produto_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.produtos_produto_id_seq', 3, true);
          public          postgres    false    221            4           2606    16426    clientes clientes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (cliente_id);
 @   ALTER TABLE ONLY public.clientes DROP CONSTRAINT clientes_pkey;
       public            postgres    false    216            >           2606    16480     itens_pedidos itens_pedidos_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.itens_pedidos
    ADD CONSTRAINT itens_pedidos_pkey PRIMARY KEY (item_id);
 J   ALTER TABLE ONLY public.itens_pedidos DROP CONSTRAINT itens_pedidos_pkey;
       public            postgres    false    224            6           2606    16433    pedidos pedidos_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (pedido_id);
 >   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_pkey;
       public            postgres    false    218            8           2606    16449 .   perfis_clientes perfis_clientes_cliente_id_key 
   CONSTRAINT     o   ALTER TABLE ONLY public.perfis_clientes
    ADD CONSTRAINT perfis_clientes_cliente_id_key UNIQUE (cliente_id);
 X   ALTER TABLE ONLY public.perfis_clientes DROP CONSTRAINT perfis_clientes_cliente_id_key;
       public            postgres    false    220            :           2606    16447 $   perfis_clientes perfis_clientes_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.perfis_clientes
    ADD CONSTRAINT perfis_clientes_pkey PRIMARY KEY (perfil_id);
 N   ALTER TABLE ONLY public.perfis_clientes DROP CONSTRAINT perfis_clientes_pkey;
       public            postgres    false    220            <           2606    16473    produtos produtos_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_pkey PRIMARY KEY (produto_id);
 @   ALTER TABLE ONLY public.produtos DROP CONSTRAINT produtos_pkey;
       public            postgres    false    222            A           2606    16481 *   itens_pedidos itens_pedidos_pedido_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.itens_pedidos
    ADD CONSTRAINT itens_pedidos_pedido_id_fkey FOREIGN KEY (pedido_id) REFERENCES public.pedidos(pedido_id);
 T   ALTER TABLE ONLY public.itens_pedidos DROP CONSTRAINT itens_pedidos_pedido_id_fkey;
       public          postgres    false    218    224    4662            B           2606    16486 +   itens_pedidos itens_pedidos_produto_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.itens_pedidos
    ADD CONSTRAINT itens_pedidos_produto_id_fkey FOREIGN KEY (produto_id) REFERENCES public.produtos(produto_id);
 U   ALTER TABLE ONLY public.itens_pedidos DROP CONSTRAINT itens_pedidos_produto_id_fkey;
       public          postgres    false    224    4668    222            ?           2606    16434    pedidos pedidos_cliente_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(cliente_id);
 I   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_cliente_id_fkey;
       public          postgres    false    218    216    4660            @           2606    16450 /   perfis_clientes perfis_clientes_cliente_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.perfis_clientes
    ADD CONSTRAINT perfis_clientes_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(cliente_id);
 Y   ALTER TABLE ONLY public.perfis_clientes DROP CONSTRAINT perfis_clientes_cliente_id_fkey;
       public          postgres    false    220    216    4660            �   i   x��1�@���)�w%�,����f�)&��OVh�G�b�wE�}1�'�S�L�F"�x9�j�ż���Qk��e����͐Z���Z�^}�Y;�\D����      �   #   x�3�4A.# i�i�e"�|Nc����� SU]      �   E   x�U̱�0C���%'��c&��s �t֓�	˽�hJd)J4���
���<PKǿ��w��:��>��      �   {   x�-���0�����R�	�5��S�R�Nwb���c���d����
���pHV��i���v���p+x��p6�K��j�s��|H3�tB��=c��|c���[	���R� M�1S      �   ;   x�3���/IM����4450�30�2��M,*)���K崀�s�$&外p�A�1z\\\ ���     