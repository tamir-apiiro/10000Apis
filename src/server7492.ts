
const express = require('express')
import {handler7492} from "./handler7492";
const app = express()
app.get('/7492', handler7492)
app.listen(3000, () => {})
        