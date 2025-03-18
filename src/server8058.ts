
const express = require('express')
import {handler8058} from "./handler8058";
const app = express()
app.get('/8058', handler8058)
app.listen(3000, () => {})
        