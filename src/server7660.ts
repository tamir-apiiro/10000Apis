
const express = require('express')
import {handler7660} from "./handler7660";
const app = express()
app.get('/7660', handler7660)
app.listen(3000, () => {})
        