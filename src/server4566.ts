
const express = require('express')
import {handler4566} from "./handler4566";
const app = express()
app.get('/4566', handler4566)
app.listen(3000, () => {})
        