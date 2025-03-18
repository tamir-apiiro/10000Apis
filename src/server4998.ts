
const express = require('express')
import {handler4998} from "./handler4998";
const app = express()
app.get('/4998', handler4998)
app.listen(3000, () => {})
        