
const express = require('express')
import {handler974} from "./handler974";
const app = express()
app.get('/974', handler974)
app.listen(3000, () => {})
        