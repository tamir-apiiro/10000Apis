
const express = require('express')
import {handler921} from "./handler921";
const app = express()
app.get('/921', handler921)
app.listen(3000, () => {})
        