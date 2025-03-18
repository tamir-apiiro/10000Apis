
const express = require('express')
import {handler711} from "./handler711";
const app = express()
app.get('/711', handler711)
app.listen(3000, () => {})
        