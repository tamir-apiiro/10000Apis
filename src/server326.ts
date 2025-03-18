
const express = require('express')
import {handler326} from "./handler326";
const app = express()
app.get('/326', handler326)
app.listen(3000, () => {})
        