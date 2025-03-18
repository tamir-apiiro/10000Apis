
const express = require('express')
import {handler825} from "./handler825";
const app = express()
app.get('/825', handler825)
app.listen(3000, () => {})
        