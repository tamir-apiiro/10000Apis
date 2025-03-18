
const express = require('express')
import {handler8834} from "./handler8834";
const app = express()
app.get('/8834', handler8834)
app.listen(3000, () => {})
        