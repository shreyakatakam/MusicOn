package com.example.VehicleService.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class VehicleFilter extends GenericFilter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {


        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        String authHeader = request.getHeader("Authorization");
        System.out.println(authHeader+"entered to auth header");
        // Bearer
        if (authHeader == null || !authHeader.startsWith("Bearer"))
        {
            throw new ServletException("Token is Missing......Please Login");
        }
        else {
            String token = authHeader.substring(7);
            Claims claims = Jwts.parser().setSigningKey("secretKeyVehicle").parseClaimsJws(token).getBody();
            System.out.println("Retrieved Claims: " + claims);
            String email = (String) claims.get("userEmail");
            request.setAttribute("a", email);
            String role = (String) claims.get("userRole");
            request.setAttribute("b", role);
            filterChain.doFilter(request, response);

        }
    }
}
