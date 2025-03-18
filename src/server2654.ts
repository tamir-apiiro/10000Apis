
const express = require('express')
import {handler2654} from "./handler2654";
const app = express()
app.get('/2654', handler2654)
app.listen(3000, () => {})
        