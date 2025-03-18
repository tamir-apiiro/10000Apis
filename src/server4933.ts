
const express = require('express')
import {handler4933} from "./handler4933";
const app = express()
app.get('/4933', handler4933)
app.listen(3000, () => {})
        