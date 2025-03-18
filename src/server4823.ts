
const express = require('express')
import {handler4823} from "./handler4823";
const app = express()
app.get('/4823', handler4823)
app.listen(3000, () => {})
        