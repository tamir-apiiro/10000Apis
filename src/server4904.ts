
const express = require('express')
import {handler4904} from "./handler4904";
const app = express()
app.get('/4904', handler4904)
app.listen(3000, () => {})
        