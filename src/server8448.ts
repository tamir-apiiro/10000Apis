
const express = require('express')
import {handler8448} from "./handler8448";
const app = express()
app.get('/8448', handler8448)
app.listen(3000, () => {})
        