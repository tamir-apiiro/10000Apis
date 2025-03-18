
const express = require('express')
import {handler118} from "./handler118";
const app = express()
app.get('/118', handler118)
app.listen(3000, () => {})
        