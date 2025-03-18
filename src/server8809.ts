
const express = require('express')
import {handler8809} from "./handler8809";
const app = express()
app.get('/8809', handler8809)
app.listen(3000, () => {})
        