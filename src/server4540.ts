
const express = require('express')
import {handler4540} from "./handler4540";
const app = express()
app.get('/4540', handler4540)
app.listen(3000, () => {})
        