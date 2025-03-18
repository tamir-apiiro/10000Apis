
const express = require('express')
import {handler8960} from "./handler8960";
const app = express()
app.get('/8960', handler8960)
app.listen(3000, () => {})
        