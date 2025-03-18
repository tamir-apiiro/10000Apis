
const express = require('express')
import {handler7535} from "./handler7535";
const app = express()
app.get('/7535', handler7535)
app.listen(3000, () => {})
        