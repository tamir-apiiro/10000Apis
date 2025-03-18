
const express = require('express')
import {handler2419} from "./handler2419";
const app = express()
app.get('/2419', handler2419)
app.listen(3000, () => {})
        