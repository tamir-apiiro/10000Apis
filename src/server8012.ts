
const express = require('express')
import {handler8012} from "./handler8012";
const app = express()
app.get('/8012', handler8012)
app.listen(3000, () => {})
        