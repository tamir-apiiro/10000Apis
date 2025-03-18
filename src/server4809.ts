
const express = require('express')
import {handler4809} from "./handler4809";
const app = express()
app.get('/4809', handler4809)
app.listen(3000, () => {})
        