
const express = require('express')
import {handler4794} from "./handler4794";
const app = express()
app.get('/4794', handler4794)
app.listen(3000, () => {})
        