package br.com.projetofinal.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import br.com.projetofinal.dao.ItemVendaDao;
import br.com.projetofinal.dao.ProdutoDao;
import br.com.projetofinal.dao.VendaDao;
import br.com.projetofinal.model.CarrinhoJson;
import br.com.projetofinal.model.ItemVenda;
import br.com.projetofinal.model.Produto;
import br.com.projetofinal.model.Venda;

@WebServlet("/pedidos/checkout")
public class ServletCarrinho extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public ServletCarrinho() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		CarrinhoJson carrinho = new Gson().fromJson(request.getReader(), CarrinhoJson.class);
		response.getWriter().append(carrinho.toJson());
		
		List<String> ids = new ArrayList<String>();
		List<String> qtd = new ArrayList<String>();
		Double total;
		int mesa;
		
		mesa = carrinho.getMesa();
		
		for (ItemVenda item : carrinho.getCarrinho()) {
			ids.add(String.valueOf(item.getId()));
		}
		
		for (ItemVenda item : carrinho.getCarrinho()) {
			qtd.add(String.valueOf(item.getPreco()));
		}
		
		total = carrinho.getTotal();
		
		HttpSession session = request.getSession();
		String numeroMesa = request.getParameter("numeromesa");
		//total = total.replace(',', '.');
		Double valor = total;
		Date data = new Date(System.currentTimeMillis());
		SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd");  
		
		if (valor != null) {
			List<ItemVenda> dados = new ArrayList<ItemVenda>();
			try {
				for (int i = 0; i < ids.size(); i++) {
					Produto pd = new ProdutoDao().searchById(Integer.parseInt(ids.get(i)));
					ItemVenda pedido = new ItemVenda();
					pedido.setQuantidade(Integer.parseInt(qtd.get(i)));
					pedido.setIdproduto(Integer.parseInt(ids.get(i)));   
					pedido.setPreco(pd.getPreco() * Integer.parseInt(qtd.get(i)));
					dados.add(pedido);
					ItemVendaDao dao = new ItemVendaDao();
					//dao.add(pedido);
				}
				for (ItemVenda p : dados) {
					ItemVendaDao dao = new ItemVendaDao();
					Integer itemvenda = dao.add(p);
					VendaDao cd = new VendaDao();
					Venda compra = new Venda();
					
					compra.setData_compra(fmt.format(data));
					compra.setPrecoTotal(valor);
					compra.setNumeroMesa(numeroMesa);
					compra.setId_itemVenda(itemvenda);
					cd.add(compra);
				}
			} catch (Exception e) {
				// TODO: handle exception
			}
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

	@SuppressWarnings("unused")
	private String requestContentAsString(HttpServletRequest request) {
	    StringBuffer buffer = new StringBuffer();
	    String line = null;
	    try {
	        BufferedReader reader = request.getReader();
	        while ((line = reader.readLine()) != null)
	            buffer.append(line);
	    } catch (Exception e) {
	        e.printStackTrace();
	        return null;
	    }

	    return buffer.toString();
	}
}
