
const express = require('express')
import {handler9277} from "./handler9277";
const app = express()
app.get('/9277', handler9277)
app.listen(3000, () => {})
        