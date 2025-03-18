
const express = require('express')
import {handler4178} from "./handler4178";
const app = express()
app.get('/4178', handler4178)
app.listen(3000, () => {})
        