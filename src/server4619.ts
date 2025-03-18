
const express = require('express')
import {handler4619} from "./handler4619";
const app = express()
app.get('/4619', handler4619)
app.listen(3000, () => {})
        