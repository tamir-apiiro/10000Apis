
const express = require('express')
import {handler2439} from "./handler2439";
const app = express()
app.get('/2439', handler2439)
app.listen(3000, () => {})
        