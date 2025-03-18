
const express = require('express')
import {handler8992} from "./handler8992";
const app = express()
app.get('/8992', handler8992)
app.listen(3000, () => {})
        