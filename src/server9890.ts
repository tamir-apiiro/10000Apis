
const express = require('express')
import {handler9890} from "./handler9890";
const app = express()
app.get('/9890', handler9890)
app.listen(3000, () => {})
        