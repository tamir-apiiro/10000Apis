
const express = require('express')
import {handler7339} from "./handler7339";
const app = express()
app.get('/7339', handler7339)
app.listen(3000, () => {})
        