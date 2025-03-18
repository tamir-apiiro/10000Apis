
const express = require('express')
import {handler9735} from "./handler9735";
const app = express()
app.get('/9735', handler9735)
app.listen(3000, () => {})
        