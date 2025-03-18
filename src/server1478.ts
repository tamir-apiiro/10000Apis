
const express = require('express')
import {handler1478} from "./handler1478";
const app = express()
app.get('/1478', handler1478)
app.listen(3000, () => {})
        