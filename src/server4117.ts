
const express = require('express')
import {handler4117} from "./handler4117";
const app = express()
app.get('/4117', handler4117)
app.listen(3000, () => {})
        