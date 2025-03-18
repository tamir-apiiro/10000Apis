
const express = require('express')
import {handler656} from "./handler656";
const app = express()
app.get('/656', handler656)
app.listen(3000, () => {})
        