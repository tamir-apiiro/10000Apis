
const express = require('express')
import {handler4134} from "./handler4134";
const app = express()
app.get('/4134', handler4134)
app.listen(3000, () => {})
        