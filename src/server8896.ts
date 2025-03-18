
const express = require('express')
import {handler8896} from "./handler8896";
const app = express()
app.get('/8896', handler8896)
app.listen(3000, () => {})
        