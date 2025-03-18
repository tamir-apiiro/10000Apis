
const express = require('express')
import {handler374} from "./handler374";
const app = express()
app.get('/374', handler374)
app.listen(3000, () => {})
        