
const express = require('express')
import {handler4208} from "./handler4208";
const app = express()
app.get('/4208', handler4208)
app.listen(3000, () => {})
        