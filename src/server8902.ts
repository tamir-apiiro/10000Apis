
const express = require('express')
import {handler8902} from "./handler8902";
const app = express()
app.get('/8902', handler8902)
app.listen(3000, () => {})
        