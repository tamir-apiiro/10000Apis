
const express = require('express')
import {handler2994} from "./handler2994";
const app = express()
app.get('/2994', handler2994)
app.listen(3000, () => {})
        