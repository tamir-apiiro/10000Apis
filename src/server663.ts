
const express = require('express')
import {handler663} from "./handler663";
const app = express()
app.get('/663', handler663)
app.listen(3000, () => {})
        