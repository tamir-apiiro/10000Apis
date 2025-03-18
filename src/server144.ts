
const express = require('express')
import {handler144} from "./handler144";
const app = express()
app.get('/144', handler144)
app.listen(3000, () => {})
        