
const express = require('express')
import {handler8580} from "./handler8580";
const app = express()
app.get('/8580', handler8580)
app.listen(3000, () => {})
        