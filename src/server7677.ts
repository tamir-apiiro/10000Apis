
const express = require('express')
import {handler7677} from "./handler7677";
const app = express()
app.get('/7677', handler7677)
app.listen(3000, () => {})
        