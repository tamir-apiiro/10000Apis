
const express = require('express')
import {handler4921} from "./handler4921";
const app = express()
app.get('/4921', handler4921)
app.listen(3000, () => {})
        