
const express = require('express')
import {handler4745} from "./handler4745";
const app = express()
app.get('/4745', handler4745)
app.listen(3000, () => {})
        