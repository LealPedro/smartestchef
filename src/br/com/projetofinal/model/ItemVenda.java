package br.com.projetofinal.model;

import java.io.Serializable;

public class ItemVenda implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private int id, idproduto;
	
	private Double preco;
	
	private int quantidade;
	
	private Produto produto;
	
	
	public ItemVenda() {
	
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public void setIdproduto(int idproduto) {
		this.idproduto = idproduto;
	}


	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}



	public Double getPreco() {
		return preco;
	}


	public void setPreco(Double preco) {
		this.preco = preco;
	}


	public Integer getQuantidade() {
		return quantidade;
	}


	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}


	public Produto getProduto() {
		return produto;
	}


	public void setProduto(Produto produto) {
		this.produto = produto;
	}


	

	public ItemVenda(Integer id, Double preco, Integer quantidade, Produto produto) {
		super();
		this.id = id;
		this.preco = preco;
		this.quantidade = quantidade;
		this.produto = produto;
	}


	public Integer getIdproduto() {
		return idproduto;
	}


	public void setIdproduto(Integer idproduto) {
		this.idproduto = idproduto;
	}


	@Override
	public String toString() {
		return "ItemVenda [id=" + id + ", idproduto=" + idproduto + ", preco=" + preco + ", quantidade="
				+ quantidade + ", produto=" + produto + "]";
	}
	
	
	
	
	
	
	

}
