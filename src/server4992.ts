
const express = require('express')
import {handler4992} from "./handler4992";
const app = express()
app.get('/4992', handler4992)
app.listen(3000, () => {})
        