
const express = require('express')
import {handler4418} from "./handler4418";
const app = express()
app.get('/4418', handler4418)
app.listen(3000, () => {})
        