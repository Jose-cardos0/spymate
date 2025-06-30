# 🚀 GUIA DE DEPLOY - SPYMATE NO HOSTINGER

## 📋 **PRÉ-REQUISITOS**

### 1. **Conta Hostinger**

- ✅ Conta Hostinger ativa
- ✅ Domínio configurado
- ✅ Acesso ao painel hPanel

### 2. **Configurações Firebase**

- ✅ Projeto Firebase configurado
- ✅ Variáveis de ambiente verificadas
- ✅ Domínio autorizado no Firebase

---

## 🛠️ **PASSO A PASSO DO DEPLOY**

### **ETAPA 1: Preparar os Arquivos**

1. **Build do Projeto**

   ```bash
   npm run build
   ```

2. **Verificar Arquivos Gerados**
   ```
   dist/
   ├── .htaccess          ← ESSENCIAL para SPA
   ├── index.html         ← Página principal
   ├── faviconspy.png     ← Favicon
   ├── vite.svg          ← Logo Vite
   └── assets/           ← CSS, JS, imagens
       ├── index-XXXXX.css
       └── index-XXXXX.js
   ```

### **ETAPA 2: Upload para Hostinger**

1. **Acessar File Manager**

   - Entre no hPanel do Hostinger
   - Vá em "File Manager"
   - Navegue até `public_html/`

2. **Limpar Diretório (se necessário)**

   - Delete arquivos existentes em `public_html/`
   - Mantenha apenas `.htaccess` se houver configurações específicas

3. **Upload dos Arquivos**
   - Selecione TODOS os arquivos da pasta `dist/`
   - Faça upload para `public_html/`
   - **IMPORTANTE**: Inclua o arquivo `.htaccess`

### **ETAPA 3: Verificar Configurações**

1. **Verificar .htaccess**

   - Confirme que o arquivo `.htaccess` foi enviado
   - O arquivo deve estar em `public_html/.htaccess`

2. **Testar Roteamento**
   - Acesse: `seudominio.com`
   - Teste: `seudominio.com/app`
   - Teste: `seudominio.com/login`
   - Todas as rotas devem funcionar

---

## 🔧 **CONFIGURAÇÕES FIREBASE**

### **Domínios Autorizados**

No console Firebase, adicione:

```
seudominio.com
www.seudominio.com
```

### **Configuração de Ambiente**

Verifique se as variáveis estão corretas:

```javascript
// src/config/firebase.js
const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  // ... outras configs
};
```

---

## ✅ **VERIFICAÇÕES PÓS-DEPLOY**

### **Testes Essenciais**

- [ ] Página inicial carrega corretamente
- [ ] Login/Registro funcionam
- [ ] Roteamento funciona (F5 em qualquer página)
- [ ] WhatsApp Float aparece
- [ ] Detecção automática de idioma funciona
- [ ] Firebase Authentication funciona
- [ ] Modais abrem corretamente

### **Performance**

- [ ] Compressão GZIP ativa
- [ ] Cache de arquivos estáticos
- [ ] Carregamento rápido (< 3 segundos)

---

## 🐛 **SOLUÇÃO DE PROBLEMAS**

### **Problema: Página 404 em Rotas**

**Solução:**

```apache
# Verificar se o .htaccess contém:
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### **Problema: Firebase não Conecta**

**Solução:**

1. Verificar domínios autorizados no Firebase
2. Verificar configuração em `firebase.js`
3. Verificar console do navegador para erros

### **Problema: Arquivos CSS/JS não Carregam**

**Solução:**

1. Verificar se os arquivos estão em `public_html/assets/`
2. Verificar permissões (755 para pastas, 644 para arquivos)
3. Limpar cache do navegador

### **Problema: WhatsApp não Abre**

**Solução:**

- Verificar número no código: `+5521989839509`
- Testar em dispositivos mobile e desktop

---

## 📊 **OTIMIZAÇÕES INCLUÍDAS**

### **Compressão GZIP**

- ✅ Reduz tamanho dos arquivos em ~70%
- ✅ Carregamento mais rápido

### **Cache Inteligente**

- ✅ Assets estáticos: cache de 1 ano
- ✅ HTML: sem cache (para updates)

### **Segurança**

- ✅ Headers de segurança
- ✅ Proteção contra XSS
- ✅ Bloqueio de arquivos sensíveis

### **SEO**

- ✅ UTF-8 encoding
- ✅ Proper MIME types
- ✅ Redirect handling

---

## 🔄 **UPDATES FUTUROS**

### **Como Atualizar**

1. Fazer nova build: `npm run build`
2. Fazer backup do `.htaccess` atual
3. Upload dos novos arquivos
4. Verificar se `.htaccess` permanece

### **Versionamento**

- CSS/JS têm hash único (ex: `index-7Xzf940h.css`)
- Cache automático é invalidado

---

## 📞 **SUPORTE**

### **Hostinger**

- Suporte 24/7 via chat
- Documentation: hostinger.com/tutorials

### **Firebase**

- Console: console.firebase.google.com
- Documentation: firebase.google.com/docs

---

## 🎯 **CHECKLIST FINAL**

**Antes do Deploy:**

- [ ] Build realizada com sucesso
- [ ] Firebase configurado
- [ ] .htaccess criado
- [ ] Variáveis de ambiente verificadas

**Após o Deploy:**

- [ ] Site acessível via domínio
- [ ] Todas as rotas funcionam
- [ ] Login/registro funcionam
- [ ] Performance satisfatória
- [ ] Mobile responsivo

---

## 🚀 **RESULTADO ESPERADO**

✅ Site 100% funcional  
✅ Velocidade otimizada  
✅ SEO friendly  
✅ Seguro  
✅ Mobile responsivo  
✅ Detecção automática de idioma  
✅ Firebase integrado

**Seu SpyMate está pronto para produção! 🎉**
