
const express = require('express')
import {handler4133} from "./handler4133";
const app = express()
app.get('/4133', handler4133)
app.listen(3000, () => {})
        