
const express = require('express')
import {handler8940} from "./handler8940";
const app = express()
app.get('/8940', handler8940)
app.listen(3000, () => {})
        