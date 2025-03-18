
const express = require('express')
import {handler8215} from "./handler8215";
const app = express()
app.get('/8215', handler8215)
app.listen(3000, () => {})
        