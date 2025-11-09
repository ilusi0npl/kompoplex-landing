.PHONY: help start dev server open clean

# Domyślny port
PORT ?= 8000

help: ## Pokaż tę pomoc
	@echo "Dostępne komendy:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'
	@echo ""
	@echo "Użycie:"
	@echo "  make start       - uruchom serwer na porcie $(PORT)"
	@echo "  make start PORT=3000 - uruchom na innym porcie"

start: ## Uruchom lokalny serwer HTTP (Python)
	@echo "🚀 Uruchamiam serwer na http://localhost:$(PORT)"
	@echo "📱 Otwórz przeglądarkę: http://localhost:$(PORT)"
	@echo "⏹️  Zatrzymaj: Ctrl+C"
	@echo ""
	python3 -m http.server $(PORT)

dev: start ## Alias dla 'start'

server: start ## Alias dla 'start'

open: ## Otwórz stronę w przeglądarce (wymaga uruchomionego serwera)
	@echo "🌐 Otwieram http://localhost:$(PORT)"
	@xdg-open http://localhost:$(PORT) 2>/dev/null || \
	 sensible-browser http://localhost:$(PORT) 2>/dev/null || \
	 x-www-browser http://localhost:$(PORT) 2>/dev/null || \
	 echo "❌ Nie można otworzyć przeglądarki. Otwórz ręcznie: http://localhost:$(PORT)"

clean: ## Usuń pliki tymczasowe
	@echo "🧹 Czyszczenie..."
	@find . -type f -name "*.pyc" -delete
	@find . -type d -name "__pycache__" -delete
	@find . -type f -name ".DS_Store" -delete
	@find . -type f -name "Thumbs.db" -delete
	@echo "✅ Wyczyszczone!"

git-status: ## Pokaż status git
	@git status

git-log: ## Pokaż ostatnie commity
	@git log --oneline --graph --decorate -10

deploy-check: ## Sprawdź czy strona jest gotowa do deploy
	@echo "🔍 Sprawdzam pliki..."
	@test -f index.html && echo "✅ index.html" || echo "❌ Brak index.html"
	@test -d css && echo "✅ katalog css/" || echo "❌ Brak katalogu css/"
	@test -d js && echo "✅ katalog js/" || echo "❌ Brak katalogu js/"
	@test -d assets && echo "✅ katalog assets/" || echo "❌ Brak katalogu assets/"
	@echo ""
	@echo "📊 Statystyki:"
	@echo "  Pliki HTML: $$(find . -name '*.html' | wc -l)"
	@echo "  Pliki CSS:  $$(find . -name '*.css' | wc -l)"
	@echo "  Pliki JS:   $$(find . -name '*.js' | wc -l)"
	@echo "  Obrazy:     $$(find assets/images -type f 2>/dev/null | wc -l)"
