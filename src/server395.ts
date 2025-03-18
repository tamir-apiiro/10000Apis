
const express = require('express')
import {handler395} from "./handler395";
const app = express()
app.get('/395', handler395)
app.listen(3000, () => {})
        