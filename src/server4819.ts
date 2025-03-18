
const express = require('express')
import {handler4819} from "./handler4819";
const app = express()
app.get('/4819', handler4819)
app.listen(3000, () => {})
        