
const express = require('express')
import {handler7553} from "./handler7553";
const app = express()
app.get('/7553', handler7553)
app.listen(3000, () => {})
        