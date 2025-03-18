
const express = require('express')
import {handler8638} from "./handler8638";
const app = express()
app.get('/8638', handler8638)
app.listen(3000, () => {})
        