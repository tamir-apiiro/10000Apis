
const express = require('express')
import {handler8223} from "./handler8223";
const app = express()
app.get('/8223', handler8223)
app.listen(3000, () => {})
        