
const express = require('express')
import {handler7209} from "./handler7209";
const app = express()
app.get('/7209', handler7209)
app.listen(3000, () => {})
        