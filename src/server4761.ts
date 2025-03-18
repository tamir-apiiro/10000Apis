
const express = require('express')
import {handler4761} from "./handler4761";
const app = express()
app.get('/4761', handler4761)
app.listen(3000, () => {})
        