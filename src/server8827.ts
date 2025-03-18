
const express = require('express')
import {handler8827} from "./handler8827";
const app = express()
app.get('/8827', handler8827)
app.listen(3000, () => {})
        