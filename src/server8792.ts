
const express = require('express')
import {handler8792} from "./handler8792";
const app = express()
app.get('/8792', handler8792)
app.listen(3000, () => {})
        