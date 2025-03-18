
const express = require('express')
import {handler9564} from "./handler9564";
const app = express()
app.get('/9564', handler9564)
app.listen(3000, () => {})
        