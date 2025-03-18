
const express = require('express')
import {handler8198} from "./handler8198";
const app = express()
app.get('/8198', handler8198)
app.listen(3000, () => {})
        