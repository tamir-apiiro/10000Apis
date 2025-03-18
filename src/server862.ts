
const express = require('express')
import {handler862} from "./handler862";
const app = express()
app.get('/862', handler862)
app.listen(3000, () => {})
        