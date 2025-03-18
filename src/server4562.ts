
const express = require('express')
import {handler4562} from "./handler4562";
const app = express()
app.get('/4562', handler4562)
app.listen(3000, () => {})
        