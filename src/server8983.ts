
const express = require('express')
import {handler8983} from "./handler8983";
const app = express()
app.get('/8983', handler8983)
app.listen(3000, () => {})
        