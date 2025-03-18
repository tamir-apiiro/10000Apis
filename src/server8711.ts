
const express = require('express')
import {handler8711} from "./handler8711";
const app = express()
app.get('/8711', handler8711)
app.listen(3000, () => {})
        