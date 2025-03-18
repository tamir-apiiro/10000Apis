
const express = require('express')
import {handler8381} from "./handler8381";
const app = express()
app.get('/8381', handler8381)
app.listen(3000, () => {})
        