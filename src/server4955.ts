
const express = require('express')
import {handler4955} from "./handler4955";
const app = express()
app.get('/4955', handler4955)
app.listen(3000, () => {})
        