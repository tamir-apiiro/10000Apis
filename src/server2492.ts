
const express = require('express')
import {handler2492} from "./handler2492";
const app = express()
app.get('/2492', handler2492)
app.listen(3000, () => {})
        