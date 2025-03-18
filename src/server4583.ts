
const express = require('express')
import {handler4583} from "./handler4583";
const app = express()
app.get('/4583', handler4583)
app.listen(3000, () => {})
        