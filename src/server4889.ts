
const express = require('express')
import {handler4889} from "./handler4889";
const app = express()
app.get('/4889', handler4889)
app.listen(3000, () => {})
        