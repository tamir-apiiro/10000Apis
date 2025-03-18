
const express = require('express')
import {handler8096} from "./handler8096";
const app = express()
app.get('/8096', handler8096)
app.listen(3000, () => {})
        