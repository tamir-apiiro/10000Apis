
const express = require('express')
import {handler8562} from "./handler8562";
const app = express()
app.get('/8562', handler8562)
app.listen(3000, () => {})
        