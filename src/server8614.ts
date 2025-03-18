
const express = require('express')
import {handler8614} from "./handler8614";
const app = express()
app.get('/8614', handler8614)
app.listen(3000, () => {})
        