
const express = require('express')
import {handler4241} from "./handler4241";
const app = express()
app.get('/4241', handler4241)
app.listen(3000, () => {})
        