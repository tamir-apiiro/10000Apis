
const express = require('express')
import {handler4778} from "./handler4778";
const app = express()
app.get('/4778', handler4778)
app.listen(3000, () => {})
        