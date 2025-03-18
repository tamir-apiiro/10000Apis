
const express = require('express')
import {handler139} from "./handler139";
const app = express()
app.get('/139', handler139)
app.listen(3000, () => {})
        