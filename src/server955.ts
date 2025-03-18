
const express = require('express')
import {handler955} from "./handler955";
const app = express()
app.get('/955', handler955)
app.listen(3000, () => {})
        