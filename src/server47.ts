
const express = require('express')
import {handler47} from "./handler47";
const app = express()
app.get('/47', handler47)
app.listen(3000, () => {})
        