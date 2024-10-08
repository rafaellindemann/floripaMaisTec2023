PGDMP  5                    |         	   m02s04a02    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16417 	   m02s04a02    DATABASE     �   CREATE DATABASE m02s04a02 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE m02s04a02;
                postgres    false            �            1259    16429    pedidos    TABLE     �   CREATE TABLE public.pedidos (
    id integer NOT NULL,
    usuario_id integer,
    data_pedido date,
    valor numeric(10,2)
);
    DROP TABLE public.pedidos;
       public         heap    postgres    false            �            1259    16428    pedidos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pedidos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.pedidos_id_seq;
       public          postgres    false    218            �           0    0    pedidos_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.pedidos_id_seq OWNED BY public.pedidos.id;
          public          postgres    false    217            S           2604    16432 
   pedidos id    DEFAULT     h   ALTER TABLE ONLY public.pedidos ALTER COLUMN id SET DEFAULT nextval('public.pedidos_id_seq'::regclass);
 9   ALTER TABLE public.pedidos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            �          0    16429    pedidos 
   TABLE DATA           E   COPY public.pedidos (id, usuario_id, data_pedido, valor) FROM stdin;
    public          postgres    false    218   �       �           0    0    pedidos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.pedidos_id_seq', 11, true);
          public          postgres    false    217            U           2606    16434    pedidos pedidos_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_pkey;
       public            postgres    false    218            V           2606    16435    pedidos pedidos_usuario_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);
 I   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_usuario_id_fkey;
       public          postgres    false    218            �   }   x�m��D1cыƟ^��:���2fG�b8}��B�z�8��ήa	O�N�����D85)�|����,��u�4jP6��w�u���a��(�mLD�J���祾�qq��4�T��TD>aV)v     