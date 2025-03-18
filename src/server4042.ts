
const express = require('express')
import {handler4042} from "./handler4042";
const app = express()
app.get('/4042', handler4042)
app.listen(3000, () => {})
        