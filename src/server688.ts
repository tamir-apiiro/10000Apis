
const express = require('express')
import {handler688} from "./handler688";
const app = express()
app.get('/688', handler688)
app.listen(3000, () => {})
        