
const express = require('express')
import {handler739} from "./handler739";
const app = express()
app.get('/739', handler739)
app.listen(3000, () => {})
        