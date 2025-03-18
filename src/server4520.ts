
const express = require('express')
import {handler4520} from "./handler4520";
const app = express()
app.get('/4520', handler4520)
app.listen(3000, () => {})
        