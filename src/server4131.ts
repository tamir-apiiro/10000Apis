
const express = require('express')
import {handler4131} from "./handler4131";
const app = express()
app.get('/4131', handler4131)
app.listen(3000, () => {})
        