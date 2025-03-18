
const express = require('express')
import {handler4943} from "./handler4943";
const app = express()
app.get('/4943', handler4943)
app.listen(3000, () => {})
        