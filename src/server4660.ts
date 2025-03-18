
const express = require('express')
import {handler4660} from "./handler4660";
const app = express()
app.get('/4660', handler4660)
app.listen(3000, () => {})
        