
const express = require('express')
import {handler8691} from "./handler8691";
const app = express()
app.get('/8691', handler8691)
app.listen(3000, () => {})
        