
const express = require('express')
import {handler4062} from "./handler4062";
const app = express()
app.get('/4062', handler4062)
app.listen(3000, () => {})
        