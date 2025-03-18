
const express = require('express')
import {handler4103} from "./handler4103";
const app = express()
app.get('/4103', handler4103)
app.listen(3000, () => {})
        