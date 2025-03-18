
const express = require('express')
import {handler7147} from "./handler7147";
const app = express()
app.get('/7147', handler7147)
app.listen(3000, () => {})
        