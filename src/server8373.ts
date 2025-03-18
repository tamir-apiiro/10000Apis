
const express = require('express')
import {handler8373} from "./handler8373";
const app = express()
app.get('/8373', handler8373)
app.listen(3000, () => {})
        