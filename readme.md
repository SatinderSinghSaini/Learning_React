React and ReactDOM are available over CDN and are required for development in React.Include these scripts in head tag of index.html:
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

Include babel\standalone script for browser to understand the syntax:
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel"></script>