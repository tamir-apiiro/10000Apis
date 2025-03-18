
const express = require('express')
import {handler4037} from "./handler4037";
const app = express()
app.get('/4037', handler4037)
app.listen(3000, () => {})
        