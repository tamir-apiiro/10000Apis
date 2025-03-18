
const express = require('express')
import {handler4989} from "./handler4989";
const app = express()
app.get('/4989', handler4989)
app.listen(3000, () => {})
        