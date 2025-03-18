
const express = require('express')
import {handler4169} from "./handler4169";
const app = express()
app.get('/4169', handler4169)
app.listen(3000, () => {})
        