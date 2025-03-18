
const express = require('express')
import {handler8078} from "./handler8078";
const app = express()
app.get('/8078', handler8078)
app.listen(3000, () => {})
        