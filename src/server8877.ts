
const express = require('express')
import {handler8877} from "./handler8877";
const app = express()
app.get('/8877', handler8877)
app.listen(3000, () => {})
        