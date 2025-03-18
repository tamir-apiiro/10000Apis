
const express = require('express')
import {handler8117} from "./handler8117";
const app = express()
app.get('/8117', handler8117)
app.listen(3000, () => {})
        