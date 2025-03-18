
const express = require('express')
import {handler7308} from "./handler7308";
const app = express()
app.get('/7308', handler7308)
app.listen(3000, () => {})
        