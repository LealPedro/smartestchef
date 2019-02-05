package br.com.projetofinal.model;

import java.io.Serializable;
import java.util.Arrays;

import com.google.gson.Gson;

public class CarrinhoJson implements Serializable {

	private static final long serialVersionUID = 1L;
	private long id;
	private Integer mesa;
	private ItemVenda[] carrinho;
	private Double total;
	
	public CarrinhoJson() {
		// TODO Auto-generated constructor stub
	}

	public CarrinhoJson(long id, Integer mesa, ItemVenda[] carrinho, Double total) {
		this.id = id;
		this.mesa = mesa;
		this.carrinho = carrinho;
		this.total = total;
	}

	@Override
	public String toString() {
		return "CarrinhoJson [id=" + id + ", mesa=" + mesa + ", carrinho=" + Arrays.toString(carrinho) + ", total="
				+ total + "]";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Integer getMesa() {
		return mesa;
	}

	public void setMesa(Integer mesa) {
		this.mesa = mesa;
	}

	public ItemVenda[] getCarrinho() {
		return carrinho;
	}

	public void setCarrinho(ItemVenda[] carrinho) {
		this.carrinho = carrinho;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CarrinhoJson other = (CarrinhoJson) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	public String toJson() {
		return new Gson().toJson(this);
	}
}
