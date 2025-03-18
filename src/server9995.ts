
const express = require('express')
import {handler9995} from "./handler9995";
const app = express()
app.get('/9995', handler9995)
app.listen(3000, () => {})
        