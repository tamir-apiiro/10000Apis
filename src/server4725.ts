
const express = require('express')
import {handler4725} from "./handler4725";
const app = express()
app.get('/4725', handler4725)
app.listen(3000, () => {})
        