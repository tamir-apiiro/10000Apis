
const express = require('express')
import {handler8847} from "./handler8847";
const app = express()
app.get('/8847', handler8847)
app.listen(3000, () => {})
        