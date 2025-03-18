
const express = require('express')
import {handler2343} from "./handler2343";
const app = express()
app.get('/2343', handler2343)
app.listen(3000, () => {})
        