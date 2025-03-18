
const express = require('express')
import {handler4290} from "./handler4290";
const app = express()
app.get('/4290', handler4290)
app.listen(3000, () => {})
        