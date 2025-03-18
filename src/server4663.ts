
const express = require('express')
import {handler4663} from "./handler4663";
const app = express()
app.get('/4663', handler4663)
app.listen(3000, () => {})
        