
const express = require('express')
import {handler797} from "./handler797";
const app = express()
app.get('/797', handler797)
app.listen(3000, () => {})
        