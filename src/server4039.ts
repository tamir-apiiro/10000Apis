
const express = require('express')
import {handler4039} from "./handler4039";
const app = express()
app.get('/4039', handler4039)
app.listen(3000, () => {})
        