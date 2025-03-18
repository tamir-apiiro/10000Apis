
const express = require('express')
import {handler4793} from "./handler4793";
const app = express()
app.get('/4793', handler4793)
app.listen(3000, () => {})
        