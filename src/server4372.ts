
const express = require('express')
import {handler4372} from "./handler4372";
const app = express()
app.get('/4372', handler4372)
app.listen(3000, () => {})
        