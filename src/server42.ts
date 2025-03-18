
const express = require('express')
import {handler42} from "./handler42";
const app = express()
app.get('/42', handler42)
app.listen(3000, () => {})
        