
const express = require('express')
import {handler2862} from "./handler2862";
const app = express()
app.get('/2862', handler2862)
app.listen(3000, () => {})
        