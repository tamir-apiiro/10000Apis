
const express = require('express')
import {handler382} from "./handler382";
const app = express()
app.get('/382', handler382)
app.listen(3000, () => {})
        