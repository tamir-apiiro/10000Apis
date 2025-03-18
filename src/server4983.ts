
const express = require('express')
import {handler4983} from "./handler4983";
const app = express()
app.get('/4983', handler4983)
app.listen(3000, () => {})
        