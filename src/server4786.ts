
const express = require('express')
import {handler4786} from "./handler4786";
const app = express()
app.get('/4786', handler4786)
app.listen(3000, () => {})
        