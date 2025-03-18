
const express = require('express')
import {handler7904} from "./handler7904";
const app = express()
app.get('/7904', handler7904)
app.listen(3000, () => {})
        