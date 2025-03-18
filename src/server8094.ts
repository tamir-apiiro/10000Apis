
const express = require('express')
import {handler8094} from "./handler8094";
const app = express()
app.get('/8094', handler8094)
app.listen(3000, () => {})
        