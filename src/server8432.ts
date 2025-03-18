
const express = require('express')
import {handler8432} from "./handler8432";
const app = express()
app.get('/8432', handler8432)
app.listen(3000, () => {})
        