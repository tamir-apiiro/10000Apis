
const express = require('express')
import {handler2194} from "./handler2194";
const app = express()
app.get('/2194', handler2194)
app.listen(3000, () => {})
        