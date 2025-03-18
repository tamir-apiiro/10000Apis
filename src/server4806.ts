
const express = require('express')
import {handler4806} from "./handler4806";
const app = express()
app.get('/4806', handler4806)
app.listen(3000, () => {})
        