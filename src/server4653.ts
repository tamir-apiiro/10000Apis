
const express = require('express')
import {handler4653} from "./handler4653";
const app = express()
app.get('/4653', handler4653)
app.listen(3000, () => {})
        