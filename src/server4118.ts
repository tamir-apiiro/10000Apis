
const express = require('express')
import {handler4118} from "./handler4118";
const app = express()
app.get('/4118', handler4118)
app.listen(3000, () => {})
        