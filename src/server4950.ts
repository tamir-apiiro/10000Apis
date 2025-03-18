
const express = require('express')
import {handler4950} from "./handler4950";
const app = express()
app.get('/4950', handler4950)
app.listen(3000, () => {})
        