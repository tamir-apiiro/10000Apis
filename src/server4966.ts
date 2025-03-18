
const express = require('express')
import {handler4966} from "./handler4966";
const app = express()
app.get('/4966', handler4966)
app.listen(3000, () => {})
        