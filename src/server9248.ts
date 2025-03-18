
const express = require('express')
import {handler9248} from "./handler9248";
const app = express()
app.get('/9248', handler9248)
app.listen(3000, () => {})
        