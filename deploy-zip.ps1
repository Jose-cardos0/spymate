# Script para compactar arquivos para deploy no Hostinger
# SpyMate - Deploy Automation

Write-Host "PREPARANDO DEPLOY PARA HOSTINGER..." -ForegroundColor Green
Write-Host ""

# Verificar se a pasta dist existe
if (-not (Test-Path "dist")) {
    Write-Host "Erro: Pasta 'dist' nao encontrada!" -ForegroundColor Red
    Write-Host "Execute 'npm run build' primeiro." -ForegroundColor Yellow
    exit 1
}

# Nome do arquivo zip
$zipName = "spymate-hostinger-$(Get-Date -Format 'yyyy-MM-dd-HHmm').zip"

Write-Host "Criando arquivo zip: $zipName" -ForegroundColor Cyan

# Compactar arquivos da pasta dist
try {
    Compress-Archive -Path "dist\*" -DestinationPath $zipName -Force
    Write-Host "Arquivo criado com sucesso!" -ForegroundColor Green
} catch {
    Write-Host "Erro ao criar arquivo zip: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Listar conteudo do zip
Write-Host ""
Write-Host "CONTEUDO DO ZIP:" -ForegroundColor Yellow
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($zipName)
$zip.Entries | ForEach-Object {
    Write-Host "   - $($_.FullName)" -ForegroundColor White
}
$zip.Dispose()

Write-Host ""
Write-Host "PROXIMOS PASSOS:" -ForegroundColor Magenta
Write-Host "1. Faca upload do arquivo $zipName para o Hostinger" -ForegroundColor White
Write-Host "2. Extraia no diretorio public_html/" -ForegroundColor White
Write-Host "3. Verifique se o .htaccess foi extraido" -ForegroundColor White
Write-Host "4. Configure o dominio no Firebase" -ForegroundColor White
Write-Host "5. Teste todas as funcionalidades" -ForegroundColor White

Write-Host ""
Write-Host "Consulte DEPLOY-HOSTINGER.md para instrucoes detalhadas" -ForegroundColor Cyan
Write-Host ""
Write-Host "Deploy pronto para o Hostinger!" -ForegroundColor Green 