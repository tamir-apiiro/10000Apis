
const express = require('express')
import {handler9254} from "./handler9254";
const app = express()
app.get('/9254', handler9254)
app.listen(3000, () => {})
        