
const express = require('express')
import {handler4813} from "./handler4813";
const app = express()
app.get('/4813', handler4813)
app.listen(3000, () => {})
        