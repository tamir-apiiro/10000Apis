
const express = require('express')
import {handler4257} from "./handler4257";
const app = express()
app.get('/4257', handler4257)
app.listen(3000, () => {})
        