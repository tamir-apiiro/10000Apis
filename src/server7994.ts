
const express = require('express')
import {handler7994} from "./handler7994";
const app = express()
app.get('/7994', handler7994)
app.listen(3000, () => {})
        