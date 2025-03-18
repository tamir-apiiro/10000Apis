
const express = require('express')
import {handler8239} from "./handler8239";
const app = express()
app.get('/8239', handler8239)
app.listen(3000, () => {})
        