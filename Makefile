build: components index.js
	@component-build --dev

components: component.json
	@component-install --dev

watch:
	@component build --dev -w

doc:
	@component build --dev -c
	@rm -fr .gh-pages
	@mkdir .gh-pages
	@cp -r build .gh-pages/
	@cp index.html .gh-pages/index.html
	@ghp-import .gh-pages -n -p
	@rm -fr .gh-pages

clean:
	rm -rf components build

.PHONY: clean start
