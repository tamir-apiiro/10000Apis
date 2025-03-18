
const express = require('express')
import {handler8197} from "./handler8197";
const app = express()
app.get('/8197', handler8197)
app.listen(3000, () => {})
        