
const express = require('express')
import {handler9596} from "./handler9596";
const app = express()
app.get('/9596', handler9596)
app.listen(3000, () => {})
        