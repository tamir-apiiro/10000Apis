
const express = require('express')
import {handler4773} from "./handler4773";
const app = express()
app.get('/4773', handler4773)
app.listen(3000, () => {})
        