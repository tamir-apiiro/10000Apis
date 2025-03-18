
const express = require('express')
import {handler9563} from "./handler9563";
const app = express()
app.get('/9563', handler9563)
app.listen(3000, () => {})
        