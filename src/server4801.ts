
const express = require('express')
import {handler4801} from "./handler4801";
const app = express()
app.get('/4801', handler4801)
app.listen(3000, () => {})
        