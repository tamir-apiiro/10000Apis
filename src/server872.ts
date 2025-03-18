
const express = require('express')
import {handler872} from "./handler872";
const app = express()
app.get('/872', handler872)
app.listen(3000, () => {})
        