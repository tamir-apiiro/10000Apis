
const express = require('express')
import {handler7139} from "./handler7139";
const app = express()
app.get('/7139', handler7139)
app.listen(3000, () => {})
        