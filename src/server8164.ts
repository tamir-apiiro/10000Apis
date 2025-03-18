
const express = require('express')
import {handler8164} from "./handler8164";
const app = express()
app.get('/8164', handler8164)
app.listen(3000, () => {})
        