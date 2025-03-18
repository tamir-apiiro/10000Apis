
const express = require('express')
import {handler4969} from "./handler4969";
const app = express()
app.get('/4969', handler4969)
app.listen(3000, () => {})
        