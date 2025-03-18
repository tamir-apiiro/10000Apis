
const express = require('express')
import {handler8968} from "./handler8968";
const app = express()
app.get('/8968', handler8968)
app.listen(3000, () => {})
        