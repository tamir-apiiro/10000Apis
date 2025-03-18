
const express = require('express')
import {handler4428} from "./handler4428";
const app = express()
app.get('/4428', handler4428)
app.listen(3000, () => {})
        