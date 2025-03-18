
const express = require('express')
import {handler419} from "./handler419";
const app = express()
app.get('/419', handler419)
app.listen(3000, () => {})
        