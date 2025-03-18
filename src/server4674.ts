
const express = require('express')
import {handler4674} from "./handler4674";
const app = express()
app.get('/4674', handler4674)
app.listen(3000, () => {})
        