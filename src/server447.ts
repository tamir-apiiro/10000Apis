
const express = require('express')
import {handler447} from "./handler447";
const app = express()
app.get('/447', handler447)
app.listen(3000, () => {})
        