
const express = require('express')
import {handler7116} from "./handler7116";
const app = express()
app.get('/7116', handler7116)
app.listen(3000, () => {})
        