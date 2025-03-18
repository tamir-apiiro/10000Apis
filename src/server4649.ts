
const express = require('express')
import {handler4649} from "./handler4649";
const app = express()
app.get('/4649', handler4649)
app.listen(3000, () => {})
        