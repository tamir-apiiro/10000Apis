
const express = require('express')
import {handler7928} from "./handler7928";
const app = express()
app.get('/7928', handler7928)
app.listen(3000, () => {})
        