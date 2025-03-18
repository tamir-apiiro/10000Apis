
const express = require('express')
import {handler4785} from "./handler4785";
const app = express()
app.get('/4785', handler4785)
app.listen(3000, () => {})
        