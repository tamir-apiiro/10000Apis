
const express = require('express')
import {handler7447} from "./handler7447";
const app = express()
app.get('/7447', handler7447)
app.listen(3000, () => {})
        