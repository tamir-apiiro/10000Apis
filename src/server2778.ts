
const express = require('express')
import {handler2778} from "./handler2778";
const app = express()
app.get('/2778', handler2778)
app.listen(3000, () => {})
        