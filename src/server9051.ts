
const express = require('express')
import {handler9051} from "./handler9051";
const app = express()
app.get('/9051', handler9051)
app.listen(3000, () => {})
        