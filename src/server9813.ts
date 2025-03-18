
const express = require('express')
import {handler9813} from "./handler9813";
const app = express()
app.get('/9813', handler9813)
app.listen(3000, () => {})
        