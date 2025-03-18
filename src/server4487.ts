
const express = require('express')
import {handler4487} from "./handler4487";
const app = express()
app.get('/4487', handler4487)
app.listen(3000, () => {})
        