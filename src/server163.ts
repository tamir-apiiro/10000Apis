
const express = require('express')
import {handler163} from "./handler163";
const app = express()
app.get('/163', handler163)
app.listen(3000, () => {})
        